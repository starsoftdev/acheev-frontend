import React, { Component } from 'react'
import { ContentContainer, Title, CircularButton } from '../common/styles'


const SocialMedia = (props) => {
  return (
    <CircularButton/>
  )
}


const SocialMediaView =  (props) => {

  return (
    <ContentContainer>
      <Title>Social Presence</Title>
      <ContentContainer style={{flexDirection:'row', justifyContent:'flex-start',alignItems:'center'}}>
        {props.items.map(socialMedia=><SocialMedia name={socialMedia}/>)}
      </ContentContainer>
    </ContentContainer>
  )

}

export default SocialMediaView
