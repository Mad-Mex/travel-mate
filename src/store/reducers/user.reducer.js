import { userTypes } from "../types";

const { REGISTER } = userTypes;


const initialState ={
    user: {
        name: "",
        email: "",
        password: "",
        profilePicture: ""
    }
};



const userReducer = ( state = initialState , action ) => {

    switch( action.type ){

        case REGISTER : 

            return {
                ...state,
                user : action.payload
            }

        default: 
            return state
    }
    
}

export default userReducer;