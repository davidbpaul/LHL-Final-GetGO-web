import React, {Component} from 'react';
import ArticleBody from './loggedIn/articleBody.jsx'
// import Home from './home.jsx'

class App extends Component {
// initial state
  constructor(props) {
    super(props);
    this.state = {
      currentUser: {name: ""},
      availableRoutes: [],
      userLocation: { currentLocation:[], destination:[]},
      routeCount: 0,
      currentTime:0,
      arrivalTime:0,
      destinationTime:0

    };
  }

  render() {
    return (
      <div>
      <ArticleBody />
      </div>
    );
  }
}
export default App;
