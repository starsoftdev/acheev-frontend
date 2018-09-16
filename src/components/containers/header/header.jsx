import React from 'react';
import {
  InputGroup,
  InputGroupAddon,
  Input,
  Button,
 } from 'reactstrap';

 import LogIn from '../../modals/login'
 import SignUp from '../../modals/signup'

 import {
    HeaderHolder, HeaderLeft,
    Logo, SearchBar,
    HeaderRight, SignupButton,
    LoginButton
 } from './headerStyle'

 const logoImg =
 require('../../../assets/logo.svg')

//  const continueFacebookImg =
//  require('../../../assets/continue_facebook.png')

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
      <HeaderHolder>
        <HeaderLeft>
          <Logo img={logoImg} />
          <SearchBar placeholder="What skill are you looking for?" />
        </HeaderLeft>
        <LogIn isOpen={this.state.loginModal} toggleLogIn={this.toggleLogIn} switchModal={this.switchModal}/>
        <SignUp isOpen={this.state.signupModal} toggleSignUp={this.toggleSignUp} switchModal={this.switchModal}/>
        <HeaderRight>
          <LoginButton onClick={this.toggleLogIn}>Login</LoginButton>
          <SignupButton onClick={this.toggleSignUp}>Signup</SignupButton>
        </HeaderRight>
      </HeaderHolder>
    )
  }
}

export default Header
