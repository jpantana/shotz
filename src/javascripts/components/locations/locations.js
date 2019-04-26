import util from '../../helpers/util';
import locationData from '../../helpers/data/locationData';
import './locations.scss';
// import movies from '../movies/movies';

let locations = [];

const shootTimeClass = (shootTime) => {
  let selectedClass = '';
  switch (shootTime) {
    case 'Morning':
      selectedClass = 'bg-secondary';
      break;
    case 'Afternoon':
      selectedClass = 'bg-success';
      break;
    case 'Evening':
      selectedClass = 'bg-info';
      break;
    case 'After Dark':
      selectedClass = 'bg-danger';
      break;
    default:
      selectedClass = '';
  }
  return selectedClass;
};

const domStringBuilder = (locArray) => {
  console.error(locArray);
  let domString = '';
  locArray.forEach((location) => {
    domString += `<div class="bg-white text-dark locations text-center card col-2" id="${locations.id}">`;
    domString += `  <div class="card-header ${shootTimeClass(location.shootTime)}">${location.name}</div>`;
    domString += `  <img src="${location.imageUrl}" alt="image of ${locations.id}">`;
    domString += `  <h5 class"text-monospace">${location.address}</h5>`;
    domString += `  <h5 class"text-monospace">${location.shootTime}</h5>`;
    domString += '</div>';
  });
  util.printToDom('locations', domString);
};

const filterBtnEvent = (e) => {
  const buttonId = e.target.id;
  const darkLocations = locations.filter(x => x.shootTime === 'After Dark');
  const mornLocations = locations.filter(x => x.shootTime === 'Morning');
  const eveningLocations = locations.filter(x => x.shootTime === 'Evening');
  const afterLocations = locations.filter(x => x.shootTime === 'Afternoon');
  switch (buttonId) {
    case 'dark':
      domStringBuilder(darkLocations);
      break;
    case 'morning':
      domStringBuilder(mornLocations);
      break;
    case 'evening':
      domStringBuilder(eveningLocations);
      break;
    case 'afternoon':
      domStringBuilder(afterLocations);
      break;
    case 'all':
      domStringBuilder(locations);
      break;
    default:
      domStringBuilder(locations);
  }
};

const getLocations = () => locations;

const filterByTextEvent = (e) => {
  const searchText = e.target.value;
  const searchLocations = locations.filter((x) => {
    const hasName = x.name.includes(searchText);
    const hasAddress = x.address.includes(searchText);
    return hasName || hasAddress;
  });
  domStringBuilder(searchLocations);
};

const initializeLocations = () => {
  locationData.getLocationsData()
    .then((resp) => {
      const locationResults = resp.data.locations;
      locations = locationResults;
      domStringBuilder(locations);
      document.getElementById('dark').addEventListener('click', filterBtnEvent);
      document.getElementById('evening').addEventListener('click', filterBtnEvent);
      document.getElementById('afternoon').addEventListener('click', filterBtnEvent);
      document.getElementById('morning').addEventListener('click', filterBtnEvent);
      document.getElementById('all').addEventListener('click', filterBtnEvent);
      document.getElementById('search-input').addEventListener('keyup', filterByTextEvent);
    })
    .catch(err => console.error(err));
};

export default {
  initializeLocations,
  filterBtnEvent,
  getLocations,
  domStringBuilder,
};
