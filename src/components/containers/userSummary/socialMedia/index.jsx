import React, { Component } from 'react'
import { FlexBoxColumn, FlexBoxRow, Title, CircularButton } from '../../common/styles'


const SocialMedia = (props) => {
  return (
    <CircularButton/>
  )
}


const SocialMediaView =  (props) => {

  return (
    <FlexBoxColumn>
      <Title>Social Presence</Title>
      <FlexBoxRow justifyContent={'flex-start'}>
        {props.items.map(socialMedia=><SocialMedia name={socialMedia}/>)}
      </FlexBoxRow>
    </FlexBoxColumn>
  )

}

export default SocialMediaView
