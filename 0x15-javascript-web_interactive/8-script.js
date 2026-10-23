#!/usr/bin/node
async function fetchMovies () {
  const listMovies = document.querySelector('#list_movies');

  try {
    const response = await fetch('https://swapi-api.alx-tools.com/api/films/?format=json');

    if (!response.ok) {
      throw new Error(`Request failed with status ${response.status}`);
    }

    const data = await response.json();
    const movies = data.results;

    movies.forEach(movie => {
      const li = document.createElement('li');
      li.textContent = movie.title;
      listMovies.appendChild(li);
    });
  } catch (error) {
    const errorLi = document.createElement('li');
    errorLi.textContent = 'Failed to load movie list.';
    listMovies.appendChild(errorLi);
    console.error('API Error:', error);
  }
}

fetchMovies();
