import { combineReducers } from "redux";
import newsReducer from "./newsReducers";
import loginReducer from "./loginReducer";
import signUpReducer from "./signUpReducer";

export default combineReducers({
    newsReducer,
    loginReducer,
    signUpReducer,
})