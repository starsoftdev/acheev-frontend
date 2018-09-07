import React from 'react'

import { stars } from '../../../consts/functions'
import { Line } from 'rc-progress';

import {
  TopBanner, BannerHeader,
  TabHolder, TabItem,
  CourseHolder, CourseTile,
  CourseTileImg, CourseTileTitle,
  CourseTileBelowImg, CourseTileAuthor,
  CourseTileRatingAndProgressContainer, CourseTileProgress,
} from './CourseTileWrapperStyle';

const heroImg = require('../../../assets/hero-image.png')

export const CourseTileWrapper = (props) => {
  const numOfStars = props.courseStars

  return (
    <CourseTile>
    <CourseTileImg backgroundImg={heroImg} />
    <CourseTileBelowImg>
      <CourseTileTitle>{props.title}</CourseTileTitle>
      <CourseTileAuthor>{props.author}</CourseTileAuthor>
      <Line percent={props.progressPercentage} strokeWidth="6" trailWidth="6" strokeColor="#2da2f2" style={{ paddingTop: "20px", paddingBottom: "20px" }}/>
      <CourseTileRatingAndProgressContainer>
        {stars(numOfStars)}
        <CourseTileProgress>{props.progressPercentage}% Complete</CourseTileProgress>
      </CourseTileRatingAndProgressContainer>
    </CourseTileBelowImg>
  </CourseTile>
  )
}