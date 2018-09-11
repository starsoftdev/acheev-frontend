
import React, { Component } from 'react'
import { ContentContainer, ColumnItemContentContainer, Title, Text } from '../common/styles'

const Project = (props) => {
  return (
    <ColumnItemContentContainer style={{justifyContent:'flex-start',alignItems:'flex-start'}}>
      <Title fontSize={"14px"}>{props.client}</Title>
      <Text>{props.role}</Text>
    </ColumnItemContentContainer>
 )
}

const ProjectView =  (props) => {

  return (
    <ContentContainer>
      <Title>Notable Clients & Projects</Title>
      {props.items.map(project=><Project client={project.client} role={project.role}/>)}
    </ContentContainer>
  )

}

export default ProjectView
