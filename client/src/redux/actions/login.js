export const loginRequest = (username, password) => ({
    type: 'LOGIN_REQUEST',
    username,
    password
});

export const loginSuccess = (data) =>({
    type: 'LOGIN_SUCCESS',
    data
});

export const loginFail = (error) =>({
    type: 'LOGIN_FAIL',
    error
});
