
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
} from './styles'

import ProfileStats from './stats/index.jsx'
import { Rater } from '../common/index.jsx'
import {
  SeparationLine
} from '../common/styles'

export default class UserProfile extends Component {

  constructor(props){
    super(props)

  }

  render() {

    const stats = this.props.user.stats
    const address = this.props.user.address

    return (
      <UserProfileContainer>
        <UserProfilePicture src={this.props.user.profilePictureUrl}/>
        <UserProfileName>{this.props.user.firstName} {this.props.user.lastName}</UserProfileName>
        <UserProfileSummary>{this.props.user.summary}</UserProfileSummary>
        <UserProfileReviewContainer/>
        <Rater initialRating={this.props.user.rating.overAll} readOnly={true}/>
        <UserProfileButtonContainer>
          <UserProfileButtonContactMe>Contact Me</UserProfileButtonContactMe>
          <UserProfileButtonCustomOrder>Custom Order</UserProfileButtonCustomOrder>
        </UserProfileButtonContainer>
        <SeparationLine/>
        <ProfileStats stats={stats} address={address}/>
      </UserProfileContainer>
    )
  }



}
