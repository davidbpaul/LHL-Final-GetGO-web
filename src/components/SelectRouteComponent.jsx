import React, {Component} from 'react';
import {ControlLabel, FormControl, Button} from 'react-bootstrap';

class SelectRouteComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentSelectedRoute: 'Milton',
      currentSelectedDepartureStation: 'Please select Route first',
      currentSelectedDestinationStation: 'Please select Route first',
      RouteStations:
      // [
      //   {name: 'LakeshoreWest', stops: ['Burlington', 'Bronte', 'Oakville', 'Clarkson', 'Union Station']},
      //   {name: 'Milton', stops: []},
      //   {name: 'Kitchener', stops: []},
      // ]

        {
          LakeshoreWest: ['Burlington', 'Bronte', 'Oakville', 'Clarkson', 'Union Station'],
          Milton: ['Meadowvale', 'Streetsville', 'Dixie', 'Kipling', 'Union Station'],
          Kitchener: ['Kitchener Bus Terminal', 'University of Guelph', 'Yorkdale Bus Terminal', 'Union Station Bus Terminal']
        }
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderOptions = this.renderOptions.bind(this);
    this.getRoutes = this.getRoutes.bind(this);
    this.getStationFromRoutes = this.getStationFromRoutes.bind(this);
    this.setRouteStateOnChange = this.setRouteStateOnChange.bind(this);
    this.setDestinationStateOnChange = this.setDestinationStateOnChange.bind(this);
    this.setDepartureStateOnChange = this.setDepartureStateOnChange.bind(this);
  }

  // helper function to get Routes from RouteStation data
  getRoutes() {
    var routes = [];
    for (var i in this.state.RouteStations) {
        routes.push(i)
    }
    console.log('got routes: ', routes);
    return routes
  }

  // helper function to get Stations from Route
  getStationFromRoutes(currentSelectedRoute) {
    for (var i in this.state.RouteStations) {
        if (i == currentSelectedRoute)
        return this.state.RouteStations[i]
    }
  }

  // helper function to iterate over array and create html <option> elements
  renderOptions(items) {
    return items.map(item => <option key={item} value={item}>{item}</option>)
  }

  setRouteStateOnChange(event) {
    this.setState({currentSelectedRoute: event.target.value});
    // this.props.dispatch(newSelectedRoute(event.target.value));
    console.log('Route is set to:', this.state.currentSelectedRoute);
  }

  setDepartureStateOnChange(event) {
    this.setState({currentSelectedDepartureStation: event.target.value});
    console.log('Departure station is set to:', this.state.currentSelectedDepartureStation);
  }

  setDestinationStateOnChange(event) {
    this.setState({currentSelectedDestinationStation: event.target.value});
    console.log('Destination station is set to:', this.state.currentSelectedDestinationStation);
  }

  handleSubmit(event) {
    alert('Selected Route: ' + this.state.currentSelectedRoute);
    event.preventDefault();
  }

  render() {
    return (

      <div>
        <form onSubmit={this.handleSubmit}>
          <label> Select Route: </label>
          <select value={this.state.currentSelectedRoute} onChange={this.setRouteStateOnChange}>
            { this.renderOptions(this.getRoutes()) }
          </select>
          <input type="submit" value="Submit" />
        </form>

        <form>
          <label> Select Departure Station: </label>
          <select value={this.state.currentSelectedDepartureStation} onChange={this.setDepartureStateOnChange}>
            { this.renderOptions(this.getStationFromRoutes(this.state.currentSelectedRoute)) }
          </select>
        </form>

        <form>
          <label> Select Destination Station: </label>
          <select value={this.state.currentSelectedDestinationStation} onChange={this.setDestinationStateOnChange}>
            { this.renderOptions(this.getStationFromRoutes(this.state.currentSelectedRoute)) }
          </select>
        </form>

      </div>

    );
  }
}

export default SelectRouteComponent;
