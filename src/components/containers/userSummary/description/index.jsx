
import React, { Component } from 'react'
import { FlexBoxColumn, Title, Text } from '../../common/styles'
export default class UserDescription extends Component {

  render(){

    return (
      <FlexBoxColumn>
        <Title>Description</Title>
        <Text fontSize={'0.8em'} weight={'light'} light>{this.props.item}</Text>
      </FlexBoxColumn>
    )
  }
}
