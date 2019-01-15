import { combineReducers } from "redux";
import newsReducer from "./newsReducers";
import authReducer from "./authReducer";
import signUpReducer from "./signUpReducer";

export default combineReducers({
    newsReducer,
    authReducer,
    signUpReducer,
})