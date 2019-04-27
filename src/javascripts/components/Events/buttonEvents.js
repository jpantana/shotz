import filterBtnEvent from '../Events/filterBtnEvent';
import filterMovieEvent from '../Events/filterMovieEvent';

const buttonEvents = () => {
  document.getElementById('dark').addEventListener('click', filterBtnEvent.filterBtnEvent);
  document.getElementById('evening').addEventListener('click', filterBtnEvent.filterBtnEvent);
  document.getElementById('afternoon').addEventListener('click', filterBtnEvent.filterBtnEvent);
  document.getElementById('morning').addEventListener('click', filterBtnEvent.filterBtnEvent);
  document.getElementById('all').addEventListener('click', filterBtnEvent.filterBtnEvent);
  document.getElementById('search-input').addEventListener('keyup', filterBtnEvent.filterByTextEvent);
  document.getElementById('movie1').addEventListener('click', filterMovieEvent.filterMovieEvent);
  document.getElementById('movie2').addEventListener('click', filterMovieEvent.filterMovieEvent);
  document.getElementById('movie3').addEventListener('click', filterMovieEvent.filterMovieEvent);
  document.getElementById('movie4').addEventListener('click', filterMovieEvent.filterMovieEvent);
};

export default { buttonEvents };
