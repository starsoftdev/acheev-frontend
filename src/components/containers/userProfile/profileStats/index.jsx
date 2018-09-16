
import React, { Component } from 'react';
import {
    ProfileStatsContainer,
    ProfileStatsLineContainer,
    ProfileStatsIcon,
    ProfileStatsText,
    ProfileStatsValue
} from './styles'

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

    return (
        <ProfileStatsContainer>
          <ProfileStatsLine icon={LocationIcon} text={'From'} value={'Texas'}/>
          <ProfileStatsLine icon={ProfileIcon} text={'Member Since'} value={2018}/>
          <ProfileStatsLine icon={TimeIcon} text={'Avg. Response Time'} value={'1 hour'}/>
          <ProfileStatsLine icon={DeliveryIcon} text={'Recent Delivery'} value={'About 11 hours'}/>
        </ProfileStatsContainer>
    )

  }

}
