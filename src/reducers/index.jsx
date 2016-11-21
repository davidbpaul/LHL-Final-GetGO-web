import { combineReducers } from 'redux';
import AgenciesReducer from './reducerAgencies.jsx';
import RoutesReducer from './reducerRoutes.jsx';
import TripsReducer from './reducerTrips.jsx';

const rootReducer = combineReducers({
  agencies: AgenciesReducer,
  routes: RoutesReducer,
  trips: TripsReducer

})
export default rootReducer;
