import React, {Component} from 'react';
import { Jumbotron} from 'react-bootstrap';
import {bsStyle} from 'react-bootstrap';
import Tables from './tables.jsx';

class Jumbotrons2 extends Component {
  render() {
    return (
      <div>
      <Jumbotron>
      <Tables />
      </Jumbotron>

      </div>
    );
  }
};
export default Jumbotrons2;
