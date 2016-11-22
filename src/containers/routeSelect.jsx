import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { Jumbotron, Button } from 'react-bootstrap';
import {bsStyle} from 'react-bootstrap';
import RouteSelectForm from '../components/routeSelectForm.jsx';

class RouteSelect extends Component {


  //
  // onListItemCheck(route, event) {
  //   this.props.selectedRoutes(route, event.target);
  // }
  //
  // renderRoutes(val, index, arr){
  //   return(
  //     <li key={index}>
  //       <input onClick={this.onListItemCheck.bind(this, route)} />
  //         {val}
  //     </li>
  //   )
  // }

  renderMessages(routes) {
   return routes.map((route) => <RouteSelectForm i={ route }/>)
 }

  render() {
    return (
      <div>
      <Jumbotron>
        <form>
          { this.renderMessages(this.props.routes) }
        </form>
      </Jumbotron>
      </div>
    );
  }
};

// render() {
//   return (
//     <div>
//     <Jumbotron>
//       <form>
//        <RouteSelectForm />
//         {/* <ul>
//           {this.props.selectedRoutes.map(route => <li>{route}</li>)}
//         </ul> */}
//         {/* <h3>All Posts</h3> */}
//         <ul>
//           {this.props.route.map((val, index, arr) => this.renderRoutes.bind(this, val, index, arr))}
//         </ul>
//        </RouteSelectForm>
//       </form>
//     </Jumbotron>
//     </div>
//   );
// }
// };

function mapStateToProps(state){
//whatever is returned here will show up as props
//inside app

  return{
    route: state.route,
    location: state.location,
    destination: state.destination
  }

}

// anything returned will end up as props on the selectRoute container
function mapDispatchToProps(dispath){
  //whenever selectRoute is called to result should be passed
  //to all reducers
  return bindActionCreators({selectRoute: selectRoute}, dispatch)
}



export default connect(mapStateToProps)(RouteSelect);
