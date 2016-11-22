import React, {Component} from 'react';
import {Table} from 'react-bootstrap';
import {bsStyle} from 'react-bootstrap';




class TripOverView extends Component {
  render() {
    return (
      <div>
      <div>
      <Table responsive>
      <thead>
      <tr>
      <th></th>
      <th>Depart</th>
      <th>Arrive</th>
      <th>Length</th>
      </tr>
      </thead>
      <tbody>
      <tr>
      <td><i className="fa fa-train" aria-hidden="true"></i> 10B</td>
      <td>1pm</td>
      <td>3pm</td>
      <td>2h</td>

      </tr>
      <tr>

      <td><i className="fa fa-train" aria-hidden="true"></i> 36C</td>
      <td>1:30pm</td>
      <td>3:40</td>
      <td>2h 10m</td>
      </tr>
      </tbody>
      </Table>
      </div>


      </div>
    );
  }
};
export default TripOverView;
