import React, { Component } from 'react'
import { ContentContainer, Title, Text } from '../common/styles'


class LanguageItem extends Component {

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



export default class Languages extends Component {

  render(){

    return (
      <ContentContainer>
        <Title>Languages</Title>
        {this.props.languages.map(lan=>(<LanguageItem name={lan.name} level={lan.level}/>))}
      </ContentContainer>
    )
  }
}
