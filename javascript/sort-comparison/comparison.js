'use strict';

const { Movies } = require ('./movie-data');

Movies.sort((a,b) => a.year.toString().localeCompare(b.year.toString()));




