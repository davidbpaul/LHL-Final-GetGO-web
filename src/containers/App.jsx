import React, {Component} from 'react';
import { connect } from 'react-redux';
import ArticleBody from '../loggedIn/articleBody.jsx'
import Home from '../homeScreen/home.jsx'

class App extends Component {

  render() {
    return (
      <div>
      <ArticleBody />
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


export default connect(mapStateToProps)(App);
