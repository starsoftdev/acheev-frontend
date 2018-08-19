import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Header from './header'
import Footer from './footer'
import { Button } from 'reactstrap';
import '../styles/subscirbe.css'

class Subscribe extends Component {
  constructor(props) {
    super(props)

    this.state = {
      plan: "anually"
    }

  }

  render() {
    return (
      <div className="subscribe">
        <div className="subscribe-header">
          <Header />
        </div>
        <div className="subscribe-padding">
          <div className="subscribe-top">
            <h1 className="subscribe-top-title">Your first month for only $0.99</h1>
            <h5 className="subscribe-top-subtitle">No Commitment. Cancel Anytime.</h5>
          </div>
          <div className="subscribe-body">
            <div className="subscribe-body-benefits">
              <div className="subscribe-body-benefits-header">
                <h3 className="subscribe-body-benefits-header-title">Premium Member Benefits</h3>
                <p className="subscribe-body-benefits-header-subtitle">Start Learning & Earning Today</p>
              </div>
              <div className="subscribe-body-benefits-list">
                <div className="subscribe-body-benefits-list-item">
                  <span className="subscribe-body-benefits-list-item-check"><i className="fa fa-check blue-check" aria-hidden="true"></i></span>
                  <p className="subscribe-body-benefits-list-item-text">Unlimited access to our full catalog of over<span className="subscribe-body-benefits-list-item-text-bold"> 5,000 online classes & professionals</span></p>
                </div>
                <div className="subscribe-body-benefits-list-item">
                  <span className="subscribe-body-benefits-list-item-check"><i className="fa fa-check blue-check" aria-hidden="true"></i></span>
                  <p className="subscribe-body-benefits-list-item-text">Learn from<span className="subscribe-body-benefits-list-item-text-bold"> experts </span>in design, business, photography, music and more</p>
                </div>
                <div className="subscribe-body-benefits-list-item">
                  <span className="subscribe-body-benefits-list-item-check"><i className="fa fa-check blue-check" aria-hidden="true"></i></span>
                  <p className="subscribe-body-benefits-list-item-text">Collaborate with a community of<span className="subscribe-body-benefits-list-item-text-bold">  2+ million+ </span>members from around the world</p>
                </div>
                <div className="subscribe-body-benefits-list-item">
                  <span className="subscribe-body-benefits-list-item-check"><i className="fa fa-check blue-check" aria-hidden="true"></i></span>
                  <p className="subscribe-body-benefits-list-item-text">Desktop, mobile, and offline viewing, so you can<span className="subscribe-body-benefits-list-item-text-bold"> learn & earn when you want.</span></p>
                </div>
                <div className="subscribe-body-benefits-list-item">
                  <span className="subscribe-body-benefits-list-item-check"><i className="fa fa-check blue-check" aria-hidden="true"></i></span>
                  <p className="subscribe-body-benefits-list-item-text">No commitments.<span className="subscribe-body-benefits-list-item-text-bold"> Cancel anytime.</span></p>
                </div>
                <div className="subscribe-body-benefits-list-item">
                  <span className="subscribe-body-benefits-list-item-check"><i className="fa fa-check blue-check" aria-hidden="true"></i></span>
                  <p className="subscribe-body-benefits-list-item-text"><span className="subscribe-body-benefits-list-item-text-bold"> Ad-free </span>viewing for an uninterrupted experience</p>
                </div>
              </div>
            </div>
            <div className="subscribe-body-payment">
            </div>
          </div>
        </div>
        <div className="subscribe-footer">
          <Footer />
        </div>
      </div>
    )
  }
}

export default Subscribe