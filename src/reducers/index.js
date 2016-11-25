import { combineReducers } from 'redux';
import route from './route.js';
import location from './location.js';
// import activeRoutes from 'reducerActiveRoutes.js'

const rootReducer = combineReducers({
  route,
  location,
})
export default rootReducer;
