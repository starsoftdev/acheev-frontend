
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
  UserReviewRatingBox,
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

 import { Rater } from '../../common/index.jsx'

const ReviewHeader = (props) => {

  return (
    <ReviewHeadLineBox>
      <ReviewTitle>
        Reviews
      </ReviewTitle>
      <RatingBox>
        <Rater initialRating={props.rating.overAll} readOnly={true}/>
        <Text align={'center'}>{props.rating.overAll}({props.rating.quantity})</Text>
      </RatingBox>
      <SearchBox>
      </SearchBox>
    </ReviewHeadLineBox>
  )
}

const RatingDetail = (props) => {


  const commRating = props.rating.communication
  const serviceRating = props.rating.serviceIntegrity
  const recommandRating = props.rating.wouldRecommand

  return (

    <FlexBoxRow>
      <RatingDetailBox>
        <Rater initialRating={commRating} readOnly={true}/>
        <Text align={'center'} >Seller Communication</Text>
      </RatingDetailBox>
      <RatingDetailBox>
        <Rater initialRating={serviceRating} readOnly={true}/>
        <Text align={'center'} >Service as Described</Text>
      </RatingDetailBox>
      <RatingDetailBox>
        <Rater initialRating={recommandRating} readOnly={true}/>
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
  const rating = review.rating

  return (

    <UserReviewBox>
      <UserImage src={image}/>
      <UserReviewContentBox>
        <UserReviewTitleBox>
          <Text weight={'bold'}>{name}</Text>
          <Rater initialRating={rating.overAll} readOnly={true}/>
          <Text weight={'light'}>{postDate}</Text>
        </UserReviewTitleBox>
        <Paragraph>{contents}</Paragraph>
      </UserReviewContentBox>
    </UserReviewBox>

  )


}

const ReviewView =  (props) => {
  const name = props.name
  const rating = props.rating
  return (
    <FlexBoxColumn>
      <ReviewHeader rating={rating}/>
      <RatingDetail rating={rating}/>
      <FlexBoxColumn>
          {props.items.map(review=><UserReview review={review}/>)}
          <Gap/>
          <LoadButton>Show more</LoadButton>
      </FlexBoxColumn>
    </FlexBoxColumn>
  )
}

export default ReviewView
