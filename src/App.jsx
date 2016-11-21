import React, {Component} from 'react';
import ArticleBody from './loggedIn/articleBody.jsx'
import Home from './homeScreen/home.jsx'
import Guest from './visitor/guest.jsx'

class App extends Component {
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

    // <Home />
    //  <Guest />
  render() {
    return (
      <div>
      <ArticleBody />
      </div>
    );
  }
}
export default App;
