import { travelsTypes  } from "../types"

const { CREATE_TRAVELS }= travelsTypes

const initialState = []


const travelsReducer = ( state = initialState, action ) => {
    switch(action.type) {
        
        case CREATE_TRAVELS : {
            return {
                ...state,
                travel: action.travel
            }
        };

        default:
                return state;
    }
}

export default travelsReducer