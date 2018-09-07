import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Header from '../header'
import Footer from '../footer'
import { Button } from 'reactstrap';

import { CourseTileWrapper } from '../CourseTile/CourseTileWrapper'

import {
  TopBanner, BannerHeader,
  TabHolder, TabItem,
  CourseHolder, AddNewCourseTile,
  AddNewCourseTileCircle, AddNewCourseTilePlus,
  AddNewCourseTileText,
} from './myClassesStyle';

class MyClasses extends Component {
  constructor(props) {
    super(props)

    this.state = {
    }
  }

  renderCourses = () => {
    return (
      <CourseTileWrapper
        title={'Learn How To Properly Optimize Your Website For Search Engines'}
        author={'Thomas Cobb'}
        progressPercentage={10}
        courseStars={4}
      />
    )
  }

  render() {
    return (
      <div>
        <Header />
        <TopBanner >
          <BannerHeader>My Classes</BannerHeader>
          <TabHolder>
            <TabItem>All Courses</TabItem>
            <TabItem>Collections</TabItem>
            <TabItem>Wishlist</TabItem>
            <TabItem>Archived</TabItem>
          </TabHolder>
        </TopBanner>        
        <CourseHolder>
          {this.renderCourses()}
          <AddNewCourseTile>
            <AddNewCourseTileCircle>
              <AddNewCourseTilePlus>
                <span className="fa fa-plus fa-lg"></span>
              </AddNewCourseTilePlus>
            </AddNewCourseTileCircle>
            <AddNewCourseTileText>
              Add New Course
            </AddNewCourseTileText>
          </AddNewCourseTile>
        </CourseHolder>
        <Footer />
      </div>
    )
  }
}

export default MyClasses