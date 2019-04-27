// import locations from '../locations/locations';

// const filterBtnEvent = (e) => {
//   const buttonId = e.target.id;
//   const darkLocations = locations.filter(x => x.shootTime === 'After Dark');
//   const mornLocations = locations.filter(x => x.shootTime === 'Morning');
//   const eveningLocations = locations.filter(x => x.shootTime === 'Evening');
//   const afterLocations = locations.filter(x => x.shootTime === 'Afternoon');
//   switch (buttonId) {
//     case 'dark':
//       locations.domStringBuilder(darkLocations);
//       break;
//     case 'morning':
//       locations.domStringBuilder(mornLocations);
//       break;
//     case 'evening':
//       locations.domStringBuilder(eveningLocations);
//       break;
//     case 'afternoon':
//       locations.domStringBuilder(afterLocations);
//       break;
//     case 'all':
//       locations.domStringBuilder(locations);
//       break;
//     default:
//       locations.domStringBuilder(locations);
//   }
// };

// const events = () => {
//   document.getElementById('dark').addEventListener('click', filterBtnEvent);
//   document.getElementById('evening').addEventListener('click', filterBtnEvent);
//   document.getElementById('afternoon').addEventListener('click', filterBtnEvent);
//   document.getElementById('morning').addEventListener('click', filterBtnEvent);
//   document.getElementById('all').addEventListener('click', filterBtnEvent);
// };

// export default { filterBtnEvent, events };
