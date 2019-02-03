export const signUpRequest = (fullName, username, password) => ({
  type: 'SIGN_UP_USER_REQUEST',
  fullName,
  username,
  password
});

export const signUpSuccess = (data) => ({
  type: 'SIGN_UP_USER_SUCCESS',
  data
});

export const signUpFail = (error) => ({
  type: 'SIGN_UP_USER_FAIL',
  error
});