export const AUTH_REQUEST = AUTH_REQUEST;
export const AUTH_SUCCESS = AUTH_SUCCESS;
export const AUTH_FAIL = AUTH_FAIL;

export const authorize = (identifier, password) => ({
  type: AUTH_REQUEST,
    payload: { identifier, password }
});

const intialState = {
    token: localStorage.getItem('token'),
    error: null
};

const authReducer = (state = intialState, {type: payload}) => {
    switch(type){
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
