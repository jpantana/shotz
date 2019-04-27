import util from '../../helpers/util';
import locationData from '../../helpers/data/locationData';
import './locations.scss';

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
  // locationEvents.btnEvents();
};

const getLocations = () => locations;

const initializeLocations = () => {
  locationData.getLocationsData()
    .then((resp) => {
      const locationResults = resp.data.locations;
      locations = locationResults;
      domStringBuilder(locations);
    })
    .catch(err => console.error(err));
};

export default {
  initializeLocations,
  getLocations,
  domStringBuilder,
};
