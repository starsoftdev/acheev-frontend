
import React, { Component } from 'react'
import {
  UserProfileContainer,
  UserProfilePicture,
  UserProfileName,
  UserProfileSummary,
  UserProfileReviewContainer,
  UserProfileButtonContainer,
  UserProfileButtonContactMe,
  UserProfileButtonCustomOrder

} from './userProfileStyles'

import ProfileStats from './profileStats/index.jsx'

import {
  SeparationLine
} from '../common/styles'

export default class UserProfile extends Component {

  constructor(props){
    super(props)

  }

  render() {

    return (
      <UserProfileContainer>
        <UserProfilePicture src={this.props.user.profilePictureUrl}/>
        <UserProfileName>{this.props.user.firstName} {this.props.user.lastName}</UserProfileName>
        <UserProfileSummary>{this.props.user.summary}</UserProfileSummary>
        <UserProfileReviewContainer/>
        <UserProfileButtonContainer>
          <UserProfileButtonContactMe>Contact Me</UserProfileButtonContactMe>
          <UserProfileButtonCustomOrder>Custom Order</UserProfileButtonCustomOrder>
        </UserProfileButtonContainer>
        <SeparationLine/>
        <ProfileStats/>
      </UserProfileContainer>
    )
  }



}
