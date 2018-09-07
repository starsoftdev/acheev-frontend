import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Header from '../header'
import Footer from '../footer'
import { Button } from 'reactstrap';

import {
  TopBanner, BannerHeader,
  TabHolder, TabItem,
  CourseHolder, CourseTile,
  CourseTileImg, CourseTileTitle,
  CourseTileBelowImg, CourseTileAuthor,
} from './myClassesStyle';

const heroImg = require('../../assets/hero-image.png')

class MyClasses extends Component {
  constructor(props) {
    super(props)

    this.state = {

    }
  }

  renderCourses = () => {
    return (
      <CourseTile>
        <CourseTileImg backgroundImg={heroImg} />
        <CourseTileBelowImg>
          <CourseTileTitle>Learn How To Properly Optimize Your Website For Search Engines</CourseTileTitle>
          <CourseTileAuthor>Thomas Cobb</CourseTileAuthor>
        </CourseTileBelowImg>
      </CourseTile>
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
        </CourseHolder>
        <Footer />
      </div>
    )
  }
}

export default MyClasses