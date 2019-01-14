
export const authorize = (identifier, password) => ({
  type: 'AUTH_REQUEST',
  payload: {identifier, password}
});

