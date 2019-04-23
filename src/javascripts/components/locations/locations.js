import util from '../../helpers/util';
import locationData from '../../helpers/data/locationData';
import './locations.scss';

let locations = [];

const domStringBuilder = () => {
  let domString = '';
  locations.forEach((location) => {
    domString += `<div class="bg-white text-dark locations text-center card col-2" id="${locations.id}">`;
    domString += `  <div class="card-header">${location.name}</div>`;
    domString += `  <img src="${location.imageUrl}" alt="image of ${locations.id}">`;
    domString += `  <h5 class"text-monospace">${location.address}</h5>`;
    domString += `  <h5 class"text-monospace">${location.shootTime}</h5>`;
    domString += '</div>';
  });
  util.printToDom('locations', domString);
};

const initializeLocations = () => {
  locationData.getLocationsData()
    .then((resp) => {
      const locationResults = resp.data.locations;
      locations = locationResults;
      domStringBuilder();
    })
    .catch(err => console.error(err));
};

export default { initializeLocations };
