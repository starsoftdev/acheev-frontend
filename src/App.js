import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/pages/home/home'
import Subscribe from './components/pages/subscribe/subscribe'
import MyClasses from './components/pages/myClasses/myClasses'
import CourseOverview from './components/pages/courseOverview/CourseOverview'
import DetailedCourse from './components/pages/DetailedCourse/DetailedCourse'
import OrderCourse from './components/pages/OrderCourse/OrderCourse';
import NewOffer from './components/pages/NewOffer/NewOffer';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/subscribe" component={Subscribe} />
          <Route exact path="/offer/new" component={NewOffer} />
          <Route exact path="/course/:id" component={CourseOverview} />
          <Route exact path="/course/:id/full" component={DetailedCourse} />
          <Route exact path="/course/:id/order" component={OrderCourse} />
          <Route exact path="/profile/:id/my-classes" component={MyClasses} />
        </Switch>
      </Router>
    );
  }
}

export default App;
