import React, {Component} from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import Tip from './components/tip.jsx';
import RouteSelect from './components/routeSelect.jsx';
import Date from './components/date.jsx';
import Time from './components/time.jsx';
import FromStation from './components/fromStation.jsx';
import Trains from './components/trains.jsx';

class GridLayout extends Component {
  render() {
    return (
      <div>
      <Grid>
      <Row className="show-grid">
        <Col xs={12} md={12}>{
          <Tip />
        }</Col>
        <Col xs={12} md={12}>{
          <RouteSelect />
        }</Col>
        <Col xs={12} md={12}>{
         <Date />
        }</Col>
        <Col xs={12} md={12}>{
         <Time />
        }</Col>
        <Col xs={12} md={12}>{
          <FromStation />
        }</Col>
      <Col xs={12} md={12}>{
        <Trains />
      }</Col>
      </Row>
      </Grid>
      </div>
    );
  }
};
export default GridLayout;
