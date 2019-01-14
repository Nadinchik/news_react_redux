import { REGISTRATION_USER_REQUEST, REGISTRATION_USER_SUCCESS, REGISTRATION_USER_FAIL } from "../actions/signIn";


const intialState = {
  userData: {},
  error: false
};

const signInReducer = (state = intialState, action) =>{
   switch(action.type) {
     case REGISTRATION_USER_REQUEST:
     {
       return {
         userData: {},
         error: false
       };
     }
     case REGISTRATION_USER_SUCCESS:
     {
       return {
         userData: {},
         error: false
       };
     }
     case REGISTRATION_USER_FAIL:
     {
       return {
         userData: {},
         error: action.error
       };
     }
     default:
       return state;
   }
};

export default signInReducer;