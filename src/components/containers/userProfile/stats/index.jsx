
import React, { Component } from 'react';
import {
    ProfileStatsContainer,
    ProfileStatsLineContainer,
    ProfileStatsIcon,
    ProfileStatsText,
    ProfileStatsValue
} from './styles'

import { Gap } from '../../common/styles'

import LocationIcon from '../../../../assets/location-icon.svg'
import ProfileIcon from '../../../../assets/profile-icon.svg'
import TimeIcon from '../../../../assets/time-icon.svg'
import DeliveryIcon from '../../../../assets/delivery-icon.svg'


class ProfileStatsLine extends Component {

  render() {
    return (
      <ProfileStatsLineContainer>
        <div>
          <ProfileStatsIcon src={this.props.icon}></ProfileStatsIcon>
          <ProfileStatsText>{this.props.text}</ProfileStatsText>
        </div>
        <ProfileStatsValue>{this.props.value}</ProfileStatsValue>
      </ProfileStatsLineContainer>
    )
  }

}

export default class ProfileStats extends Component {

  constructor(props){
    super(props)
  }

  render() {
    const memberSince = this.props.stats.memberSince
    const avgResponseTime = this.props.stats.avgResponseTime
    const recentDelivery = this.props.stats.recentDelivery
    const city = this.props.address.city
    return (
        <ProfileStatsContainer>
          <ProfileStatsLine icon={LocationIcon} text={'From'} value={city}/>
          <ProfileStatsLine icon={ProfileIcon} text={'Member Since'} value={memberSince}/>
          <ProfileStatsLine icon={TimeIcon} text={'Avg. Response Time'} value={avgResponseTime}/>
          <ProfileStatsLine icon={DeliveryIcon} text={'Recent Delivery'} value={recentDelivery}/>
        </ProfileStatsContainer>
    )

  }

}
