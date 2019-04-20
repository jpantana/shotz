import axios from 'axios';

const getMoviesData = () => axios.get('../db/movies.json'); // short hand for a function w single line return

export default { getMoviesData };
