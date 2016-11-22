import { combineReducers } from 'redux';
import route from './route.js';
import location from './location.js';
import destination from './destination.js';
// import activeRoutes from 'reducerActiveRoutes.js'

const rootReducer = combineReducers({
  route,
  location,
  destination
  // activeRoutes: activeRoutes

})
export default rootReducer;
