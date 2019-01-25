const checkLogged = () => localStorage.getItem('isLogged');

const intialState = {
  userData: {},
  isLogged: checkLogged(),
  error: false
};

const loginReducer = (state = intialState, action) => {
  switch (action.type) {
    case 'LOGIN_REQUEST': {
      return {
        userData: {},
        error: false
      };
    }
    case 'LOGIN_SUCCESS': {
      console.log('action.data -->', action.data);
      return {
        userData: action.data,
        error: false
      };
    }
    case 'LOGIN_FAIL': {
      return {
        userData: {},
        error: action.error
      }
    }
    // case 'LOG_OUT': {
    //   console.log("logout action");
    //   return {
    //     ...state
    //   }
    // }
    default:
      return state;
  }
};

export default loginReducer;