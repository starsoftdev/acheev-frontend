import React, { Component } from 'react';
import './App.css';
import Header from '../../containers/header/header'
import Footer from '../../containers/footer/footer'
import { UnownedCourseTileWrapper } from '../../containers/UnownedCourseTileWrapper/UnownedCourseTileWrapper'

import { Button } from 'reactstrap';
import { stars } from '../../../consts/functions'

const heroImg = require('../../../assets/hero-image.png')
const appStoreImg = require('../../../assets/app_store.svg')
const googlePlayImg = require('../../../assets/google_play.svg')

class Home extends Component {
  constructor(props) {
    super(props)

    this.state = {
      discover: "all"
    }

  }

  popular = () => {
    return (
      <div className="home-popular-categories-grid">
        <UnownedCourseTileWrapper
          img={heroImg}
          title={"Title from props"}
          author={"Author from props"}
          courseStars={4}
          price={"$45.00"}
        />
        <UnownedCourseTileWrapper
          img={heroImg}
          title={"Title from props"}
          author={"Author from props"}
          courseStars={4}
          price={"$45.00"}
        />
        <UnownedCourseTileWrapper
          img={heroImg}
          title={"Title from props"}
          author={"Author from props"}
          price={"$45.00"}
          courseStars={4}
        />
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
              <img src={appStoreImg} className="home-app-store-logo"/>
              <img src={googlePlayImg} className="home-app-store-logo"/>
            </div>
          </div>
          <div className="home-app-right">
          </div>
        </div>
        <div className="home-footer">
          <Footer />
        </div>
      </div>
    );
  }
}

export default Home;
