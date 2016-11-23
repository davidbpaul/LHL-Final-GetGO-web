import React, {Component} from 'react';
import {FormGroup, ControlLabel, FormControl, Button} from 'react-bootstrap';

class SelectRouteComponent extends Component {

  render() {
    return (
      <div>
        <FormGroup controlId="formControlsSelect">
          <ControlLabel>Select Route</ControlLabel>
          <FormControl componentClass="select" placeholder="select">
            <option value="select"></option>
          </FormControl>
        </FormGroup>
        <Button type="submit">
          Submit
        </Button>
      </div>
    );
  }

}

export default SelectRouteComponent;
