import React, {Component} from 'react';
import {Well} from 'react-bootstrap';
import {FormGroup} from 'react-bootstrap';
import {ControlLabel} from 'react-bootstrap';
// import {bsStyle} from 'react-bootstrap';
var DatePicker = require("react-bootstrap-date-picker");

class DateComponent extends Component {

  constructor(){
    super();
    var value = new Date().toISOString();
    this.state = {value};
  }

  render() {
    return (
      <div>
        <Well>
          <FormGroup>
            <i className="fa fa-calendar-check-o" aria-hidden="true"></i>
            <ControlLabel> Date travelling </ControlLabel>
            <DatePicker id="example-datepicker" value={this.state.value} />
          </FormGroup>
        </Well>
      </div>
    );
  }

};
export default DateComponent;
