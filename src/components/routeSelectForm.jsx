import React, {Component} from 'react';
import {FormGroup, ControlLabel, FormControl, Button} from 'react-bootstrap';
import {bsStyle} from 'react-bootstrap';


class RouteSelectForm extends Component {

  //
  // renderSelect(item){
  //   if(item == undefined || item == null){
  //     item == 'select something'
  //   }
  //   else{
  //     return item
  //   }
  // }
  renderOptions(items){
  return items.map(item => <option key={item} value="other">{item}</option>)

  }

  renderStops(items){
    return items.map(item => <option key={item} value="other">{item}</option>)
  }

  render() {
    return (
      <div>
      <FormGroup controlId="formControlsSelect">
      <ControlLabel>Route</ControlLabel>
      <FormControl componentClass="select" placeholder="select">
        <option value="select"></option>
        { this.renderOptions(this.props.i) }

      </FormControl>
        <ControlLabel>Location</ControlLabel>
        <FormControl componentClass="select" placeholder="select">
          <option value="select"></option>
          { this.renderStops(this.props.s) }
        </FormControl>
        <ControlLabel>Destination</ControlLabel>
        <FormControl componentClass="select" placeholder="select">
          <option value="select"></option>
          { this.renderStops(this.props.s) }

        </FormControl>
      </FormGroup>
      <Button type="submit">
        Submit
      </Button>

      </div>
    );
  }
};
export default RouteSelectForm;
