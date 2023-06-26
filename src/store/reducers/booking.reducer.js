import { bookingTypes } from "../types";

const { BOOKING } = bookingTypes


const initialState = {
    date : "Sin fecha",
    guest: "1"
};


const bookingReducer = ( state = initialState , action ) => {

    switch(action.type){

        case BOOKING : {
            return {
                ...state,
                date: action.date,
                guest: action.guest
            }
        };

        
        default:
            return state;
    }
}


export default bookingReducer;


