import React, {Component} from 'react';
import { Jumbotron} from 'react-bootstrap';
import {bsStyle} from 'react-bootstrap';
import TripOverView from './tripOverView.jsx';

class Trains extends Component {
  render() {
    return (
      <div>
      <Jumbotron>
      <TripOverView />
      </Jumbotron>

      </div>
    );
  }
};
export default Trains;
