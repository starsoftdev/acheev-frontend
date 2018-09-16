
import React, { Component } from 'react';
import Header from '../../containers/header/header'
import Footer from '../../containers/footer/footer'
import UserProfile from '../../containers/userProfile/index.jsx'
import UserSummary from '../../containers/userSummary/index.jsx'
import UserDetail from '../../containers/userDetail/index.jsx'

import {
  ProfilePanelContainer,
  ProfileTopLeftPanel,
  ProfileBottomLeftPanel,
  ProfileMainPanel
} from './styles'

import User from '../../../domains/user'

export default class Profile extends Component {

  constructor(props) {
    super(props)

    const id = this.props.match.params.id

    this.state = {
        user: new User(id)
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
