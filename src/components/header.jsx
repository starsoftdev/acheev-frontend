import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import {
  InputGroup,
  InputGroupAddon,
  Input,
  Button,
  Modal, 
  ModalHeader, 
  ModalBody, 
  ModalFooter
 } from 'reactstrap';
 import '../styles/header.css'

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loginModal: false,
      signupModal: false
    };
  }

  toggleLogin = () => {
    this.setState({
      loginModal: !this.state.loginModal
    })
  }

  toggleSignup = () => {
    this.setState({
      signupModal: !this.state.signupModal
    })
  }

  switchModal = () => {
    this.setState({
      loginModal: !this.state.loginModal,
      signupModal: !this.state.signupModal
    })
  }


  render() {
    return (
      <div className="header">
        <div className="header-left">
          <img src={require('/Users/ali/Projects/acheev/src/logo.svg')} className="header-logo"/>
          <InputGroup className="header-input">
            <Input className="header-input-input" placeholder="What skill are you looking for?" />
            <InputGroupAddon addonType="prepend" className="header-input-button"><Button className="header-input-button-button"><span>&#x1F50D;</span></Button></InputGroupAddon>
          </InputGroup>
        </div>
        <div className="header-buttons">
          <Button className="header-login" onClick={this.toggleLogin}>Login</Button>{' '}
          <Button className="header-signup" onClick={this.toggleSignup}>Sign Up</Button>{' '}
        </div>
        <div className="modal">
          <Modal isOpen={this.state.loginModal} toggle={this.toggleLogin} className="header-modal">
            <ModalHeader toggle={this.toggle}><h4 className="header-modal-title">Login To Acheev</h4>
              <img src={require('/Users/ali/Projects/acheev/src/assets/continue_facebook.png')} className="modal-continue"/>
            </ModalHeader>
            <ModalBody>
              <div className="modal-inputs">
                <InputGroup>
                  <Input type="text" placeholder="Email/Username" />
                  <Input type="password" placeholder="Password" />
                  <Button color="primary" size="lg" block className="modal-submit">Log in</Button>
                  <div className="modal-below-button">
                    <p>Remember Me?</p><p>Forgot Password</p>
                  </div>
                </InputGroup>
              </div>
            </ModalBody>
            <ModalFooter>
              <div className="header-modal-footer">
                <text className="header-modal-footer-grey">Not a member yet? </text><a onClick={this.switchModal} className="header-modal-footer-link">Join now!</a>
              </div>
            </ModalFooter>
          </Modal>
        </div>
        <div className="modal">
          <Modal isOpen={this.state.signupModal} toggle={this.toggleSignup} className="header-modal">
            <ModalHeader toggle={this.toggle}><h4 className="header-modal-title">Join Acheev</h4>
              <img src={require('/Users/ali/Projects/acheev/src/assets/continue_facebook.png')} className="modal-continue"/>
            </ModalHeader>
            <ModalBody>
              <div className="modal-inputs">
                <InputGroup>
                  <Input type="text" placeholder="Enter Your Email" />
                  <Button color="primary" size="lg" block className="modal-submit">Sign Up</Button>
                  <div className="modal-below-button">
                    <p className="modal-below-button-text">By joining I agree to recieve emails from Acheev</p>
                  </div>
                </InputGroup>
              </div>
            </ModalBody>
            <ModalFooter>
              <div className="header-modal-footer">
                <text className="header-modal-footer-grey">Already a member? </text><a onClick={this.switchModal} className="header-modal-footer-link">Sign in!</a>
              </div>
            </ModalFooter>
          </Modal>
        </div>
      </div>
    )
  }
}

export default Header