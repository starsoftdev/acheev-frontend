import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Input } from 'reactstrap';
import Header from './header'
import Footer from './footer'
import { Button } from 'reactstrap';
import '../styles/subscirbe.css'

class Subscribe extends Component {
  constructor(props) {
    super(props)

    this.state = {
      plan: "annual",
      total: ""
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
                  <p className="subscribe-body-benefits-list-item-text">No Commitments.<span className="subscribe-body-benefits-list-item-text-bold"> Cancel Anytime    </span></p>
                </div>
                <div className="subscribe-body-benefits-list-item">
                  <span className="subscribe-body-benefits-list-item-check"><i className="fa fa-check blue-check" aria-hidden="true"></i></span>
                  <p className="subscribe-body-benefits-list-item-text"><span className="subscribe-body-benefits-list-item-text-bold"> Ad-free </span>viewing for an uninterrupted experience</p>
                </div>
              </div>
            </div>
            <div className="subscribe-body-payment">
              <div className="subscribe-body-payment-card">
                <div className="subscribe-body-payment-card-number">
                  <div className="subscribe-body-payment-card-number-label">
                    <span className="subscribe-body-payment-card-number-label-text">Card Number</span>
                    <img src={require('/Users/ali/Projects/acheev/src/assets/credit-cards.jpg')} className="subscribe-body-payment-card-img" />
                  </div>
                  <div className="subscribe-body-payment-card-number-input">
                    <input type="password" placeholder="Insert your card number here" className="subscribe-body-payment-card-number-input-input"/>
                  </div>
                </div>
                <div className="subscribe-body-payment-card-number-details">
                  <div className="subscribe-body-payment-card-number-details-label">
                    <span className="subscribe-body-payment-card-number-details-label-expiration">Expiration</span>
                    <span className="subscribe-body-payment-card-number-details-label-security">Security Code</span>
                  </div>
                  <div className="subscribe-body-payment-card-number-details-inputs">
                    <select className="subscribe-body-payment-card-number-details-inputs-month">
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6">6</option>
                      <option value="7">7</option>
                      <option value="8">8</option>
                      <option value="9">9</option>
                      <option value="10">10</option>
                      <option value="11">11</option>
                      <option value="12">12</option>
                    </select>
                    <select className="subscribe-body-payment-card-number-details-inputs-year">
                      <option value="18">18</option>
                      <option value="19">19</option>
                      <option value="20">20</option>
                      <option value="21">21</option>
                      <option value="22">22</option>
                      <option value="23">23</option>
                      <option value="24">24</option>
                      <option value="25">25</option>
                      <option value="26">26</option>
                      <option value="27">27</option>
                      <option value="28">28</option>
                      <option value="29">29</option>
                    </select>
                    <input placeholder="CVC" className="subscribe-body-payment-card-number-details-inputs-cvc" type="number" />
                  </div>
                </div>
              </div>
              <div className="subscribe-body-payment-promo">
                <span className="subscribe-body-payment-promo-label">Promo Applied:</span>
                <span className="subscribe-body-payment-promo-code">GOOGLE25 - 2 months for $0.99</span>
              </div>
              <div className="subscribe-body-payment-plan">
                <div className="subscribe-body-payment-plan-label">
                  <span className="subscribe-body-payment-plan-label-text">Select a Plan</span>
                </div>
                <div className="subscribe-body-payment-plan-tile">
                  <div className={(this.state.plan === "annual" ?  "subscribe-body-payment-plan-tile-item active" : "subscribe-body-payment-plan-tile-item ")} onClick={() => this.setState({plan: "annual"})} >
                    <span className="subscribe-body-payment-plan-tile-item-dollar">$</span>
                    <span className="subscribe-body-payment-plan-tile-item-bignum">8</span>
                    <span className="subscribe-body-payment-plan-tile-item-change">.25</span>
                    <span className="subscribe-body-payment-plan-tile-item-month">/Mo</span>
                    <div className="line-break" />
                    <span className="subscribe-body-payment-plan-tile-item-billed">$99 billed anually</span>
                  </div>
                  <div className={(this.state.plan === "monthly" ?  "subscribe-body-payment-plan-tile-item active" : "subscribe-body-payment-plan-tile-item ")} onClick={() => this.setState({plan: "monthly"})} >
                    <span className="subscribe-body-payment-plan-tile-item-dollar">$</span>
                    <span className="subscribe-body-payment-plan-tile-item-bignum">15</span>
                    <span className="subscribe-body-payment-plan-tile-item-change">.00</span>
                    <span className="subscribe-body-payment-plan-tile-item-month">/Mo</span>
                    <div className="line-break" />
                    <span className="subscribe-body-payment-plan-tile-item-billed">Billed Monthly</span>
                  </div>
                </div>
              </div>
              <hr className="subscribe-body-payment-line" />
              <div className="subscribe-body-payment-bottom">
                <div className="subscribe-body-payment-bottom-total">
                  <span className="subscribe-body-payment-bottom-total-text">You're Paying:</span>
                  <span className="subscribe-body-payment-bottom-total-number">$0.99</span>
                </div>
                <div className="subscribe-body-payment-bottom-disclaimer">
                  <p className="subscribe-body-payment-bottom-disclaimer-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Justo donec enim diam vulputate ut pharetra sit amet aliquam. Pretium aenean pharetra magna ac placerat. Id aliquet risus feugiat in ante metus dictum.
                  </p>
                </div>
                <div className="subscribe-body-payment-bottom-submit">
                  <button className="subscribe-body-payment-bottom-submit-button">Submit Payment</button>
                </div>
              </div>
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