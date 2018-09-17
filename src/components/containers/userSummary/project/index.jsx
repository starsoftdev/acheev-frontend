
import React, { Component } from 'react'
import { FlexBoxRow, FlexBoxColumn, Title, Text } from '../../common/styles'

const Project = (props) => {
  return (
    <FlexBoxColumn>
      <Text fontSize={"0.8em"} weight={'bold'}>{props.client}</Text>
      <Text fontSize={"0.8em"} weight={'light'} light>{props.role}</Text>
    </FlexBoxColumn>
 )
}

const ProjectView =  (props) => {

  return (
    <FlexBoxRow>
      <Title>Notable Clients & Projects</Title>
      {props.items.map(project=><Project client={project.client} role={project.role}/>)}
    </FlexBoxRow>
  )

}

export default ProjectView
