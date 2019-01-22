export const addNews = (payload) =>({
    type:"ADD_NEWS",
    payload
});

export const initNews = (payload) =>({
    type:"INIT_NEWS",
    payload
});

export const deleteNews = (payload)=>({
    type:'DELETE_NEWS',
    payload
});

export const editNews = (payload)=>({
    type:'EDIT_NEWS',
    payload
});

export const newsRequest = (payload) => ({
    type: 'NEWS_REQUEST',
    payload
});

export const newsSuccess = (data) =>({
    type:'NEWS_SUCCESS',
    data
});

export const newsFail = (error) =>({
    type: 'NEWS_FAIL',
    error
});