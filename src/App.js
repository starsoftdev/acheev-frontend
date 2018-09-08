import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/pages/home/home'
import Subscribe from './components/pages/subscribe/subscribe'
import MyClasses from './components/pages/myClasses/myClasses'
import CourseOverview from './components/pages/courseOverview/CourseOverview'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Home} />
          <Route exact path="/subscribe" component={Subscribe} />
          <Route exact path="/course/:id" component={CourseOverview} />
          <Route exact path="/profile/:id/my-classes" component={MyClasses} />
        </div>
      </Router>
    );
  }
}

export default App;
