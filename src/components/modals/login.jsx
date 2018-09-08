
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

import PropTypes from 'prop-types';
import Account from '../../services/account'
import FacebookLogin from 'react-facebook-login'
import GoogleLogin from 'react-google-login'
import Config from '../../config'

import '../containers/header/header.css'

// const continueFacebookImg = require('../../assets/continue_facebook.png')

//TODO:
//1. add UI that displays error message when logIn failed
//2. add UI for facebook login and google login
//3. add progress bar of LogIn
//4. add session for login
//5. add forgot password handling
export default class LogIn extends React.Component {

  constructor(props){

    super(props)

    this.username = ''
    this.password = ''

  }

  onLoginSucess = (userData) => {
    this.props.toggleLogIn()
  }

  onLoginFailed = (error) => {
      console.log(error)
  }

  onLogIn = () => {
    Account.logIn(this.username, this.password).then(userData=>{
      this.onLoginSucess(userData)
    }).catch(error=>{
      this.onLoginFailed(error)
    })

  }

  onFacebookLoginComplete = (response) => {

  }

  onGoogleLoginComplete = (response ) => {


  }

  render(){

    return (
      <div className="modal">
        <Modal isOpen={this.props.isOpen} toggle={this.props.toggleLogIn} className="header-modal">
          <ModalHeader toggle={this.props.toggleLogIn}>
            <p className="header-modal-title">Login To Acheev</p>
            <FacebookLogin
                  appId={Config.facebook.appId}
                  autoLoad={true}
                  fields="name,email,picture"
                  callback={this.onFacebookLoginComplete}
                  icon="fa-facebook"
            />
            <GoogleLogin
              clientId={Config.google.clientId}
              buttonText="LOGIN WITH GOOGLE"
              onSuccess={this.onGoogleLoginComplete}
              onFailure={this.onGoogleLoginComplete}
            />
          </ModalHeader>
          <ModalBody>
            <div className="modal-inputs">
              <InputGroup>
                <Input type="text" placeholder="Email/Username" onChange={(e) => this.username = e.target.value}/>
                <Input type="password" placeholder="Password" onChange={(e) => this.password = e.target.value}/>
                <Button color="primary" size="lg" block className="modal-submit" onClick={this.onLogIn} >Log In</Button>
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

LogIn.propTypes =   {

  isOpen: PropTypes.bool.isRequired,
  toggleLogIn: PropTypes.func,
  switchModal:  PropTypes.func

}
