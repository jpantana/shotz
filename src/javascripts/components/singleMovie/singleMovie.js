import movies from '../movies/movies';
import locations from '../locations/locations';

const seeAllMovies = (e) => {
  e.preventDefault();
  movies.domStringBuilder(movies);
  locations.initializeLocations();
};

const filterMovieEvent = (e) => {
  const eventId = e.target.id;
  const thisMovie = movies.movies.find(x => x.id === eventId);
  if (thisMovie) {
    movies.domStringBuilder([thisMovie]);
  } else {
    movies.domStringBuilder(movies);
  }
  const emptyArr = [];
  const location = locations.getLocations();
  thisMovie.locations.forEach((id) => {
    const thisVar = location.find(x => x.id === id);
    emptyArr.push(thisVar);
  });
  locations.domStringBuilder(emptyArr);
  document.getElementById('seeAllMovies').addEventListener('click', seeAllMovies);
};

export default { filterMovieEvent, seeAllMovies };
