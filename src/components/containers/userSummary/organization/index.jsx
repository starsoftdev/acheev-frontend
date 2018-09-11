
import React, { Component } from 'react'
import { ContentContainer, Title, CircularButton } from '../common/styles'


const Organization = (props) => {
  return (
    <div>
      <CircularButton/>
    </div>
 )
}


const OrganizationView =  (props) => {

  return (
    <ContentContainer>
      <Title>Professional Presence</Title>
      <ContentContainer style={{flexDirection:'row', justifyContent:'flex-start',alignItems:'center'}}>
        {props.items.map(organization=><Organization name={organization}/>)}
      </ContentContainer>
    </ContentContainer>
  )

}

export default OrganizationView
