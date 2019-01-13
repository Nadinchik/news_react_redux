import { combineReducers } from "redux";
import newsReducer from "./newsReducers";
import authReducer from "./authReducer";

export default combineReducers({
    newsReducer,
    authReducer
})