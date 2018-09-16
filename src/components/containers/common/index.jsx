
import React, { Component } from 'react'
import Rating from 'react-rating'

export class Rater extends Component {

  constructor(props){
    super(props)

  }

  render() {
    const number = this.props.number
    const initialRating = this.props.initialRating
    const readOnly = this.props.readOnly
    return (<Rating stop={number || 5} initialRating={ initialRating || 0 } readonly={readOnly || false } />)
  }
}
