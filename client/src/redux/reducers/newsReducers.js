const intialState = {
  posts: [],
  error: false,
};

function newsReducer(state = intialState, action) {
  switch (action.type) {
    case 'DELETE_NEWS': {
      return {
        ...state,
        posts: action.array,
        error: false,
      };
    }
    case 'EDIT_NEWS': {
      return {
        ...state,
        posts: action.array,
        error: false,
      };
    }
    case 'ADD_NEWS_REQUEST': {
      return {
        posts: [],
        error: false,
      };
    }
    case 'ADD_NEWS_SUCCESS': {
      return {
        ...state,
        posts: action.array,
        error: false,
      };
    }
    case 'ADD_NEWS_FAIL': {
      return {
        posts: [],
        error: true,
      };
    }
    case 'NEWS_REQUEST': {
      return {
        posts: [],
        error: false,
      };
    }
    case 'NEWS_SUCCESS': {
      return {
        ...state,
        posts: action.array,
        error: false,
      };
    }
    case 'NEWS_FAIL': {
      return {
        posts: [],
        error: true,
      };
    }
    case 'GET_NEWS_ByID_REQUEST': {
      return {
        posts: [],
        error: true,
      };
    }
    case 'GET_NEWS_ByID_SUCCESS': {
      return {
        ...state,
        posts: action.array,
        error: true,
      };
    }
    case 'GET_NEWS_ByID_FAIL': {
      return {
        posts: [],
        error: true,
      };
    }
    default:
      return state;
  }
}

export default newsReducer;
