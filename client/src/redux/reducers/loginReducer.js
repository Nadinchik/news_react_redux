function loginReducer(state = [], action) {
    if (action.type === 'ADD_USER') {
        return {
            ...state,
            user: [...state.user, action.payload],
        }
    }
    return state;
}

export default loginReducer;