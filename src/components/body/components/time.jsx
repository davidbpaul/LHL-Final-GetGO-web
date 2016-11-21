import React, {Component} from 'react';
import {Well} from 'react-bootstrap';
import {bsStyle} from 'react-bootstrap';

class Time extends Component {
  render() {
    return (
      <div>
<Well><i className="fa fa-clock-o" aria-hidden="true"></i> At <strong>3pm</strong></Well>
      </div>
    );
  }
};
export default Time;
