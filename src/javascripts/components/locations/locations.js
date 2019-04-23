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
};

const filterBtnEvent = (e) => {
  const buttonId = e.target.id;
  const darkLocations = locations.filter(x => x.shootTime === 'After Dark');
  switch (buttonId) {
    case 'dark':
      domStringBuilder(darkLocations);
      break;
    default:
      domStringBuilder(locations);
  }
};

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
      document.getElementById('search-input').addEventListener('keyup', filterByTextEvent);
    })
    .catch(err => console.error(err));
};

export default { initializeLocations, filterBtnEvent };
