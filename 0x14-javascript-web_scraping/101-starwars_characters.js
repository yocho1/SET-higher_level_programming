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
  const names = [];
  let completed = 0;

  for (let i = 0; i < characters.length; i++) {
    const index = i;
    request(characters[index], (err, res, charBody) => {
      if (err) {
        console.log(err);
      } else {
        const character = JSON.parse(charBody);
        names[index] = character.name;
      }
      completed++;
      if (completed === characters.length) {
        for (let j = 0; j < names.length; j++) {
          console.log(names[j]);
        }
      }
    });
  }
});
