import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';
import Home from './components/home'
import Subscribe from './components/subscribe'
import MyClasses from './components/myClasses/myClasses'

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
