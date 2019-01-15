import { combineReducers } from "redux";
import newsReducer from "./newsReducers";
import authReducer from "./authReducer";
import signUpReducer from "./registration";

export default combineReducers({
    newsReducer,
    authReducer,
    signUpReducer,
})