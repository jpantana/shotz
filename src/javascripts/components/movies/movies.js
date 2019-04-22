import util from '../../helpers/util';
import moviesData from '../../helpers/data/moviesData';
import './movies.scss';

let movies = [];

const domStringBuilder = () => {
  let domString = '';
  movies.forEach((movie) => {
    domString += `<div id="${movie.id}" class="shadow movie rounded-lg text-white space-justify-content-around bg-dark card col-sm border text-center">`;
    domString += `  <h1 class="h1 rounded-lg text-uppercase bg-primary">${movie.name}</h1>`;
    domString += '  <hr class="bg-white">';
    domString += `  <h4>${movie.genre}</h4>`;
    domString += `  <h5>${movie.releaseDate}</h5>`;
    domString += '  <hr class="bg-white">';
    domString += `  <p><em class="text-white">Description:</em><br>${movie.description}</p>`;
    domString += `  <h5 class="text-monospace">${movie.locations.length} locations</h5>`;
    domString += '</div>';
  });
  util.printToDom('movies', domString);
};

const initializeMovies = () => {
  moviesData.getMoviesData()
    .then((resp) => {
      const movieResults = resp.data.movies;
      movies = movieResults;
      domStringBuilder();
    })
    .catch(err => console.error(err));
};

export default { initializeMovies };
