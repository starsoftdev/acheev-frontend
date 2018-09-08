import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from './components/pages/home/home'
import Subscribe from './components/pages/subscribe/subscribe'
import MyClasses from './components/pages/myClasses/myClasses'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Home} />
          <Route exact path="/subscribe" component={Subscribe} />
          <Route exact path="/my-classes" component={MyClasses} />
        </div>
      </Router>
    );
  }
}

export default App;
