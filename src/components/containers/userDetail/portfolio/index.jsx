

import React, { Component } from 'react'

import {
  PortfolioItemContainer,
  PortfolioImage,
  PortfolioItem,
  PortfolioTitle
 } from './styles'

import {
  Title,
  HorizontalContentContainer,
  VerticalContentContainer
} from '../../common/styles'

const Portfolio = (props) => {

  const value = props.value
  const logo = value.logo
  const title = value.title

  return (
    <PortfolioItem>
      <PortfolioImage src={logo}/>
      <PortfolioTitle>{title}</PortfolioTitle>
    </PortfolioItem>
 )
}

const PortfolioView =  (props) => {

  const name = props.name

  return (
    <VerticalContentContainer>
      <Title>{name} Portfolio</Title>
      <PortfolioItemContainer>
        {props.items.map(portfolio=>
          <Portfolio key={portfolio.id} name={name} value={portfolio}/>)
        }
      </PortfolioItemContainer>
    </VerticalContentContainer>
  )

}

export default PortfolioView
