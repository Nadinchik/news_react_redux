const checkLogged = () => localStorage.getItem('isLogged');

const initialState = {
  userData: {},
  isLogged: checkLogged(),
  error: null,
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN_REQUEST': {
      return {
        userData: {},
        error: null,
      };
    }
    case 'LOGIN_SUCCESS': {
      return {
        userData: action.data,
        isLogged: true,
        error: null,
      };
    }
    case 'LOGIN_FAIL': {
      return {
        userData: {},
        error: action.error,
      };
    }
    case 'LOG_OUT_SUCCESS': {
      return{
        ...state,
        error: null,
        isLogged: false,
        userData: {},
      }
    }
    case 'GET_USER_BY_ID_REQUEST':{
      return{
        ...state,
        error: null,
        userData: {},
      }
    }
    case 'GET_USER_BY_ID_SUCCESS':{
      return{
        ...state,
        error: null,
        userData: action.data,
      }
    }
    case 'GET_USER_BY_ID_FAIL':{
      return{
        ...state,
        error: action.error,
        userData: {},
      }
    }
    default:
      return state;
  }
};

export default loginReducer;
