import '../styles/main.scss';
import 'bootstrap';
import movies from './components/movies/movies';
import locations from './components/locations/locations';
import btnEvents from './components/Events/btnEvents';

const init = () => {
  movies.initializeMovies()
    .then(() => {
      btnEvents.movieEvents();
    })
    .catch(err => console.error(err));
  locations.initializeLocations();
  btnEvents.btnEvents();
};

init();
