const checkLogged = () => localStorage.getItem('isLogged');

const initialState = {
  userData: {},
  isLogged: checkLogged(),
  error: false,
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN_REQUEST': {
      return {
        userData: {},
        error: false,
      };
    }
    case 'LOGIN_SUCCESS': {
      console.log('action.data -->', action.data);
      return {
        userData: action.data,
        error: false,
      };
    }
    case 'LOGIN_FAIL': {
      return {
        userData: {},
        error: action.error,
      };
    }
    default:
      return state;
  }
};

export default loginReducer;
