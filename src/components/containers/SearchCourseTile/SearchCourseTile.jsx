import React from 'react'

import { Icon } from 'semantic-ui-react'

import {
  Tile, Image,
  AuthorAndPicRow, Author,
  AuthorPic, Title,
  StarRow, Rating,
  Divider, BottomRow,
  BottomRowLeft, Price
} from './SearchCourseTileStyle'

export const SearchCourseTile = (props) => {

  return (
    <Tile>
      <Image Img={props.img} />
      <AuthorAndPicRow>
        <AuthorPic authorImg={props.authorImg} />
        <Author>{props.author}</Author>
      </AuthorAndPicRow>
      <Title>{props.title}</Title>
      <StarRow>
        <Icon name="star" style={{ color: "#ffd048", fontSize: "20px"}}/>
        <Rating>{props.rating}</Rating>
      </StarRow>
      <Divider />
      <BottomRow>
        <BottomRowLeft>
          <Icon name="heart" style={{ marginRight: "15px", color: "#c3c3c3", fontSize: "20px" }} />
          <Icon name="list" style={{ color: "#c3c3c3", fontSize: "20px" }}/>
        </BottomRowLeft>
        <Price>${props.price}</Price>
      </BottomRow>
    </Tile>
  )
}