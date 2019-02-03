const API = (url, options = {}) =>
  new Promise((resolve, reject) => {
    return fetch(url, options)
      .then(response => response.status !== 200 ? reject(response) : response)
      .then(response => response.json())
      .then(response => resolve(response))
      .catch(error => reject(error));
  });
export default API;