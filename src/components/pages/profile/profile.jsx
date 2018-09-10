

import Header from '../../containers/header/header'
import Footer from '../../containers/footer/footer'
import UserProfile from '../../containers/userProfile/userProfile'
import React, { Component } from 'react';
import {
  ProfileContentsContainer,
  ProfileContentsBriefContainer,
  ProfileContentsSummaryContainer,
  ProfileContentsDetailContainer
 } from './profileStyles'

 import User from '../../../domains/user'

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
        <ProfileContentsContainer>
          <ProfileContentsBriefContainer>
            <UserProfile user={this.state.user}/>
          </ProfileContentsBriefContainer>
          <ProfileContentsSummaryContainer>
          </ProfileContentsSummaryContainer>
          <ProfileContentsDetailContainer>
          </ProfileContentsDetailContainer>
        </ProfileContentsContainer>
        <Footer/>
    </div>

  )





}




}
