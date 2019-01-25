const intialState = {
  posts: [],
  error: false,
  loading: false
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
    case 'NEWS_REQUEST': {
      return {
        posts: [],
        error: false,
        loading: true,
      };
    }
    case 'NEWS_SUCCESS': {
      return {
        ...state,
        posts: action.array,
        error: false,
        loading: false
      };
    }
    case 'NEWS_FAIL': {
      return {
        posts: [],
        error: true,
        loading: false
      };
    }
    case 'GET_NEWS_ByID_REQUEST': {
      return {
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
    // case 'FIND_NEWS_REQUEST': {
    //   return {
    //     ...state,
    //     posts: [],
    //     error: false,
    //     loading: true
    //   };
    // }
    // case 'FIND_NEWS_SUCCESS': {
    //   return {
    //     ...state,
    //     posts: action.array,
    //     error: false,
    //     loading: false
    //   };
    // }
    // case 'FIND_NEWS_FAIL': {
    //   return {
    //     posts: [],
    //     error: true,
    //     loading: false
    //   };
    // }

    default:
      return state;
  }
}

export default newsReducer;
