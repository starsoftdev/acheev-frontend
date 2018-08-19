import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './../App.css';
import Header from './header'
import { Button } from 'reactstrap';

class Home extends Component {
  constructor(props) {
    super(props)

    this.state = {
      discover: "all"
    }

  }

  stars = (rating) => {
    if (rating === 5) {
      return (
        <div>
          <span className="fa fa-star checked fa-2x"></span>
          <span className="fa fa-star checked fa-2x"></span>
          <span className="fa fa-star checked fa-2x"></span>
          <span className="fa fa-star checked fa-2x"></span>
          <span className="fa fa-star checked fa-2x"></span>
          <span className="star-rating">5.0</span>
        </div>
      )
    }
    if (rating === 4) {
      return (
        <div>
          <span className="fa fa-star checked fa-2x"></span>
          <span className="fa fa-star checked fa-2x"></span>
          <span className="fa fa-star checked fa-2x"></span>
          <span className="fa fa-star checked fa-2x"></span>
          <span className="fa fa-star fa-2x"></span>
          <span className="star-rating">4.0</span>
        </div>
      )
    }
    if (rating === 3) {
      return (
        <div>
          <span className="fa fa-star checked fa-2x"></span>
          <span className="fa fa-star checked fa-2x"></span>
          <span className="fa fa-star checked fa-2x"></span>
          <span className="fa fa-star fa-2x"></span>
          <span className="fa fa-star fa-2x"></span>
          <span className="star-rating">3.0</span>
        </div>
      )
    }
    if (rating === 2) {
      return (
        <div>
          <span className="fa fa-star checked fa-2x"></span>
          <span className="fa fa-star checked fa-2x"></span>
          <span className="fa fa-star fa-2x"></span>
          <span className="fa fa-star fa-2x"></span>
          <span className="fa fa-star fa-2x"></span>
          <span className="star-rating">2.0</span>
        </div>
      )
    }
    if (rating === 1) {
      return (
        <div>
          <span className="fa fa-star checked fa-2x"></span>
          <span className="fa fa-star fa-2x"></span>
          <span className="fa fa-star fa-2x"></span>
          <span className="fa fa-star fa-2x"></span>
          <span className="fa fa-star fa-2x"></span>
          <span className="star-rating">1.0</span>
        </div>
      )
    }
    if (rating === 0) {
      return (
        <div>
          <span className="fa fa-star"></span>
          <span className="fa fa-star"></span>
          <span className="fa fa-star"></span>
          <span className="fa fa-star"></span>
          <span className="fa fa-star"></span>
          <span className="star-rating">0</span>
        </div>
      )
    }
  }

  popular = () => {
    return (
      <div className="home-popular-categories-grid">
        <div className="home-popular-categories-grid-course">
          <img src={require('/Users/ali/Projects/acheev/src/assets/hero-image.png')} className="home-popular-categories-grid-course-img" />
          <div className="home-popular-categories-grid-course-belowimg">
            <h5 className="home-popular-categories-grid-course-header">Learn how to properly optimize Your Website For Search Engines</h5>
            <span className="home-popular-categories-grid-course-author">Thomas Cobb</span>
            <hr className="home-popular-categories-grid-course-separator" />
            <div className="home-popular-categories-grid-course-stats">
              <div className="home-popular-categories-grid-course-stats-top">
                {this.stars(4)}
                <span className="home-popular-categories-grid-course-price">$250</span>
              </div>
              <div className="home-popular-categories-grid-course-stats-bottom">
              </div>
            </div>
          </div>
        </div>
        <div className="home-popular-categories-grid-course">
          <img src={require('/Users/ali/Projects/acheev/src/assets/hero-image.png')} className="home-popular-categories-grid-course-img" />
          <div className="home-popular-categories-grid-course-belowimg">
            <h5 className="home-popular-categories-grid-course-header">Learn how to properly optimize Your Website For Search Engines</h5>
            <span className="home-popular-categories-grid-course-author">Thomas Cobb</span>
            <hr className="home-popular-categories-grid-course-separator" />
            <div className="home-popular-categories-grid-course-stats">
              <div className="home-popular-categories-grid-course-stats-top">
                {this.stars(4)}
                <span className="home-popular-categories-grid-course-price">$250</span>
              </div>
              <div className="home-popular-categories-grid-course-stats-bottom">
              </div>
            </div>
          </div>
        </div>
        <div className="home-popular-categories-grid-course">
          <img src={require('/Users/ali/Projects/acheev/src/assets/hero-image.png')} className="home-popular-categories-grid-course-img" />
          <div className="home-popular-categories-grid-course-belowimg">
            <h5 className="home-popular-categories-grid-course-header">Learn how to properly optimize Your Website For Search Engines</h5>
            <span className="home-popular-categories-grid-course-author">Thomas Cobb</span>
            <hr className="home-popular-categories-grid-course-separator" />
            <div className="home-popular-categories-grid-course-stats">
              <div className="home-popular-categories-grid-course-stats-top">
                {this.stars(4)}
                <span className="home-popular-categories-grid-course-price">$250</span>
              </div>
              <div className="home-popular-categories-grid-course-stats-bottom">
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  render() {
    return (
      <div className="home">
        <header className="home-header"> 
          <Header />
        </header>
        <div className="home-banner">
          <h2 className="home-banner-header">Don't Just Dream, Do!</h2>
          <span className="home-banner-text">Hire, manage and pay people with smart contracts.</span>
          <Button className="home-banner-button"><span className="home-banner-button-text">GET STARTED</span></Button>{' '}
        </div>
        <div className="home-explore">
          <div className="home-pill" />
          <h2 className="home-explore-header">Explore the Marketplace</h2>
          <span className="home-explorer-subheader">Real people, flat rate services. Verified Linkedin and GitHub credentials.</span>
          <div className="home-explore-grid">
            <div className="home-explore-grid-row">
              <div className="home-explore-grid-tile">Graphics & Design</div>
              <div className="home-explore-grid-tile">Digital Marketing</div>
              <div className="home-explore-grid-tile">Writing & Translation</div>
              <div className="home-explore-grid-tile">Video & Animation</div>
            </div>
            <div className="home-explore-grid-row">
              <div className="home-explore-grid-tile">Music & Audio</div>
              <div className="home-explore-grid-tile">Programming & Tech</div>
              <div className="home-explore-grid-tile">Business</div>
              <div className="home-explore-grid-tile">Fun & Lifestyle</div>
            </div>
          </div>
        </div>
        <div className="home-popular">
          <div className="home-pill" />
          <h2 className="home-popular-header">Discover Our Popular Courses</h2>
          <div className="home-popular-categories">
            <span className={(this.state.discover === "all" ? "home-popular-categories-item active" : "home-popular-categories-item")} onClick={() => this.setState({discover: "all"})}>All</span>
            <span className="home-popular-categories-dot">&bull;</span>
            <span className={(this.state.discover === "creative" ? "home-popular-categories-item active" : "home-popular-categories-item")} onClick={() => this.setState({discover: "creative"})}>Creative</span>
            <span className="home-popular-categories-dot">&bull;</span>
            <span className={(this.state.discover === "business" ? "home-popular-categories-item active" : "home-popular-categories-item")} onClick={() => this.setState({discover: "business"})}>Business</span>
            <span className="home-popular-categories-dot">&bull;</span>
            <span className={(this.state.discover === "technology" ? "home-popular-categories-item active" : "home-popular-categories-item")} onClick={() => this.setState({discover: "technology"})}>Technology</span>
            <span className="home-popular-categories-dot">&bull;</span>
            <span className={(this.state.discover === "lifestyle" ? "home-popular-categories-item active" : "home-popular-categories-item")} onClick={() => this.setState({discover: "lifestyle"})}>Lifestyle</span>
          </div>
          {this.popular()}
        </div>
        <div className="home-tag">
          <div className="home-pill" />
          <h2>Browse By Tag</h2>
          <div className="home-tag-grid">
            <div className="home-tag-grid-column">
              <span className="home-tag-grid-column-item">AMA</span>
              <span className="home-tag-grid-column-item">Business Development</span>
              <span className="home-tag-grid-column-item">EOS</span>
              <span className="home-tag-grid-column-item">Influencers</span>
              <span className="home-tag-grid-column-item">Korean</span>
              <span className="home-tag-grid-column-item">Podcast</span>
              <span className="home-tag-grid-column-item">Social Media</span>
              <span className="home-tag-grid-column-item">UI/UX</span>
            </div>
            <div className="home-tag-grid-column">
              <span className="home-tag-grid-column-item">Advice</span>
              <span className="home-tag-grid-column-item">Chinese</span>
              <span className="home-tag-grid-column-item">Facebook Marketing</span>
              <span className="home-tag-grid-column-item">Infographics</span>
              <span className="home-tag-grid-column-item">Linkedin Marketing</span>
              <span className="home-tag-grid-column-item">Product Design</span>
              <span className="home-tag-grid-column-item">Solidity</span>
              <span className="home-tag-grid-column-item">Video Production</span>
            </div>
            <div className="home-tag-grid-column">
              <span className="home-tag-grid-column-item">Andorid</span>
              <span className="home-tag-grid-column-item">Competetive Analysis</span>
              <span className="home-tag-grid-column-item">Google Adwords</span>
              <span className="home-tag-grid-column-item">Japanese</span>
              <span className="home-tag-grid-column-item">Offline Events</span>
              <span className="home-tag-grid-column-item">Russian</span>
              <span className="home-tag-grid-column-item">Token Economics</span>
              <span className="home-tag-grid-column-item">Video Reviews</span>
            </div>
            <div className="home-tag-grid-column">
              <span className="home-tag-grid-column-item">Branding</span>
              <span className="home-tag-grid-column-item">Due Dilligence</span>
              <span className="home-tag-grid-column-item">iOS</span>
              <span className="home-tag-grid-column-item">KYS</span>
              <span className="home-tag-grid-column-item">Paid Blogging</span>
              <span className="home-tag-grid-column-item">Securities Law</span>
              <span className="home-tag-grid-column-item">Twitter Marketing</span>
              <span className="home-tag-grid-column-item">Web Design</span>
            </div>
          </div>
        </div>
        <div className="home-app">
          <div className="home-app-left">
            <h2 className="home-app-left-header">iPhone & Android Apps are live.</h2>
            <p className="home-app-left-text">Take Acheev with you on the go. Book a freelancer, keep track of multiple jobs, work remotely & never stop learing.</p>
            <div className="home-app-left-stores">
              <img src={require('/Users/ali/Projects/acheev/src/assets/app_store.svg')} className="home-app-store-logo"/>
              <img src={require('/Users/ali/Projects/acheev/src/assets/google_play.svg')} className="home-app-store-logo"/>
            </div>
          </div>
          <div className="home-app-right">
          </div>
        </div>
        <div className="home-footer">
          <div className="home-footer-grid">
            <div className="home-footer-grid-column">
              <span className="home-footer-grid-column-header">Acheev</span>
              <span className="home-footer-grid-column-item">Careers</span>
              <span className="home-footer-grid-column-item">Press</span>
              <span className="home-footer-grid-column-item">Help</span>
            </div>
            <div className="home-footer-grid-column">
              <span className="home-footer-grid-column-header">Services</span>
              <span className="home-footer-grid-column-item">How it Works</span>
              <span className="home-footer-grid-column-item">Terms of Use</span>
              <span className="home-footer-grid-column-item">Privacy Policy</span>
            </div>
            <div className="home-footer-grid-column">
              <span className="home-footer-grid-column-header">About</span>
              <span className="home-footer-grid-column-item">Who We Are</span>
              <span className="home-footer-grid-column-item">Contact Us</span>
              <span className="home-footer-grid-column-item">FAQ</span>
            </div>
            <div className="home-footer-grid-column-app">
              <span className="home-footer-grid-column-header">Get the App</span>
              <span className="home-footer-grid-column-item">For Android</span>
              <span className="home-footer-grid-column-item">For iOS</span>
            </div>
            <div className="home-footer-grid-column">
              <span className="home-footer-grid-column-header">Find Us</span>
              <div className="home-footer-grid-column-logo">
                <span className="home-footer-grid-column-logo-item"></span>
                <span className="home-footer-grid-column-logo-item"></span>
                <span className="home-footer-grid-column-logo-item"></span>
                <span className="home-footer-grid-column-logo-item"></span>
                <span className="home-footer-grid-column-logo-item"></span>
              </div>
            </div>
          </div>
          <hr className="home-footer-hr"/>
          <span className="home-footer-copyright">2018 Acheev Inc. All Rights Reserved</span>
        </div>
      </div>
    );
  }
}

export default Home;
