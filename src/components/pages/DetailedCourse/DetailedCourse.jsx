import React from 'react'

import Header from '../../containers/header/header'
import Footer from '../../containers/footer/footer'
import { UnownedCourseTileWrapper } from '../../containers/UnownedCourseTileWrapper/UnownedCourseTileWrapper';
import { InstructorProfileTileWrapper } from '../../containers/InstructorProfileTileWrapper/InstructorProfileTileWrapper'
import { ReviewRowContainer } from '../../containers/ReviewRowContainer/ReviewRowContainer'

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
  StudentReviews, AboutInstructor,
  Separator, InstructorName,
  InstructorDetails, SkillsContainer,
  SkillTile, SkillTileText,
  RelatedClassesContainer, RelatedClassesHeader,
  RelatedClassesTitle, ViewAll,
  CourseHolder
} from './DetailedCourseStyle';

const heroImg = require('../../../assets/hero-image.png')

class DetailedCourse extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      activeTab: 'about'
    }
  }

  renderSkillTiles = () => {
    const exampleArray = [{id: 0, skill: 'Marketing'}, {id: 1, skill: 'Business'}, {id: 2, skill: 'Social Media'}, {id: 3, skill: 'Branding'}, {id: 4, skill: 'Social'}, {id: 5, skill: 'Management'}]

    return exampleArray.map((item, key) => {
      return <SkillTile key={key}><SkillTileText>{item.skill}</SkillTileText></SkillTile>
    })
  }

  renderCourseTiles = () => {
    // create an array of 3 (0, 1, 2) course objects, map them into CourseTileWrapper
    // when next arrow is clicked, change state to 'secondProgressDot' and reassign course objects (3, 4, 5) to array

    return (
      <CourseHolder>
          <UnownedCourseTileWrapper
            img={heroImg}
            title={"Title from props"}
            author={"Author from props"}
            courseStars={4}
            price={"$45.00"}
          />
          <UnownedCourseTileWrapper
            img={heroImg}
            title={"Title from props"}
            author={"Author from props"}
            courseStars={4}
            price={"$45.00"}
          />
          <UnownedCourseTileWrapper
            img={heroImg}
            title={"Title from props"}
            author={"Author from props"}
            courseStars={4}
            price={"$45.00"}
          />
      </CourseHolder>
    )
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
                    <span className="fa fa-bookmark fa-lg"></span><span style={{ paddingLeft: "8px" }}>Save</span>
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
                <ReviewRowContainer
                  bool={'positive'}
                  body={'instantly doable, authentic and filled with information i happened to overlook before.'}
                  author={'Chad Weber'}
                />
                <ReviewRowContainer
                  bool={'negative'}
                  body={'It’s not usefull :('}
                  author={'Bettie Dean'}
                />
              </CourseDetailsIntroHowItWorks>
              <AboutInstructor>
                <InstructorProfileTileWrapper 
                  img={heroImg}
                  name={"John Johnson"}
                  specialties={"Specialties, From, Props"}
                  numOfStars={4}
                  numOfReviews={234}
                  numOfStudents={1000}
                  numOfCourses={5}
                  border={'none'}
                />
                <Separator />
                <InstructorName>
                  From Props
                </InstructorName>
                <InstructorDetails>
                  At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.
                </InstructorDetails>
                <Separator />
                <InstructorName>
                  Skills in This Class
                </InstructorName>
                <SkillsContainer>
                  {this.renderSkillTiles()}
                </SkillsContainer>
              </AboutInstructor>
            </CourseDetails>
            <RelatedClassesContainer>
              <RelatedClassesHeader>
                <RelatedClassesTitle>
                  Related Classes
                </RelatedClassesTitle>
                <ViewAll>
                  View All
                </ViewAll>
              </RelatedClassesHeader>
              {this.renderCourseTiles()}
            </RelatedClassesContainer>
          </Body>
        <Footer />
      </div>
    )
  }
}

export default DetailedCourse