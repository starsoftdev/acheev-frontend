

import React, { Component } from 'react'
import { Rater } from '../../common/index.jsx'
import {
  ServiceCard,
  ServiceDetail,
  ServiceStats,
  ServiceRating,
  ServiceStartPrice,
  ServiceImage,
  ServiceCardRow
 } from './styles'

import {
  SeparationLine,
  Title,
  Text,
  FlexBoxRow,
  FlexBoxColumn
} from '../../common/styles'

const Service = (props) => {

  const image = props.service.image
  const title = props.service.title
  const rating = props.service.rating
  const price = props.service.startingPrice
  const currency = props.service.currency
  const name = props.name


  return (
    <ServiceCard>
      <ServiceImage src={image}/>
      <ServiceDetail>
        <Title>{title}</Title>
        <div><Text>{name}</Text></div>
        <SeparationLine/>
        <ServiceStats>
          <ServiceRating>
            <Rater readOnly={true} number={1} initialRating={1}/>
            <Text>{rating}</Text>
          </ServiceRating>
          <ServiceStartPrice>
            <Text>STARTING AT</Text>
            <Text>{currency}{price}</Text>
          </ServiceStartPrice>
        </ServiceStats>
      </ServiceDetail>
    </ServiceCard>
 )
}

const ServiceView =  (props) => {

  const name = props.name

  return (
    <FlexBoxColumn>
      <Title>{name} Services</Title>
      <ServiceCardRow>
        {props.items.map(
          service=><Service key={service.id} name={name} service={service}
          />)}
      </ServiceCardRow>
    </FlexBoxColumn>
  )

}

export default ServiceView
