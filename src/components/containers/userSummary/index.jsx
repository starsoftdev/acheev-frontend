
import React, { Component } from 'react'

import { UserSummaryContentsContainer } from './styles'
import { SeparationLine } from '../../utils'
import Description from './description/index.jsx'
import LanguageView from './language/index.jsx'
import SkillView from './skill/index.jsx'
import OrganizationView from './organization/index.jsx'
import SocialMediaView from './socialMedia/index.jsx'
import ProjectView from './project/index.jsx'
import CertificateView from './certificate/index.jsx'

export default class UserSummary extends Component {


  render() {

    const description = this.props.user.description
    const languages = this.props.user.languages
    const skills = this.props.user.skills
    const organizations = this.props.user.organizations
    const socialMedias = this.props.user.socialMedias
    const projects = this.props.user.projects
    const certificates = this.props.user.certificates

    return (
      <UserSummaryContentsContainer>
        <Description item={description}/>
        <SeparationLine/>
        <LanguageView items={languages}/>
        <SeparationLine/>
        <SkillView items={skills}/>
        <SeparationLine/>
        <OrganizationView items={organizations}/>
        <SeparationLine/>
        <SocialMediaView items={socialMedias}/>
        <SeparationLine/>
        <ProjectView items={projects}/>
        <SeparationLine/>
        <CertificateView items={certificates}/>
      </UserSummaryContentsContainer>


)



  }

}
