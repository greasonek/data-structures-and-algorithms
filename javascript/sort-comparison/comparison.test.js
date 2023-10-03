'use strict';

const { Movies } = require ('./movie-data');

function sortByYear(movies) {
  return movies.slice().sort((a,b) => a.year.toString().localeCompare(b.year.toString()));
}

describe('Sort movies by year', () => {
  it('should sort movies by most recent year', () => {
    const sortedMovies = sortByYear(Movies);

    for(let i = 0; i < sortedMovies.length - 1; i++) {
      expect(sortedMovies[i].year).toBeLessThanOrEqual(sortedMovies[i + 1].year);
    }
  });
});

function sortByTitle(movies) {
  return movies.slice().sort((a,b) => a.title.toString().localeCompare(b.toString()));
}

describe('Sort movies by title', () => {
  it('should sort movies by title', () => {
    const sortedMovies = sortByTitle(Movies);

    for(let i = 0; i < sortedMovies.length - 1; i++) {
      expect(sortedMovies[i].title.localeCompare(sortedMovies[i + 1].title));
    }
  });
});
