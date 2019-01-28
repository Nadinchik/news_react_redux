const intialState = {
  posts: [],
  error: false,
  loading: false
};

function newsReducer(state = intialState, action) {
  switch (action.type) {
    case 'DELETE_NEWS_REQUEST': {
      return {
        ...state,
        posts: [],
        error: false,
        loading: true
      };
    }
    case 'DELETE_NEWS_SUCCESS': {
      return {
        ...state,
        posts: action.array,
        error: false,
      };
    }
    case 'DELETE_NEWS_FAIL': {
      return {
        posts: [],
        error: true,
        loading: false
      };
    }
    case 'EDIT_NEWS_REQUEST': {
      return {
        ...state,
        posts: [],
        error: false,
        loading: true
      };
    }
    case 'EDIT_NEWS_SUCCESS': {
      return {
        ...state,
        posts: action.array,
        error: false,
        loading: false
      };
    }
    case 'EDIT_NEWS_FAIL': {
      return {
        posts: [],
        error: true,
        loading: false
      };
    }
    case 'ADD_NEWS_REQUEST': {
      return {
        ...state,
        posts: [],
        error: false,
        loading: true
      };
    }
    case 'ADD_NEWS_SUCCESS': {
      return {
        ...state,
        posts: action.array,
        error: false,
        loading: false
      };
    }
    case 'ADD_NEWS_FAIL': {
      return {
        posts: [],
        error: true,
        loading: false
      };
    }
    case 'GET_ALL_NEWS_REQUEST': {
      return {
        ...state,
        posts: [],
        error: false,
        loading: true,
      };
    }
    case 'GET_ALL_NEWS_SUCCESS': {
      return {
        ...state,
        posts: action.array,
        error: false,
        loading: false
      };
    }
    case 'GET_ALL_NEWS_FAIL': {
      return {
        posts: [],
        error: true,
        loading: false
      };
    }
    case 'GET_NEWS_ByID_REQUEST': {
      return {
        ...state,
        posts: [],
        error: false,
        loading: true
      };
    }
    case 'GET_NEWS_ByID_SUCCESS': {
      console.log('action.array -->', action.array);
      return {
        ...state,
        posts: action.array,
        error: false,
        loading: false
      };
    }
    case 'GET_NEWS_ByID_FAIL': {
      return {
        posts: [],
        error: true,
        loading: false
      };
    }
    case 'FIND_NEWS_REQUEST': {
      return {
        ...state,
        posts: [],
        error: false,
        loading: true
      };
    }
    case 'FIND_NEWS_SUCCESS': {
      return {
        ...state,
        posts: action.array,
        error: false,
        loading: false
      };
    }
    case 'FIND_NEWS_FAIL': {
      return {
        posts: [],
        error: true,
        loading: false
      };
    }

    default:
      return state;
  }
}

export default newsReducer;
