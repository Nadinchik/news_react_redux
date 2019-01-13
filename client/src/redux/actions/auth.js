import AUTH_REQUEST from "../reducers/authReducer";

export const authorize = (identifier, password) => ({
    type: AUTH_REQUEST,
    payload: { identifier, password }
});

