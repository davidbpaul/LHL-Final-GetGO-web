//state argument is not application state
//this reducer is responsible formControlsSelect

export default function(state= null, action){
  switch(action.type){
  case 'ROUTE_SELECTED':
    return action.payload;
  }
  return state;
}
