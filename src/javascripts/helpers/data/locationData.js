import axios from 'axios';

const getLocationsData = () => axios.get('../db/locations.json'); // short hand for a function w single line return

export default { getLocationsData };
