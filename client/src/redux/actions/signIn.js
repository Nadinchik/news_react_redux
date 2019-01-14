export const REGISTRATION_USER_REQUEST = data => ({
  type: 'REGISTRATION_USER_REQUEST',
  data,
});

export const REGISTRATION_USER_SUCCESS = data => ({
  type: 'REGISTRATION_USER_SUCCESS',
  data
});

export const REGISTRATION_USER_FAIL = (data, error) => ({
  type: 'REGISTRATION_USER_FAIL',
  data,
  error
});