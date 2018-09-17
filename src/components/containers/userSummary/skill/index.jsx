
import React, { Component } from 'react'
import { FlexBoxColumn, FlexBoxRow, Title, Text, RoundContainer } from '../../common/styles'

const Skill = (props) => {
  return (
     <RoundContainer>
       <Text>{props.name}</Text>
     </RoundContainer>
 )

}

const SkillView =  (props) => {

  return (
    <FlexBoxColumn>
      <Title>Skills</Title>
      <FlexBoxRow style={{flexDirection:'row', justifyContent:'flex-start',alignItems:'center'}}>
        {props.items.map(skill=><Skill name={skill}/>)}
      </FlexBoxRow>
    </FlexBoxColumn>
  )

}


export default SkillView
