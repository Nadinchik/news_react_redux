const signInReducer = (state, action) =>{
   switch(action.type) {
     case 'REGISTRATION_USER_SUCCESS':
     {
       return
     }
     default:
       return state;
   }
};

export default signInReducer;