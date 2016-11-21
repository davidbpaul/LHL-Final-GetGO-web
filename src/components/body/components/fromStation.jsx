import React, {Component} from 'react';
import {Well} from 'react-bootstrap';
import {bsStyle} from 'react-bootstrap';

class FromStation extends Component {
  render() {
    return (
      <div>
      <Well bsSize="large">
        <h5><strong>TO:</strong> Union Station bus terminal (2131 FrontStreet East)</h5>
        <h5><strong>FROM:</strong> Okville bus terminal (123123 PeterStreet )</h5>
      </Well>
      </div>
    );
  }
};
export default FromStation;
