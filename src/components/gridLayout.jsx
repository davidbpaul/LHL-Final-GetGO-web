import React, {Component} from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import Tip from './tip.jsx';
import RouteSelect from '../containers/routeSelect.jsx';
import DateComponent from './dateComponent.jsx';
import Time from './time.jsx';
import Trains from './trains.jsx';

class GridLayout extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Row className="show-grid">
            <Col xs={12} md={12}>
              {<Tip />}
            </Col>
            <Col xs={12} md={12}>
              {<RouteSelect />}
            </Col>
            <Col xs={12} md={12}>
              {<DateComponent />}
            </Col>
            <Col xs={12} md={12}>
              {<Time />}
            </Col>
            <Col xs={12} md={12}>
              {<Trains />}
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
};
export default GridLayout;
