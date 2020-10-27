/* eslint-disable max-len */
const fetch = require('node-fetch');

export const getCharacter = () => {
  return fetch('https://hey-arnold-api.herokuapp.com/api/v1/characters?perPage=20&page=2', {
    headers: {
      Origin: null
    }
  })
    .then(res => res.json())
    .then(result => result.data.Characters);
};

export const getOneCharacter = (id) => {
  return fetch(`https://hey-arnold-api.herokuapp.com/api/v1/characters/${id}`, {
    headers: {
      Origin: null
    }
  })
    .then(res => res.json());
};
