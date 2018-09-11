import React from 'react'

import Header from '../../containers/header/header'
import Footer from '../../containers/footer/footer'
import { InstructorProfileTileWrapper } from '../../containers/InstructorProfileTileWrapper/InstructorProfileTileWrapper'

import {
  Banner, StudentsWatching,
  Title, AttributesRow,
  Attribute, CoursePlayerAndPlaylist,
  CoursePlayer, Body,
  TabsBelowVideo, ProjectTabs,
  ProjectTabItem, CourseModifierTabContainer,
  CourseModifierTabs
} from './DetailedCourseStyle';

const heroImg = require('../../../assets/hero-image.png')

class DetailedCourse extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      activeTab: 'about'
    }
  }

  render() {
    return (
      <div>
        <Header />
          <Banner>
            <StudentsWatching>
              <span style={{ color: "#ffffff" }}>"Amount from props"</span> students are watching this class
            </StudentsWatching>
            <Title>
              "Name from props" on "Title of course from Props"
            </Title>
            <AttributesRow>
              <Attribute>
                Last Updated "Props"
              </Attribute>
              <Attribute>
                Duration
              </Attribute>
              <Attribute>
                Num of Lectures
              </Attribute>
              <Attribute>
                Difficulty
              </Attribute>
            </AttributesRow>
          </Banner>
          <Body>
            <CoursePlayerAndPlaylist>
              <CoursePlayer img={heroImg} />

            </CoursePlayerAndPlaylist>
            <TabsBelowVideo>
              <ProjectTabs>
                <ProjectTabItem
                  style={this.state.activeTab === "about" ? {borderBottom: "5px solid #2da2f2"} : null}
                  onClick={() => this.setState({ activeTab: 'about' })}
                >
                  About
                </ProjectTabItem>
                <ProjectTabItem
                  style={this.state.activeTab === "community" ? {borderBottom: "5px solid #2da2f2"} : null}
                  onClick={() => this.setState({ activeTab: 'community' })}
                >
                  Community
                </ProjectTabItem>
                <ProjectTabItem
                  style={this.state.activeTab === "class" ? {borderBottom: "5px solid #2da2f2"} : null}
                  onClick={() => this.setState({ activeTab: 'class' })}
                >
                  Class Project
                </ProjectTabItem>
                <ProjectTabItem
                  style={this.state.activeTab === "all" ? {borderBottom: "5px solid #2da2f2"} : null}
                  onClick={() => this.setState({ activeTab: 'all' })}
                >
                  All Project
                </ProjectTabItem>
              </ProjectTabs>
              <div style={{ display: "flex" }}>
                <CourseModifierTabContainer>
                  <CourseModifierTabs>
                    Save
                  </CourseModifierTabs>
                </CourseModifierTabContainer>
                <CourseModifierTabContainer>
                  <CourseModifierTabs>
                    Add to Calendar
                  </CourseModifierTabs>
                </CourseModifierTabContainer>
              </div>
            </TabsBelowVideo>
          </Body>
        <Footer />
      </div>
    )
  }
}

export default DetailedCourse