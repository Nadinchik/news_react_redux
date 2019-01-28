export const addNewsSuccess = (array) => ({
  type: 'ADD_NEWS_SUCCESS',
  array,
});

export const addNewsRequest = (data) => ({
  type: 'ADD_NEWS_REQUEST',
  data,
});

export const addNewsFail = () => ({
  type: 'ADD_NEWS_FAIL',
});

export const deleteNewsRequest = (data) => ({
  type: 'DELETE_NEWS_REQUEST',
  data,
});
export const deleteNewsSuccess = (array) => ({
  type: 'DELETE_NEWS_SUCCESS',
  array,
});

export const deleteNewsFail = () => ({
  type: 'DELETE_NEWS_FAIL',
});

export const editNewsRequest = (data) => ({
  type: 'EDIT_NEWS_REQUEST',
  data,
});

export const editNewsSuccess = (array) => ({
  type: 'EDIT_NEWS_SUCCESS',
  array,
});

export const editNewsFail = () => ({
  type: 'EDIT_NEWS_FAIL',
});

export const getAllNewsRequest = () => ({
  type: 'GET_ALL_NEWS_REQUEST',
});

export const getAllNewsSuccess = (array) => ({
  type: 'GET_ALL_NEWS_SUCCESS',
  array,
});

export const getAllNewsFail = () => ({
  type: 'GET_ALL_NEWS_FAIL',
});

export const getNewsByIdRequest = (idUser) => ({
  type: 'GET_NEWS_ByID_REQUEST',
  idUser,
});

export const getNewsByIdSuccess = (array) => ({
  type: 'GET_NEWS_ByID_SUCCESS',
  array,
});

export const getNewsByIdFail = () => ({
  type: 'GET_NEWS_ByID_FAIL',
});

export const findNewsRequest = (data) => ({
  type: 'FIND_NEWS_REQUEST',
  data,
});

export const findNewsSuccess = (array) => ({
  type: 'FIND_NEWS_SUCCESS',
  array,
});

export const findNewsfail = () => ({
  type: 'FIND_NEWS_FAIL',
});

