import locations from '../locations/locations';
import movies from '../movies/movies';

const filterMovieEvent = (e) => {
  const eventId = e.target.id;
  const thisMovie = movies.getMovies().find(x => x.id === eventId);
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
};

const filterBtnEvent = (e) => {
  const location = locations.getLocations();
  const buttonId = e.target.id;
  const darkLocations = location.filter(x => x.shootTime === 'After Dark');
  const mornLocations = location.filter(x => x.shootTime === 'Morning');
  const eveningLocations = location.filter(x => x.shootTime === 'Evening');
  const afterLocations = location.filter(x => x.shootTime === 'Afternoon');
  switch (buttonId) {
    case 'dark':
      locations.domStringBuilder(darkLocations);
      break;
    case 'morning':
      locations.domStringBuilder(mornLocations);
      break;
    case 'evening':
      locations.domStringBuilder(eveningLocations);
      break;
    case 'afternoon':
      locations.domStringBuilder(afterLocations);
      break;
    case 'all':
      locations.domStringBuilder(locations.getLocations());
      break;
    default:
      locations.domStringBuilder(locations.getLocations());
  }
};

const filterByTextEvent = (e) => {
  const searchText = e.target.value;
  const searchLocations = locations.getLocations().filter((x) => {
    const hasName = x.name.includes(searchText);
    const hasAddress = x.address.includes(searchText);
    return hasName || hasAddress;
  });
  locations.domStringBuilder(searchLocations);
};

const seeAll = () => {
  movies.domStringBuilder(movies.getMovies());
  locations.domStringBuilder(locations.getLocations());
};

const btnEvents = () => {
  document.getElementById('all').addEventListener('click', filterBtnEvent);
  document.getElementById('morning').addEventListener('click', filterBtnEvent);
  document.getElementById('afternoon').addEventListener('click', filterBtnEvent);
  document.getElementById('evening').addEventListener('click', filterBtnEvent);
  document.getElementById('dark').addEventListener('click', filterBtnEvent);
  document.getElementById('search-input').addEventListener('keyup', filterByTextEvent);
};

const movieEvents = () => {
  document.getElementById('movie1').addEventListener('click', filterMovieEvent);
  document.getElementById('movie2').addEventListener('click', filterMovieEvent);
  document.getElementById('movie3').addEventListener('click', filterMovieEvent);
  document.getElementById('movie4').addEventListener('click', filterMovieEvent);
  document.getElementById('seeAllMovies').addEventListener('click', seeAll);
};

export default { btnEvents, movieEvents };
