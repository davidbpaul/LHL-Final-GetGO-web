import { combineReducers } from 'redux';
import AgenciesReducer from './reducerAgencies.js';
import RoutesReducer from './reducerRoutes.js';
import TripsReducer from './reducerTrips.js';

const rootReducer = combineReducers({
  agencies: AgenciesReducer,
  routes: RoutesReducer,
  trips: TripsReducer

})
export default rootReducer;
