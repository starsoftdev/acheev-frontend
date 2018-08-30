
import React, { Component } from 'react';
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

const continueFacebookImg = require('../assets/continue_facebook.png')

export default class LogIn extends React.Component {

  onLoginSucess = (userData) => {

  }

  onLoginFailed = (error) => {

  }

  render(){

    return (
      <div className="modal">
        <Modal isOpen={this.props.isOpen} toggle={this.props.toggleLogIn} className="header-modal">
          <ModalHeader toggle={this.props.toggleLogIn}>
            <p className="header-modal-title">Login To Acheev</p>
            <img src={continueFacebookImg} className="modal-continue"/>
          </ModalHeader>
          <ModalBody>
            <div className="modal-inputs">
              <InputGroup>
                <Input type="text" placeholder="Email/Username" />
                <Input type="password" placeholder="Password" />
                <Button color="primary" size="lg" block className="modal-submit">Log In</Button>
                <div className="modal-below-button">
                  <p>Remember Me?</p>
                  <p>Forgot Password</p>
                </div>
              </InputGroup>
            </div>
          </ModalBody>
          <ModalFooter>
            <div className="header-modal-footer">
              <p className="header-modal-footer-grey">Not a member yet? </p>
              <a onClick={this.props.switchModal} className="header-modal-footer-link">Join now!</a>
            </div>
          </ModalFooter>
        </Modal>
      </div>
    )
  }



}
