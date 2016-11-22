import React, {Component} from 'react';
import {FormGroup, ControlLabel, FormControl, Button} from 'react-bootstrap';
import {bsStyle} from 'react-bootstrap';


class RouteSelectForm extends Component {


  renderSelect(item){
    if(item == undefined || item == null){
      item == 'select something'
    }
    else{
      return item
    }
  }
  renderMessages() {
  return messages.map((message) => <Message i={ message } key={ message.id } />)
}


  render() {
    return (
      <div>
      <FormGroup controlId="formControlsSelect">
      <ControlLabel>Route</ControlLabel>
      <FormControl componentClass="select" placeholder="select">
        <option value="select">{this.props.route.val}</option>
        <option value="other"></option>
      </FormControl>
        <ControlLabel>Location</ControlLabel>
        <FormControl componentClass="select" placeholder="select">
          <option value="select">Union</option>
          <option value="other">missasoga</option>
          <option value="other">brampton</option>
        </FormControl>
        <ControlLabel>Destination</ControlLabel>
        <FormControl componentClass="select" placeholder="select">
          <option value="select">Union</option>
          <option value="other">missasoga</option>
          <option value="other">brampton</option>
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
