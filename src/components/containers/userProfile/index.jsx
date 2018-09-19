
import React, { Component } from 'react'
import {
  ProfileContainer,
  ProfilePicture,
  ProfileName,
  ProfileSummary,
  ProfileReviewContainer,
  ProfileButtonContainer,
  ProfileButtonContactMe,
  ProfileButtonCustomOrder
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
      <ProfileContainer>
        <ProfilePicture src={this.props.user.profilePictureUrl}/>
        <ProfileName>{this.props.user.firstName} {this.props.user.lastName}</ProfileName>
        <ProfileSummary>{this.props.user.summary}</ProfileSummary>
        <ProfileReviewContainer/>
          <Rater initialRating={this.props.user.rating.overAll} readOnly={true}/>
        <ProfileButtonContainer>
          <ProfileButtonContactMe>Contact Me</ProfileButtonContactMe>
          <ProfileButtonCustomOrder>Custom Order</ProfileButtonCustomOrder>
        </ProfileButtonContainer>
        <SeparationLine/>
        <ProfileStats stats={stats} address={address}/>
      </ProfileContainer>
    )
  }



}
