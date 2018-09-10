
import React, { Component } from 'react'
import { ContentContainer, Title, Text } from '../common/styles'
export default class UserDescription extends Component {

  render(){

    return (
      <ContentContainer>
        <Title>Description</Title>
        <Text light>{this.props.description}</Text>
      </ContentContainer>
    )
  }
}
