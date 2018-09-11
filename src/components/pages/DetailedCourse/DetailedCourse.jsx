import React from 'react'

import Header from '../../containers/header/header'
import Footer from '../../containers/footer/footer'
import { InstructorProfileTileWrapper } from '../../containers/InstructorProfileTileWrapper/InstructorProfileTileWrapper'

import {
  Banner, StudentsWatching,
  Title, AttributesRow,
  Attribute, CoursePlayerAndPlaylist,
  CoursePlayer, Body
} from './DetailedCourseStyle';

const heroImg = require('../../../assets/hero-image.png')

class DetailedCourse extends React.Component {
  constructor(props) {
    super(props)

    this.state = {

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
          </Body>
        <Footer />
      </div>
    )
  }
}

export default DetailedCourse