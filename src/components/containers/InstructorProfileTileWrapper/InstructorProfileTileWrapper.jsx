import React from 'react'

import {
  InstructorTile, InstructorImg,
  InstructorName, InstructorSpecialties,
  StudentsAndCoursesRow, StudentContainer,
  StudentNumber, StudentNumberLabel,
  NumberOfCourses, NumberOfCoursesLabel
} from './InstructorProfileTileWrapperStyle';

import { starsWithNumOfReviews } from '../../../consts/functions'

export const InstructorProfileTileWrapper = (props) => {
  const numOfStars = props.numOfStars

  return (
    <InstructorTile>
      <InstructorImg backgroundImg={props.img} />
      <InstructorName>
        {props.name}
      </InstructorName>
      <InstructorSpecialties>
        {props.specialties}
      </InstructorSpecialties>
      {starsWithNumOfReviews(numOfStars, props.numOfReviews)}
      <StudentsAndCoursesRow>
        <StudentContainer>
          <StudentNumber>
            {props.numOfStudents}
          </StudentNumber>
          <StudentNumberLabel>
            Students
          </StudentNumberLabel>
        </StudentContainer>
        <StudentContainer>
          <NumberOfCourses>
            {props.numOfCourses}
          </NumberOfCourses>
          <NumberOfCoursesLabel>
            Courses
          </NumberOfCoursesLabel>
        </StudentContainer>
      </StudentsAndCoursesRow>
    </InstructorTile>
  )
}