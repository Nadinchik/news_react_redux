
export const addNewSuccess = (array) => ({
    type: 'ADD_NEWS_SUCCESS',
    array
});

export const addNewRequest = (data) => ({
    type: 'ADD_NEWS_REQUEST',
    data
});

export const addNewFail = () => ({
    type: 'ADD_NEWS_FAIL',
});

export const deleteNews = (array) => ({
    type: 'DELETE_NEWS',
    array
});

export const editNews = (array) => ({
    type: 'EDIT_NEWS',
    array
});

export const newsRequest = (data) => ({
    type: 'NEWS_REQUEST',
    data
});

export const newsSuccess = (array) => ({
    type: 'NEWS_SUCCESS',
    array
});

export const newsFail = () => ({
    type: 'NEWS_FAIL',
});