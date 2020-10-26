/* eslint-disable max-len */
export const getCharacter = () => {
  return fetch('https://hey-arnold-api.herokuapp.com/api/v1/characters?perPage=20&page=2', {
    headers: {
      Origin: null
    }
  })
    .then(res => res.json())
    .then(result => result.data.Characters);
};
