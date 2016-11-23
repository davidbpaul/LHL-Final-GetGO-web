import React, {Component} from 'react';
import {Alert, Button } from 'react-bootstrap';
import {bsStyle} from 'react-bootstrap';

class Tip extends Component {
  render() {
    return (
      <div>
      <Alert bsStyle="success" onDismiss={this.handleAlertDismiss}>
         <h4>Tip</h4>
         <p>you can save your favorite routes</p>
         <p>
           <Button bsStyle="success">Check it out</Button>
         </p>
      </Alert>

      </div>
    );
  }
};
export default Tip;
