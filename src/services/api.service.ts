import { API_TOKEN } from './../config/config'

/**
  * Util to make POST call
*/

const makePost = (url: string, data: object) => {
  const options = {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      'token': API_TOKEN,
      'Content-Type': 'application/json'
    }
  };
  return fetch(url, options);
};


/**
  * Util to make GET call
*/
const makeGet = (url: string) => {
  let urlWithToken = `${url}token=${API_TOKEN}`
  return fetch(urlWithToken);
};

export { makePost, makeGet };
