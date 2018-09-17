
import React, { Component } from 'react'

import { UserSummaryContentsContainer } from './styles'
import { SeparationLine } from '../common/styles'
import Description from './description/index.jsx'
import LanguageView from './language/index.jsx'
import SkillView from './skill/index.jsx'
import OrganizationView from './organization/index.jsx'
import SocialMediaView from './socialMedia/index.jsx'
import ProjectView from './project/index.jsx'
import CertificateView from './certificate/index.jsx'
import { Gap } from '../common/styles'
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
        <Gap/>
        <SeparationLine/>
        <Gap/>
        <LanguageView items={languages}/>
        <Gap/>
        <SeparationLine/>
        <Gap/>
        <SkillView items={skills}/>
        <Gap/>
        <SeparationLine/>
        <Gap/>
        <OrganizationView items={organizations}/>
        <Gap/>
        <SeparationLine/>
        <Gap/>
        <SocialMediaView items={socialMedias}/>
        <Gap/>
        <SeparationLine/>
        <Gap/>
        <ProjectView items={projects}/>
        <Gap/>
        <SeparationLine/>
        <Gap/>
        <CertificateView items={certificates}/>
      </UserSummaryContentsContainer>


)



  }

}
