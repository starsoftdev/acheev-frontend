import React from 'react'

import {
  PositiveReviewCircle, NegativeReviewCircle,
  ReviewRow, ReviewText,
  ReviewBody, ReviewAuthor
} from './ReviewRowContainerStyle'

export const ReviewRowContainer = (props) => {
  return (
    <ReviewRow>
      {props.bool === "positive" ? <PositiveReviewCircle><span className="fa fa-thumbs-up fa-lg" style={{ marginTop: "15px", color: "white" }}></span></PositiveReviewCircle> : <NegativeReviewCircle><span className="fa fa-thumbs-down fa-lg" style={{ marginTop: "15px", color: "white" }}></span></NegativeReviewCircle>}
      <ReviewText>
        <ReviewBody>
          {props.body}
        </ReviewBody>
        <ReviewAuthor>
          {props.author}
        </ReviewAuthor>
      </ReviewText>
    </ReviewRow>
  )
}
