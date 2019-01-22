const intialState = {
    news: [
        {
            id: "56c782f1978fdf9a0100df52",
            date: "2016-06-02T11:03:23.000Z",
            title: "Hello my new world",
            author: "Ivan Ivanovich",
            text: "Culpa dolor deserunt veniam irure amet officia excepteur labore nisi labore ad labore laborum aute. Ea irure sit exercitation ex. " +
                "Aliquip dolore duis ullamco labore qui. Et anim irure laborum quis ipsum. Adipisicing culpa est ea velit veniam dolor nisi. Sit cupidatat velit " +
                "commodo eu.\n\nUt nulla ut irure cillum irure sint sunt cupidatat tempor laboris incididunt elit occaecat fugiat. Reprehenderit enim cupidatat consectetur " +
                "pariatur ad pariatur consequat veniam do fugiat Lorem laborum do velit. Nulla aute magna magna nisi officia et. Aute adipisicing eu eiusmod tempor exercitation " +
                "sint non enim laboris dolor adipisicing.\n\nEa do sint pariatur voluptate ad culpa irure. Cillum pariatur deserunt fugiat elit. Exercitation labore amet deserunt " +
                "magna. Velit veniam aute officia aliqua ipsum veniam pariatur. Aliquip ullamco fugiat officia non sunt ad consequat ipsum est esse commodo reprehenderit. Ad quis consectetur " +
                "est exercitation fugiat eiusmod. Laborum reprehenderit esse qui irure.",
        }
    ],
    error: false
};

function newsReducer(state = intialState, action) {
    switch (action.type) {
        case 'DELETE_NEWS': {
            return {
                ...state,
                news: action.payload,
                error: false
            }
        }
        case 'EDIT_NEWS': {
            return {
                ...state,
                news: action.payload,
                error: false
            }
        }
        case 'NEWS_REQUEST': {
            return {
                news: [],
                error: false
            }
        }
        case 'NEWS_SUCCESS': {
            return {
                news: action.payload,
                error: false
            }
        }
        case 'NEWS_FAIL': {
            return {
                news: [],
                error: true
            }
        }

        default:
            return state;
    }
}

export default newsReducer;
