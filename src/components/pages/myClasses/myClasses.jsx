import React, { Component } from 'react';

import Header from '../../containers/header/header'
import Footer from '../../containers/footer/footer'

import { CourseTileWrapper } from '../../containers/CourseTile/CourseTileWrapper'

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
      tab: "all"
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
            <TabItem 
              style={this.state.tab === "all" ? {borderBottom: '5px white solid'} : null}
              onClick={() => this.setState({ tab: 'all' })}
            >All Courses</TabItem>
            <TabItem
              style={this.state.tab === "collections" ? {borderBottom: '5px white solid'} : null}
              onClick={() => this.setState({ tab: 'collections' })}
            >Collections</TabItem>
            <TabItem
              style={this.state.tab === "wishlist" ? {borderBottom: '5px white solid'} : null}
              onClick={() => this.setState({ tab: 'wishlist' })}
            >Wishlist</TabItem>
            <TabItem
              style={this.state.tab === "archived" ? {borderBottom: '5px white solid'} : null}
              onClick={() => this.setState({ tab: 'archived' })}
            >Archived</TabItem>
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