export const addNewSuccess = (array) => ({
    type: 'ADD_NEWS_SUCCESS',
    array
});

export const addNewRequest = (data) => ({
    type: 'ADD_NEWS_REQUEST',
    data,
});

export const addNewFail = () => ({
    type: 'ADD_NEWS_FAIL',
});

export const deleteNews = (array) => ({
    type: 'DELETE_NEWS',
    array,
});

export const editNews = (array) => ({
    type: 'EDIT_NEWS',
    array,
});

export const newsRequest = (page) => ({
    type: 'NEWS_REQUEST',
    page,
});

export const newsSuccess = (array) => ({
    type: 'NEWS_SUCCESS',
    array,
});

export const newsFail = () => ({
    type: 'NEWS_FAIL',
});

export const getNewsByIdRequest = (idUser, page) => ({
    type: 'GET_NEWS_ByID_REQUEST',
    idUser,
    page,
});

export const getNewsByIdSuccess = (array) => ({
    type: 'GET_NEWS_ByID_SUCCESS',
    array
});
export const getNewsByIdFail = () => ({
    type: 'GET_NEWS_ByID_FAIL',
});