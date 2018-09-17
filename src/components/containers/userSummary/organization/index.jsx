
import React, { Component } from 'react'
import { FlexBoxRow, FlexBoxColumn, Title, CircularButton } from '../../common/styles'


const Organization = (props) => {
  return (
    <div>
      <CircularButton/>
    </div>
 )
}


const OrganizationView =  (props) => {

  return (
    <FlexBoxColumn>
      <Title>Professional Presence</Title>
      <FlexBoxRow alignItems={'center'}>
        {props.items.map(organization=><Organization name={organization}/>)}
      </FlexBoxRow>
    </FlexBoxColumn>
  )

}

export default OrganizationView
