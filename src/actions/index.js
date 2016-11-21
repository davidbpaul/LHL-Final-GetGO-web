export function selectRoute(route){
  //selectRoute is an action creater. it needs to return an action
  // an object with a type props
  return{
    type: 'ROUTE_SELECTED',
    payload:route
    
  }
}
