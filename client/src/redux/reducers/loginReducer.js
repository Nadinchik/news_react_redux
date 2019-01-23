const intialState = {
    userData: {},
    isAuthenticated: false,
    error: false
};

const loginReducer = (state = intialState, action) => {
  switch (action.type) {
    case 'LOGIN_REQUEST': {
      return {
        userData: {},
        isAuthenticated: false,
        error: false
      };
    }
    case 'LOGIN_SUCCESS': {
      console.log('action.data -->', action.data);
      return {
        userData: action.data,
        isAuthenticated: true,
        error: false
      };
    }
    case 'LOGIN_FAIL': {
      return {
        userData: {},
        isAuthenticated: false,
        error: action.error
      }
    }
    default:
      return state;
  }
};

export default loginReducer;
