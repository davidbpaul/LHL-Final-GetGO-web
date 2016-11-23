import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { Jumbotron, Button } from 'react-bootstrap';
import {bsStyle} from 'react-bootstrap';
import RouteSelectForm from '../components/routeSelectForm.jsx';

class RouteSelect extends Component {

  renderMessages(routes) {
    var messages = [];
    routes.map( (route) => {
      messages.push(route.route)
    });

    return messages
 }
 renderStops(routes){
    var stops = []
   routes.forEach( (route) => {
     if(route.route === 'Lakeshore East')
     route.stops.map( (routeStops) => {
        stops.push(routeStops)
        console.log(stops)
     });
   });
   return stops
 }

  render() {
    return (
      <div>
      <Jumbotron>
        <form>
          <RouteSelectForm
          i= { this.renderMessages(this.props.route) }
          s= { this.renderStops(this.props.route)}
          />
        </form>
      </Jumbotron>
      </div>
    );
  }
};

function mapStateToProps(state){
//whatever is returned here will show up as props
//inside app

  return{
    route: state.route,
    location: state.location,
    destination: state.destination
  }

}

// anything returned will end up as props on the selectRoute container
function mapDispatchToProps(dispath){
  //whenever selectRoute is called to result should be passed
  //to all reducers
  return bindActionCreators({selectRoute: selectRoute}, dispatch)
}



export default connect(mapStateToProps)(RouteSelect);
