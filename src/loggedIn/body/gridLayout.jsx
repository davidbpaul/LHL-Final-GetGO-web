import React, {Component} from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import Alerts from './components/alerts.jsx';
import Jumbotrons from './components/jumbotrons.jsx';
import Wells from './components/wells.jsx';
import Wells2 from './components/wells2.jsx';
import Wells3 from './components/wells3.jsx';
import Jumbotrons2 from './components/jumbotrons2.jsx';

class GridLayout extends Component {
  render() {
    return (
      <div>
      <Grid>
      <Row className="show-grid">
        <Col xs={12} md={12}>{
          <Alerts />
        }</Col>
        <Col xs={12} md={12}>{
          <Jumbotrons />
        }</Col>
        <Col xs={12} md={12}>{
         <Wells />
        }</Col>
        <Col xs={12} md={12}>{
         <Wells2 />
        }</Col>
        <Col xs={12} md={12}>{
          <Wells3 />
        }</Col>
      <Col xs={12} md={12}>{
        <Jumbotrons2 />
      }</Col>
      </Row>
      </Grid>
      </div>
    );
  }
};
export default GridLayout;
