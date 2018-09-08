import React from 'react'

import { Button } from 'semantic-ui-react'

import Header from '../../containers/header/header'
import Footer from '../../containers/footer/footer'

import {
  TopBanner, BannerHeader,
  CourseDiv, BodyDiv,
  CourseTitle, TitleAndStarRow,
  StarContainer, Rating,
  CourseAttributeRow, CourseAttribute,
  CourseImg, PopularTopicsSection,
  TitleAndViewAllContainer, TopicTitle,
  PriceAndButtonRow, PriceContainer,
  BoldPrice, StrikedPrice,
  StyledButtonWrapper
} from './CourseOverviewStyle';

const heroImg = require('../../../assets/hero-image.png')

class CourseOverview extends React.Component {
  constructor(props) {
    super(props)

    this.state = {

    }
  }

  renderPrice = () => {
    // if props indicate a sale on price, return crossed out regular price, bold sale price.
    // else, return regular price in bold

    return (
      <PriceContainer>
        <BoldPrice>
          $PR.OPS
        </BoldPrice>
        <StrikedPrice>
          $$$$$
        </StrikedPrice>
      </PriceContainer>
    )
  }

  render() {
    return (
      <div>
        <Header />
          <TopBanner>
            <BannerHeader>
              CATEGORY FROM PROPS
            </BannerHeader>
            <CourseDiv>
              <TitleAndStarRow>
                <CourseTitle>
                  'Author Name' on 'Title Of Course'
                </CourseTitle>
                <StarContainer>
                  <Rating>Num from props</Rating>
                  <span className="fa fa-star checked fa-lg"></span>
                </StarContainer>
              </TitleAndStarRow>
              <CourseAttributeRow>
                <CourseAttribute>
                  Last Updated from props
                </CourseAttribute>
                <CourseAttribute>
                  Duration from props
                </CourseAttribute>
                <CourseAttribute>
                  Num of Lectures from props
                </CourseAttribute>
                <CourseAttribute>
                  Difficulty level from props
                </CourseAttribute>
              </CourseAttributeRow>
              <CourseImg Img={heroImg} />
              <PriceAndButtonRow>
                {this.renderPrice()}
                <StyledButtonWrapper>
                  Explore Course
                </StyledButtonWrapper>
              </PriceAndButtonRow>
            </CourseDiv>
          </TopBanner>
          <BodyDiv>
            <PopularTopicsSection>
              <TitleAndViewAllContainer>
                <TopicTitle>
                  Popular Topics
                </TopicTitle>
              </TitleAndViewAllContainer>
            </PopularTopicsSection>
          </BodyDiv>
        <Footer />
      </div>
    )
  }
}

export default CourseOverview