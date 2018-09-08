import React from 'react';

import './footer.css'

class Footer extends React.Component {

  render() {
    return (
        <div className="footer">
          <div className="footer-grid">
            <div className="footer-grid-column">
              <span className="footer-grid-column-header">Acheev</span>
              <span className="footer-grid-column-item">Careers</span>
              <span className="footer-grid-column-item">Press</span>
              <span className="footer-grid-column-item">Help</span>
            </div>
            <div className="footer-grid-column">
              <span className="footer-grid-column-header">Services</span>
              <span className="footer-grid-column-item">How it Works</span>
              <span className="footer-grid-column-item">Terms of Use</span>
              <span className="footer-grid-column-item">Privacy Policy</span>
            </div>
            <div className="footer-grid-column">
              <span className="footer-grid-column-header">About</span>
              <span className="footer-grid-column-item">Who We Are</span>
              <span className="footer-grid-column-item">Contact Us</span>
              <span className="footer-grid-column-item">FAQ</span>
            </div>
            <div className="footer-grid-column-app">
              <span className="footer-grid-column-header">Get the App</span>
              <span className="footer-grid-column-item">For Android</span>
              <span className="footer-grid-column-item">For iOS</span>
            </div>
            <div className="footer-grid-column">
              <span className="footer-grid-column-header">Find Us</span>
              <div className="footer-grid-column-logo">
                <span className="footer-grid-column-logo-item"></span>
                <span className="footer-grid-column-logo-item"></span>
                <span className="footer-grid-column-logo-item"></span>
                <span className="footer-grid-column-logo-item"></span>
                <span className="footer-grid-column-logo-item"></span>
              </div>
            </div>
          </div>
          <hr className="footer-hr"/>
          <span className="footer-copyright">2018 Acheev Inc. All Rights Reserved</span>
        </div>
    )
  }
}

export default Footer