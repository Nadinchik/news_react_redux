export const addNewsSuccess = (array) => ({
    type: 'ADD_NEWS_SUCCESS',
    array
});

export const addNewsRequest = (data) => ({
    type: 'ADD_NEWS_REQUEST',
    data
});

export const addNewsFail = () => ({
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

export const getNewsByIdRequest = (idUser) => ({
    type: 'GET_NEWS_ByID_REQUEST',
    idUser
});

export const getNewsByIdSuccess = (array) => ({
    type: 'GET_NEWS_ByID_SUCCESS',
    array
});

export const getNewsByIdFail = () => ({
    type: 'GET_NEWS_ByID_FAIL',
});
//
// export const findNewsRequest = (data) => ({
//     type: 'FIND_NEWS_REQUEST',
//     data
// });
//
// export const findNewsSuccess = (array) => ({
//     type: 'FIND_NEWS_SUCCESS',
//     array
// });
//
// export const findNewsfail = () => ({
//     type: 'FIND_NEWS_FAIL',
// });