
import React, { Component } from 'react'
import { ContentContainer, ColumnItemContentContainer, Title, Text } from '../common/styles'

const Certificate = (props) => {
  return (
    <ColumnItemContentContainer style={{justifyContent:'flex-start',alignItems:'flex-start'}}>
      <Title fontSize={"14px"}>{props.title}</Title>
      <Text>{props.institute} {props.date}</Text>
    </ColumnItemContentContainer>
 )
}

const CertificateView =  (props) => {

  return (
    <ContentContainer>
      <Title>Certification</Title>
      {props.items.map(cert=><Certificate title={cert.title} date={cert.date} institute={cert.institute}/>)}
    </ContentContainer>
  )

}

export default CertificateView
