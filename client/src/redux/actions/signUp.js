export const signUpRequest = (fullName, username, password) => ({
  type: 'SIGN_UP_USER_REQUEST',
  fullName,
  username,
  password
});

export const signUpSuccess = (fullName, username, password) => ({
  type: 'SIGN_UP_USER_SUCCESS',
  fullName,
  username,
  password
});

export const signUpFail = (fullName, username, password, error) => ({
  type: 'SIGN_UP_USER_FAIL',
  fullName,
  username,
  password,
  error
});