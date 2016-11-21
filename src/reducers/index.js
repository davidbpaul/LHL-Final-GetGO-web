import { combineReducers } from 'redux';
import AgenciesReducer from './reducerAgencies.js';
import RoutesReducer from './reducerRoutes.js';
import TripsReducer from './reducerTrips.js';
// import activeRoutes from 'reducerActiveRoutes.js'

const rootReducer = combineReducers({
  agencies: AgenciesReducer,
  routes: RoutesReducer,
  trips: TripsReducer,
  // activeRoutes: activeRoutes

})
export default rootReducer;
