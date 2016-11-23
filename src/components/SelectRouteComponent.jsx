import React, {Component} from 'react';
import {FormGroup, ControlLabel, FormControl, Button} from 'react-bootstrap';

class SelectRouteComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {value: 'coconut'};

    this.state.RouteStations =
    {
      LakeshoreWest: ['Union Station, Clarkson, Oakville, Bronte, Burlington'],
      Milton: ['Union Station, Kipling, Dixie, Streetsville, Meadowvale, Lisgar, Milton'],
      Kitchener: ['Kitchener Bus Terminal', 'University of Guelph', 'Yorkdale Bus Terminal', 'Union Station Bus Terminal']
    };

    // {
    //   LakeshoreWest: {'Union Station, Clarkson, Oakville, Bronte, Burlington'},
    //   Milton: {'Union Station, Kipling, Dixie, Streetsville, Meadowvale, Lisgar, Milton'},
    //   Kitchener: {'Kitchener Bus Terminal', 'University of Guelph', 'Yorkdale Bus Terminal', 'Union Station Bus Terminal'}
    // };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderOptions = this.renderOptions.bind(this);
    this.getRoutes = this.getRoutes.bind(this);
  }

  getRoutes() {
    var routes = [];
    for (var i in this.state.RouteStations) {
        routes.push(i)
    }
    console.log('got routes: ', routes);
    return routes
  }

  renderOptions(items) {
    return items.map(item => <option key={item} value="other">{item}</option>)
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('Selected Route: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Select Route:
          <select value={this.state.value} onChange={this.handleChange}>
            { this.renderOptions(this.getRoutes(this.state.RouteStations)) }
          </select>
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default SelectRouteComponent;
