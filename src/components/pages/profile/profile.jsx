

import Header from '../../containers/header/header'
import Footer from '../../containers/footer/footer'
import UserProfile from '../../containers/userProfile/userProfile'
import React, { Component } from 'react';
import {
  ProfilePanelContainer,
  ProfileTopLeftPanel,
  ProfileBottomLeftPanel,
  ProfileMainPanel
 } from './profileStyles'

import User from '../../../domains/user'
import UserSummary from '../../containers/userSummary/index.jsx'
import UserDetail from '../../containers/userDetail/index.jsx'

export default class Profile extends Component {

  constructor(props) {
    super(props)
    this.state = {
        user: new User()
    }
  }


  render(){

  return (

    <div>
        <Header/>
        <ProfilePanelContainer>
          <ProfileTopLeftPanel>
            <UserProfile user={this.state.user}/>
          </ProfileTopLeftPanel>
          <ProfileBottomLeftPanel>
            <UserSummary user={this.state.user}/>
          </ProfileBottomLeftPanel>
          <ProfileMainPanel>
            <UserDetail user={this.state.user}/>
          </ProfileMainPanel>
        </ProfilePanelContainer>
        <Footer/>
    </div>

  )





}




}
