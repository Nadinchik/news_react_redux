export const loginRequest = (username, password) => ({
    type: 'LOGIN_REQUEST',
    username,
    password,
});

export const loginSuccess = (data) => ({
    type: 'LOGIN_SUCCESS',
    data,
});

export const loginFail = (error) => ({
    type: 'LOGIN_FAIL',
    error,
});

export const logOut = () => ({
    type: 'LOG_OUT',
});

export const logOutSuccess = () => ({
    type: 'LOG_OUT_SUCCESS',
});


export const getUserByIdRequest = (id) => ({
    type: 'GET_USER_BY_ID_REQUEST',
    id,
});

export const getUserByIdSuccess = (data) => ({
    type: 'GET_USER_BY_ID_SUCCESS',
    data,
});

export const getUserByIdFail = (error) => ({
    type: 'GET_USER_BY_ID_FAIL',
    error,
});