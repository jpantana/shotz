import movies from '../movies/movies';
import locationData from '../../helpers/data/locationData';
// import util from '../../helpers/util';
// import buttonEvents from '../buttonEvents/buttonEvents';
// import locations from '../locations/locations';

let myLocs = [];

const seeAllMovies = (e) => {
  e.preventDefault();
  movies.domStringBuilder(movies);
  // locations.initializeLocations();
};

// const locsAgain = () => {
//   locationData.getLocationsData()
//     .then((resp) => {
//       const locationResults = resp.data.locations;
//       myLocs = locationResults;
//       // locations.domStringBuilder(myLocs);
//     })
//     .catch(err => console.error(err));
// };

const filterMovieEvent = (e) => {
  const eventId = e.target.id;
  const movie = movies.getMovies();
  const thisMovie = movie.find(x => x.id === eventId);
  if (thisMovie) {
    movies.domStringBuilder([thisMovie]);
  } else {
    movies.domStringBuilder(movie);
  }
  const emptyArr = [];
  thisMovie.locations.forEach((id) => {
    const movieLocs = myLocs.filter(x => x.id === id);
    emptyArr.push(movieLocs);
  });
  console.error(emptyArr);
  const locsAgain = locationData.getLocationsData()
    .then((resp) => {
      const locationResults = resp.data.locations;
      myLocs = locationResults;
      // locations.domStringBuilder(myLocs);
    })
    .catch(err => console.error(err));
  console.error(locsAgain);
  // locations.domStringBuilder(emptyArr);
  document.getElementById('seeAllMovies').addEventListener('click', seeAllMovies);
};

export default {
  filterMovieEvent,
  seeAllMovies,
};
