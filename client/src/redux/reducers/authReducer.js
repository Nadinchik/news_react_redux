export const AUTH_REQUEST = 'AUTH_REQUEST';
export const AUTH_SUCCESS = 'AUTH_SUCCESS';
export const AUTH_FAIL = 'AUTH_FAIL';

const intialState = {
  authData: {},
  error: false
};

const authReducer = (state = intialState, action) => {
  switch (action.type) {
    case 'AUTH_SUCCESS': {
      return {
        authData: {},
        error: false
      };
    }
    case 'AUTH_FAIL': {
      return {
        authData: {},
        error: action.error
      }
    }
    default:
      return state;
  }
};

export default authReducer;
