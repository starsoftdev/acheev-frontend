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

 import LogIn from '../../modals/login'
 import SignUp from '../../modals/signup'
 import './header.css'

 const logoImg =
 require('../../../logo.svg')

 const continueFacebookImg =
 require('../../../assets/continue_facebook.png')

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loginModal: false,
      signupModal: false,
    }
  }

  toggleLogIn = () => {

    this.setState({
      loginModal: !this.state.loginModal
    })
  }

  toggleSignUp = () => {

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
          <img src={logoImg} className="header-logo"/>
          <InputGroup className="header-input">
            <Input className="header-input-input" placeholder="What skill are you looking for?" />
            <InputGroupAddon addonType="prepend" className="header-input-button"><Button className="header-input-button-button"><span>&#x1F50D;</span></Button></InputGroupAddon>
          </InputGroup>
        </div>
        <div className="header-buttons">
          <Button className="header-login" onClick={this.toggleLogIn}>Login</Button>
          <Button className="header-signup" onClick={this.toggleSignUp}>Sign Up</Button>
        </div>
        <LogIn isOpen={this.state.loginModal} toggleLogIn={this.toggleLogIn} switchModal={this.switchModal}/>
        <SignUp isOpen={this.state.signupModal} toggleSignUp={this.toggleSignUp} switchModal={this.switchModal}/>
      </div>
    )
  }
}

export default Header
