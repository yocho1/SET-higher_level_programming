#!/usr/bin/node
const request = require('request');

const movieId = process.argv[2];
const filmUrl = `https://swapi-api.alx-tools.com/api/films/${movieId}`;

request(filmUrl, (error, response, body) => {
  if (error) {
    console.log(error);
    return;
  }

  const film = JSON.parse(body);
  const characters = film.characters;
  let index = 0;

  function fetchCharacter () {
    if (index >= characters.length) {
      return;
    }

    request(characters[index], (err, res, charBody) => {
      if (err) {
        console.log(err);
      } else {
        const character = JSON.parse(charBody);
        console.log(character.name);
      }
      index++;
      fetchCharacter();
    });
  }

  fetchCharacter();
});
