import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Header from './header'
import Footer from './footer'
import { Button } from 'reactstrap';

class Subscribe extends Component {
  constructor(props) {
    super(props)

    this.state = {
      discover: "all"
    }

  }

  render() {
    return (
      <div>
        <div className="subscribe-header">
          <Header />
        </div>
        <div className="subscribe-footer">
          <Footer />
        </div>
      </div>
    )
  }
}

export default Subscribe