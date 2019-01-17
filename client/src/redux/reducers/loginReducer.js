const intialState = {
  userData: {},
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
      return {
        userData: {},
        error: false
      };
    }
    case 'LOGIN_FAIL': {
      return {
        userData: {},
        error: action.error
      }
    }
    default:
      return state;
  }
};

export default loginReducer;
