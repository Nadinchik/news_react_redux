export const AUTH_REQUEST = AUTH_REQUEST;
export const AUTH_SUCCESS = AUTH_SUCCESS;
export const AUTH_FAIL = AUTH_FAIL;

const intlState = {
  token: localStorage.getItem('token'),
  error: null
};

const authReducer = (state = intlState, {type, payload}) => {
  switch (type) {
    case AUTH_SUCCESS: {
      return {...state, token: payload};
    }
    case AUTH_FAIL: {
      return {...state, error: payload}
    }
    default:
      return state;
  }
};

export default authReducer;
