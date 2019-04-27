import util from '../../helpers/util';
import moviesData from '../../helpers/data/moviesData';
// import locations from '../locations/locations';
import './movies.scss';

let movies = [];
// const newArr = [];

const domStringBuilder = (movArray) => {
  let domString = '';
  movArray.forEach((movie) => {
    domString += `<div id="${movie.id}" class="shadow movie rounded-lg text-white space-justify-content-around bg-dark card col-sm border text-center">`;
    domString += `  <h1 class="h1 rounded-lg text-uppercase bg-primary">${movie.name}</h1>`;
    domString += '  <hr class="bg-white">';
    domString += `  <h4>${movie.genre}</h4>`;
    domString += `  <h5 class="text-monospace">${movie.releaseDate}</h5>`;
    domString += '  <hr class="bg-white">';
    domString += `  <p><em class="text-white">Description:</em><br>${movie.description}</p>`;
    domString += `  <h5 class="text-monospace">${movie.locations.length} locations</h5>`;
    domString += '</div>';
  });
  util.printToDom('movies', domString);
};

// const seeAllMovies = (e) => {
//   e.preventDefault();
//   domStringBuilder(movies);
//   locations.initializeLocations();
// };

// const filterMovieEvent = (e) => {
//   const eventId = e.target.id;
//   const thisMovie = movies.find(x => x.id === eventId);
//   if (thisMovie) {
//     domStringBuilder([thisMovie]);
//   } else {
//     domStringBuilder(movies);
//   }
//   const emptyArr = [];
//   const location = locations.getLocations();
//   thisMovie.locations.forEach((id) => {
//     const thisVar = location.find(x => x.id === id);
//     emptyArr.push(thisVar);
//   });
//   locations.domStringBuilder(emptyArr);
//   document.getElementById('seeAllMovies').addEventListener('click', seeAllMovies);
// };

// const filterMovieEvent = (e) => {
//   const eventId = e.target.id;
//   return eventId;
// };
const getMovies = () => movies;

const initializeMovies = () => {
  moviesData.getMoviesData()
    .then((resp) => {
      const movieResults = resp.data.movies;
      movies = movieResults;
      domStringBuilder(movies);
      // document.getElementById('movie1').addEventListener('click', filterMovieEvent);
      // document.getElementById('movie2').addEventListener('click', filterMovieEvent);
      // document.getElementById('movie3').addEventListener('click', filterMovieEvent);
      // document.getElementById('movie4').addEventListener('click', filterMovieEvent);
    })
    .catch(err => console.error(err));
};

export default {
  initializeMovies,
  getMovies,
  domStringBuilder,
};
