import React, { Component } from 'react'

import { UserDetailContentsContainer } from './styles'
import ServiceView from './service/index.jsx'
import PortfolioView from './portfolio/index.jsx'
import ReviewView from './review/index.jsx'
import { Gap } from '../common/styles'
export default class UserDetail extends Component {

  render() {

    return (
      <UserDetailContentsContainer>

        <ServiceView name={this.props.user.name} items={this.props.user.services}/>
        <Gap/>
        <PortfolioView name={this.props.user.name} items={this.props.user.portfolios}/>
        <Gap/>
        <ReviewView name={this.props.user.name}
          rating={this.props.user.rating}
          items={this.props.user.reviews}/>

      </UserDetailContentsContainer>


    )

  }

}
