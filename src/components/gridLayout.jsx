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

            <Col xs={12} md={8}>
              <Well>
                {<Tip />}
              </Well>
            </Col>
            <Col xs={12} md={8}>
              <Well>
                {<DateComponent />}
              </Well>
            </Col>
            <Col xs={12} md={8}>
              <Well>
                {<Time />}
              </Well>
            </Col>
            <Col xs={12} md={8}>
              <Well>
                {<SelectRouteComponent />}
              </Well>
            </Col>
            <Col xs={12} md={8}>
              <Well>
                {<Trains />}
              </Well>
            </Col>
          </Row>

            <Col xs={12} md={4}>
              <Well>
                <p> side panel </p>
              </Well>
            </Col>


        </Grid>
      </div>
    );
  }
};
export default GridLayout;
