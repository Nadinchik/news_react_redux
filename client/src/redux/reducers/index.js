import { combineReducers } from "redux";
import newsReducer from "./newsReducers";
import authReducer from "./authReducer";
import signInReducer from "./registration";

export default combineReducers({
    newsReducer,
    authReducer,
    signInReducer,
})