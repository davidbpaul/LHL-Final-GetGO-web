import React, {Component} from 'react';
import { Jumbotron, Button } from 'react-bootstrap';
import {bsStyle} from 'react-bootstrap';
import Forms from './forms.jsx';

class Jumbotrons extends Component {
  render() {
    return (
      <div>
      <Jumbotron>
        <form>
         <Forms />
        </form>
      </Jumbotron>
      </div>
    );
  }
};
export default Jumbotrons;
