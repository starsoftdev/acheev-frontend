

import React, { Component } from 'react'

import {
  ServiceContentContainer,
  ServiceDetailContainer,
  ServiceStatsContainer,
  ServiceRatingContainer,
  ServiceStartPriceContainer,
  ServiceImage,
 } from './styles'

import {
  SeparationLine,
  Title,
  Text,
  HorizontalContentContainer,
  VerticalContentContainer
} from '../../common/styles'

const Service = (props) => {

  const image = props.service.image
  const title = props.service.title
  const rating = props.service.rating
  const price = props.service.startingPrice
  const currency = props.service.currency
  const name = props.name


  return (
    <ServiceContentContainer>

      <ServiceImage src={image}/>

      <ServiceDetailContainer>
        <Title>{title}</Title>
        <div><Text>{name}</Text></div>
        <SeparationLine/>
        <ServiceStatsContainer>
          <ServiceRatingContainer>
            <Text>{rating}</Text>
          </ServiceRatingContainer>
          <ServiceStartPriceContainer>
            <Text>STARTING AT</Text>
            <Text>{currency}{price}</Text>
          </ServiceStartPriceContainer>
        </ServiceStatsContainer>
      </ServiceDetailContainer>
    </ServiceContentContainer>
 )
}

const ServiceView =  (props) => {

  const name = props.name

  return (
    <VerticalContentContainer>
      <Title>{name} Services</Title>
      <HorizontalContentContainer>
        {props.items.map(
          service=><Service key={service.id} name={name} service={service}
          />)}
      </HorizontalContentContainer>
    </VerticalContentContainer>
  )

}

export default ServiceView
