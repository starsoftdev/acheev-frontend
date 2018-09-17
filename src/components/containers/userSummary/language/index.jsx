import React, { Component } from 'react'
import { FlexBoxColumn, Title, Text } from '../../common/styles'


class Language extends Component {

  render() {

    return (
      <div>
        <Text>{this.props.name}</Text>
        <Text> - </Text>
        <Text light>{this.props.level}</Text>
      </div>
    )

  }

}



export default class LanguageView extends Component {

  render(){

    return (
      <FlexBoxColumn>
        <Title>Languages</Title>
        {this.props.items.map(lan=>(<Language name={lan.name} level={lan.level}/>))}
      </FlexBoxColumn>
    )
  }
}
