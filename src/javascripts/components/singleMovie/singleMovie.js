// import movies from '../movies/movies';
// import locations from '../locations/locations';

// const seeAllMovies = (e) => {
//   e.preventDefault();
//   movies.domStringBuilder(movies);
// };

// const filterMovieEvent = (e) => {
//   const eventId = e.target.id;
//   const movie = movies.getMovies();
//   const thisMovie = movie.find(x => x.id === eventId);
//   if (thisMovie) {
//     movies.domStringBuilder([thisMovie]);
//   } else {
//     movies.domStringBuilder(movie);
//   }
//   const movieSpecLocs = [];
//   thisMovie.locations.forEach((id) => {
//     const movieLocs = locations.getLocations().find(x => x.id === id);
//     movieSpecLocs.push(movieLocs);
//   });
//   locations.domStringBuilder(movieSpecLocs);
//   document.getElementById('seeAllMovies').addEventListener('click', seeAllMovies);
// };


// export default {
//   filterMovieEvent,
//   seeAllMovies,
// };
