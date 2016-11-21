import React, {Component} from 'react';
import { connect } from 'react-redux';
import { selectRoute } from '../actions/index.js'
import { bindActionCreators } from 'redux'
import ArticleBody from '../components/articleBody.jsx'

class App extends Component {
  render() {
    return (
      <div>
      <ArticleBody



      />
      </div>
    );
  }
}

function mapStateToProps(state){
//whatever is returned here will show up as props
//inside app

  return{
    agencies: state.agencies,
    routes: state.routes,
    trips: state.trips
  }

}

// //anything returned will end up as props on the selectRoute container
// function mapDispatchToProps(dispath){
//   //whenever selectRoute is called to result should be passed
//   //to all reducers
//   return bindActionCreators({selectRoute: selectRoute}, dispatch)
// }
 // mapDispatchToProps)


//premote selectRoute from a component to a container
export default connect(mapStateToProps)(App);
