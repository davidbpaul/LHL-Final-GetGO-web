import React, {Component} from 'react';
import { Grid, Row, Col, Well } from 'react-bootstrap';
import Tip from './tip.jsx';
import SelectRouteComponent from './SelectRouteComponent.jsx';
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
              <Well>
                {<Tip />}
              </Well>
            </Col>
            <Col xs={12} md={12}>
              <Well>
                {<DateComponent />}
              </Well>
            </Col>
            <Col xs={12} md={12}>
              <Well>
                {<Time />}
              </Well>
            </Col>
            <Col xs={12} md={12}>
              <Well>
                {<SelectRouteComponent />}
              </Well>
            </Col>
            <Col xs={12} md={12}>
              <Well>
                {<Trains />}
              </Well>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
};
export default GridLayout;
