import { userTypes } from "../types";

const { REGISTER } = userTypes


export const createUser = ( name ) => dispatch => {
   dispatch({
        type : REGISTER,
        payload : name
   })
}


