import {  legacy_createStore as createStore, combineReducers, applyMiddleware  } from "redux"
import thunk from "redux-thunk";
import { authReducer, bookingReducer, travelsReducer  } from "./reducers"


const rootReducer = combineReducers({
    auth: authReducer,
    booking: bookingReducer,
    travels: travelsReducer
})

export default createStore(rootReducer, applyMiddleware(thunk));