
import React, { Component } from 'react'
import { FlexBoxColumn,Title, Text, Gap } from '../../common/styles'

const Certificate = (props) => {
  return (
    <FlexBoxColumn>
      <Text weight={'bold'} fontSize={'0.8em'}>{props.title}</Text>
      <Text fontSize={'0.8em'} weight={'light'} light>{props.institute} {props.date}</Text>
    </FlexBoxColumn>
 )
}

const CertificateView =  (props) => {

  return (
    <FlexBoxColumn>
      <Title>Certification</Title>
      {props.items.map(cert=><Certificate title={cert.title} date={cert.date} institute={cert.institute}/>)}
    </FlexBoxColumn>
  )

}

export default CertificateView
