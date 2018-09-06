import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Header from '../header'
import Footer from '../footer'
import { Button } from 'reactstrap';

import {
  TopBanner, BannerHeader,
  TabHolder, TabItem,
  CourseHolder,
} from './myClassesStyle';

class MyClasses extends Component {
  constructor(props) {
    super(props)

    this.state = {

    }
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
        <CourseHolder>
          
        </CourseHolder>
        </TopBanner>

        <Footer />
      </div>
    )
  }
}

export default MyClasses