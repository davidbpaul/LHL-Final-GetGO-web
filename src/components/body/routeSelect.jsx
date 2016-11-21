import React, {Component} from 'react';
import { Jumbotron, Button } from 'react-bootstrap';
import {bsStyle} from 'react-bootstrap';
import RouteSelectForm from './routeSelectForm.jsx';

class RouteSelect extends Component {
  render() {
    return (
      <div>
      <Jumbotron>
        <form>
         <RouteSelectForm />
        </form>
      </Jumbotron>
      </div>
    );
  }
};
export default RouteSelect;
