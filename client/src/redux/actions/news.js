export const addNews = (payload) =>({
    type:"ADD_NEWS",
    payload
});

export const newsSuccess = (posts) =>({
    type:'NEWS_SUCCESS',
    payload: posts
});