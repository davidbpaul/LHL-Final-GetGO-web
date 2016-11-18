import React, {Component} from 'react';
import NavBar from './NavBar.jsx'

class App extends Component {
// initial state
  constructor(props) {
    super(props);
    this.state = {
      currentUser: {name: ""},
      availableRoutes: [],
      userLocation: { currentLocation:[], destination:[]},
      routeCount: 0,
    };
  }


  render() {
    return (
      <div>
          <nav>
            <span className='userCount'>{this.state.userCount} users online</span>
            <h1>Chatty</h1>
          </nav>
      </div>
    );
  }
}
export default App;
