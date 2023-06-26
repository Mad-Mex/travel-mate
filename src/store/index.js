import {  legacy_createStore as createStore, combineReducers, applyMiddleware  } from "redux"
import thunk from "redux-thunk";
import { authReducer, bookingReducer } from "./reducers"


const rootReducer = combineReducers({
    auth: authReducer,
    booking: bookingReducer
})

export default createStore(rootReducer, applyMiddleware(thunk));