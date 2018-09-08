import React from 'react';
import {
  InputGroup,
  Input,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter
 } from 'reactstrap';
import '../containers/header/header.css'

const continueFacebookImg = require('../../assets/continue_facebook.png')

export default class SignUp extends React.Component {


  onSignUpSucess = (userData) => {

  }

  onSignUpFailed = (error) => {

  }

  render(){

    return (

          <div className="modal">
            <Modal isOpen={this.props.isOpen} toggle={this.props.toggleSignUp} className="header-modal">
              <ModalHeader toggle={this.props.toggleSignUp}>
                <p className="header-modal-title">Join Acheev</p>
                <img src={continueFacebookImg} className="modal-continue"/>
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
                  <p className="header-modal-footer-grey">Already a member? </p>
                  <a onClick={this.props.switchModal} className="header-modal-footer-link">Sign in!</a>
                </div>
              </ModalFooter>
            </Modal>
          </div>
    )
  }



}
