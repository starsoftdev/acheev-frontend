import React from 'react'

import { stars } from '../../../consts/functions'

import './UnownedCourseTileWrapperStyle.css';

// TODO: Convert styling from css to styled-components

export const UnownedCourseTileWrapper = (props) => {
  const numOfStars = props.courseStars

  return (
      <div className="home-popular-categories-grid-course">
        <img src={props.img} className="home-popular-categories-grid-course-img" />
        <div className="home-popular-categories-grid-course-belowimg">
          <div className="title-and-author">
            <h5 className="home-popular-categories-grid-course-header">{props.title}</h5>
            <span className="home-popular-categories-grid-course-author">{props.author}</span>
          </div>
          <hr className="home-popular-categories-grid-course-separator" />
          <div className="home-popular-categories-grid-course-stats">
            <div className="home-popular-categories-grid-course-stats-top">
              {stars(numOfStars)}
              <span className="home-popular-categories-grid-course-price">{props.price}</span>
            </div>
            <div className="home-popular-categories-grid-course-stats-bottom">
            </div>
          </div>
        </div>
      </div>
  )
}