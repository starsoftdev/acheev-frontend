
import React, { Component } from 'react'
import { ContentContainer, Title, Text, RoundContainer } from '../common/styles'

const Skill = (props) => {
  return (
     <RoundContainer>
       <Text>{props.name}</Text>
     </RoundContainer>
 )

}

const SkillView =  (props) => {

  return (
    <ContentContainer>
      <Title>Skills</Title>
      <ContentContainer style={{flexDirection:'row', justifyContent:'flex-start',alignItems:'center'}}>
        {props.items.map(skill=><Skill name={skill}/>)}
      </ContentContainer>
    </ContentContainer>
  )

}


export default SkillView
