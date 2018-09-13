import React, { Component } from 'react'

import { UserDetailContentsContainer } from './styles'
import ServiceView from './service/index.jsx'
import PortfolioView from './portfolio/index.jsx'

export default class UserDetail extends Component {

  render() {

    return (
      <UserDetailContentsContainer>

        <ServiceView name={this.props.user.name} items={this.props.user.services}/>
        <PortfolioView name={this.props.user.name} items={this.props.user.portfolios}/>

      </UserDetailContentsContainer>


    )

  }

}
