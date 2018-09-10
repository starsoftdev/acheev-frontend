
import React, { Component } from 'react'

import { UserSummaryContentsContainer } from './styles'
import { SeparationLine } from '../../utils'
import Description from './description/index.jsx'
import Languages from './languages/index.jsx'
export default class UserSummary extends Component {


  render() {

    const description = this.props.user.description
    const languages = this.props.user.languages

    return (
      <UserSummaryContentsContainer>
        <Description description={description}/>
        <SeparationLine/>
        <Languages languages={languages}/>
      </UserSummaryContentsContainer>


)



  }

}
