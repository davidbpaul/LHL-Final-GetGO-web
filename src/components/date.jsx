import React, {Component} from 'react';
import {Well} from 'react-bootstrap';
import {bsStyle} from 'react-bootstrap';
var DatePicker = require("react-bootstrap-date-picker");

class Date extends Component {
  render() {
    return (
      <div>
        <Well>
          <i className="fa fa-calendar-check-o" aria-hidden="true"></i>
          Travelling
          <DatePicker id="example-datepicker" />
        </Well>

      </div>
    );
  }
};
export default Date;
