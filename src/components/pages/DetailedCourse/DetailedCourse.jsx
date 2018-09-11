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
  CourseModifierTabs, CourseDetails,
  SectionTitle, SectionBody,
  CourseDetailsIntroHowItWorks, ReviewHeader,
  StudentReviews
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
            <CourseDetails>
              <CourseDetailsIntroHowItWorks>
                <SectionTitle>
                  Introduction
                </SectionTitle>
                <SectionBody>
                  At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.
                </SectionBody>
                <SectionTitle>
                  How it Works?
                </SectionTitle>
                <SectionBody>
                  At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.
                </SectionBody>
                <ReviewHeader>
                  <StudentReviews>
                    Props of Props students recommend
                  </StudentReviews>
                </ReviewHeader>
              </CourseDetailsIntroHowItWorks>
            </CourseDetails>
          </Body>
        <Footer />
      </div>
    )
  }
}

export default DetailedCourse