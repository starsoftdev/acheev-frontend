import React from 'react'

import { stars } from '../../../consts/functions'
import { Line } from 'rc-progress';

import {
  CourseTile, CourseTileImg,
  CourseTileTitle, CourseTileBelowImg,
  CourseTileAuthor, CourseTileRatingAndProgressContainer,
  CourseTileProgress,
} from './MyCourseTileWrapperStyle';

export const MyCourseTileWrapper = (props) => {
  const numOfStars = props.courseStars

  return (
    <CourseTile>
    <CourseTileImg backgroundImg={props.img} />
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