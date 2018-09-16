import React from 'react'

import Header from '../../containers/header/header'
import Footer from '../../containers/footer/footer'
import { UnownedCourseTileWrapper } from '../../containers/UnownedCourseTileWrapper/UnownedCourseTileWrapper'
import { InstructorProfileTileWrapper } from '../../containers/InstructorProfileTileWrapper/InstructorProfileTileWrapper'

import { starsWithNumOfReviews } from '../../../consts/functions'

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
  StyledButtonWrapper, TopicsViewAll,
  TopicRow, TopicTile,
  TopicTileText, CoursesTitle,
  CoursesViewAll, CoursesRow,
  ScaledCourse, InstructorRow,
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

  renderTopCourses = () => {
    // create an array of 3 (0, 1, 2) course objects, map them into CourseTileWrapper
    // when next arrow is clicked, change state to 'secondProgressDot' and reassign course objects (3, 4, 5) to array

    return (
      <CoursesRow>     
        <ScaledCourse>
          <UnownedCourseTileWrapper
            img={heroImg}
            title={"Title from props"}
            author={"Author from props"}
            courseStars={4}
            price={"$45.00"}
            profileImg={heroImg}
            profileImg1={heroImg}
            profileImg2={heroImg}
            profileImg3={heroImg}
            amountOfStudents={"10"}
          />
        </ScaledCourse> 
        <ScaledCourse>
          <UnownedCourseTileWrapper
            img={heroImg}
            title={"Title from props"}
            author={"Author from props"}
            courseStars={3}
            price={"$45.00"}
            profileImg={heroImg}
            profileImg1={heroImg}
            profileImg2={heroImg}
            profileImg3={heroImg}
            amountOfStudents={"100"}
          />
        </ScaledCourse> 
        <ScaledCourse>
          <UnownedCourseTileWrapper
            img={heroImg}
            title={"Title from props"}
            author={"Author from props"}
            courseStars={5}
            price={"$45.00"}
            profileImg={heroImg}
            profileImg1={heroImg}
            profileImg2={heroImg}
            profileImg3={heroImg}
            amountOfStudents={"210"}
          />
        </ScaledCourse>       
      </CoursesRow>      
    )
  }

  renderTrendingCourses = () => {
    // do the same as renderTopCourses

    return (
      <CoursesRow>     
        <ScaledCourse>
          <UnownedCourseTileWrapper
            img={heroImg}
            title={"Title from props"}
            author={"Author from props"}
            courseStars={4}
            price={"$45.00"}
            profileImg={heroImg}
            profileImg1={heroImg}
            profileImg2={heroImg}
            profileImg3={heroImg}
            amountOfStudents={"1000000"}
          />
        </ScaledCourse> 
        <ScaledCourse>
          <UnownedCourseTileWrapper
            img={heroImg}
            title={"Title from props"}
            author={"Author from props"}
            courseStars={4}
            price={"$45.00"}
            profileImg={heroImg}
            profileImg1={heroImg}
            profileImg2={heroImg}
            profileImg3={heroImg}
            amountOfStudents={"10"}
          />
        </ScaledCourse> 
        <ScaledCourse>
          <UnownedCourseTileWrapper
            img={heroImg}
            title={"Title from props"}
            author={"Author from props"}
            courseStars={4}
            price={"$45.00"}
            profileImg={heroImg}
            profileImg1={heroImg}
            profileImg2={heroImg}
            profileImg3={heroImg}
            amountOfStudents={"0"}
          />
        </ScaledCourse>       
      </CoursesRow>      
    )
  }

  renderInstructors = () => {
    // do the same as renderTopCourses
    return (
      <InstructorRow>
        <ScaledCourse>
          <InstructorProfileTileWrapper
            img={heroImg}
            name={"John Johnson"}
            specialties={"Specialties, From, Props"}
            numOfStars={4}
            numOfReviews={234}
            numOfStudents={1000}
            numOfCourses={5}
          />
        </ScaledCourse>
        <ScaledCourse>
          <InstructorProfileTileWrapper
            img={heroImg}
            name={"Alex Alexson"}
            specialties={"Specialties, From, Props"}
            numOfStars={1}
            numOfReviews={2344}
            numOfStudents={100000}
            numOfCourses={8}
          />
        </ScaledCourse>
        <ScaledCourse>
          <InstructorProfileTileWrapper
            img={heroImg}
            name={"Paul Paulson"}
            specialties={"Specialties, From, Props"}
            numOfStars={5}
            numOfReviews={234}
            numOfStudents={1000}
            numOfCourses={5}
          />
        </ScaledCourse>
      </InstructorRow>
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
                <TopicsViewAll>
                  View All
                </TopicsViewAll>
              </TitleAndViewAllContainer>
              <TopicRow>
                <TopicTile>
                  <TopicTileText>
                    YouTube Marketing
                  </TopicTileText>
                </TopicTile>
                <TopicTile>
                  <TopicTileText>
                    Business Branding
                  </TopicTileText>
                </TopicTile>
                <TopicTile>
                  <TopicTileText>
                    Marketing Strategy
                  </TopicTileText>
                </TopicTile>
                <TopicTile>
                  <TopicTileText>
                    Personal Branding
                  </TopicTileText>
                </TopicTile>
                <TopicTile>
                  <TopicTileText>
                    Brand Management
                  </TopicTileText>
                </TopicTile>
                <TopicTile>
                  <TopicTileText>
                    PowToon
                  </TopicTileText>
                </TopicTile>
                <TopicTile>
                  <TopicTileText>
                    Blogging
                  </TopicTileText>
                </TopicTile>
                <TopicTile>
                  <TopicTileText>
                    Outsourcing
                  </TopicTileText>
                </TopicTile>
                <TopicTile>
                  <TopicTileText>
                    Storytelling
                  </TopicTileText>
                </TopicTile>
                <TopicTile>
                  <TopicTileText>
                    Fashion
                  </TopicTileText>
                </TopicTile>
                <TopicTile>
                  <TopicTileText>
                    Soical Media
                  </TopicTileText>
                </TopicTile>
                <TopicTile>
                  <TopicTileText>
                    YouTube Marketing
                  </TopicTileText>
                </TopicTile>
              </TopicRow>
            </PopularTopicsSection>
            <TitleAndViewAllContainer>
              <CoursesTitle>
                Popular Courses in "Props"
              </CoursesTitle>
              <CoursesViewAll>
                View All
              </CoursesViewAll>
            </TitleAndViewAllContainer>
            {this.renderTopCourses()}
            <TitleAndViewAllContainer>
              <CoursesTitle>
                Trending in "Props"
              </CoursesTitle>
              <CoursesViewAll>
                View All
              </CoursesViewAll>
            </TitleAndViewAllContainer>
            {this.renderTrendingCourses()}
            <TitleAndViewAllContainer>
              <CoursesTitle>
                Most Popular Instructors in "Props"
              </CoursesTitle>
              <CoursesViewAll>
                View All
              </CoursesViewAll>
            </TitleAndViewAllContainer>
            {this.renderInstructors()}
          </BodyDiv>
        <Footer />
      </div>
    )
  }
}

export default CourseOverview