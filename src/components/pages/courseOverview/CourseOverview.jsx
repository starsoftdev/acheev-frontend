import React from 'react'

import Header from '../../containers/header/header'
import Footer from '../../containers/footer/footer'

import {
  TopBanner, BannerHeader,
  CourseDiv, BodyDiv,
  CourseTitle
} from './CourseOverviewStyle';

class CourseOverview extends React.Component {
  constructor(props) {
    super(props)

    this.state = {

    }
  }

  render() {
    return (
      <div>
        <Header />
          <TopBanner>
            <BannerHeader>
              Category From Props
            </BannerHeader>
            <CourseDiv>
              <CourseTitle>
                'Author Name' on 'Title Of Course'
              </CourseTitle>
            </CourseDiv>
          </TopBanner>
          <BodyDiv>

          </BodyDiv>
        <Footer />
      </div>
    )
  }
}

export default CourseOverview