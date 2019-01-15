const intialState = {
  userData: {},
  error: false
};

const signUpReducer = (state = intialState, action) => {
  switch (action.type) {
    case 'SIGN_UP_USER_REQUEST': {
      return {
        userData: {},
        error: false
      };
    }
    case 'SIGN_UP_USER_SUCCESS': {
      return {
        userData: {},
        error: false
      };
    }
    case 'SIGN_UP_USER_FAIL': {
      return {
        userData: {},
        error: action.error
      };
    }
    default:
      return state;
  }
};

export default signUpReducer;