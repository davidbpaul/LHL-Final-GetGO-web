
{
 selectedRoute: null,
 route: [{
   stops: [{

   }, {

   }]
 }]

 routes: [{
   name: "..."
 }


 ]

 stops: [{
   id: 1,
   ...
 }, {

 }, {

 }]
}

const getVisibleStops = (stops, selectedRoute) => {
 if (selectRoute)
   stops.filter(stop => stop.route_id === selectRoute.id)

 return stops
}

const mapStateToProps = (state) => ({
 stops: getVisibleStops(state.stops, state.selectedRoute)
})
