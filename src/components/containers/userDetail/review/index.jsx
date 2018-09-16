
import React, { Component } from 'react'

import {
  ReviewHeadLineBox,
  ReviewTitle,
  RatingBox,
  SearchBox,
  RatingDetailBox,
  UserReviewBox,
  UserReviewContentBox,
  UserReviewTitleBox,
  UserImage,
  LoadButton
 } from './styles'

 import {
   FlexBoxRow,
   FlexBoxColumn,
   Paragraph,
   Text,
   Gap,
 } from '../../common/styles'

const ReviewHeader = (props) => {

  return (
    <ReviewHeadLineBox>
      <ReviewTitle>
        Reviews
      </ReviewTitle>
      <RatingBox>
      </RatingBox>
      <SearchBox>
      </SearchBox>
    </ReviewHeadLineBox>
  )
}

const RatingDetail = (props) => {

  return (

    <FlexBoxRow>
      <RatingDetailBox>
        <Text align={'center'} >Seller Communication</Text>
      </RatingDetailBox>
      <RatingDetailBox>
        <Text align={'center'} >Service as Described</Text>
      </RatingDetailBox>
      <RatingDetailBox>
        <Text align={'center'} >Would Recommend</Text>
      </RatingDetailBox>
    </FlexBoxRow>
  )
}

const UserReview = (props) => {

  const review = props.review
  const image = review.user.avatar
  const name = review.user.name
  const contents = review.contents
  const postDate =  review.postDate

  return (

    <UserReviewBox>
      <UserImage src={image}/>
      <UserReviewContentBox>
        <UserReviewTitleBox>
          <div>
            <Text weight={'bold'}>{name}</Text>
          </div>
          <Text weight={'light'}>{postDate}</Text>
        </UserReviewTitleBox>
        <Paragraph>{contents}</Paragraph>
      </UserReviewContentBox>
    </UserReviewBox>

  )


}

const ReviewView =  (props) => {
  const name = props.name
  return (
    <FlexBoxColumn>
      <ReviewHeader/>
      <RatingDetail/>
      <FlexBoxColumn>
          {props.items.map(review=><UserReview review={review}/>)}
          <Gap/>
          <LoadButton>Show more</LoadButton>
      </FlexBoxColumn>
    </FlexBoxColumn>
  )
}

export default ReviewView
