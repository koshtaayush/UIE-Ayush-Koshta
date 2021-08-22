
const makePost = (url: string, data: object) => {
  
  const options = {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      'token': 'XfHdvAfPm3FB',
      'Content-Type': 'application/json'
    }
  };
  return fetch(url, options);
};


const makeGet = (url: string) => {
  return fetch(url);
};

export { makePost, makeGet };
