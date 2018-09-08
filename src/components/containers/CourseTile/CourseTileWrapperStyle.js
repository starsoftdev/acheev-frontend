import { React } from 'react';
import styled from 'styled-components';

export const CourseTile = styled.div`
  width: 370px;
  height: 420px;
  border-radius: 10px;
  box-shadow: 7px 3px 17px 0 rgba(0, 0, 0, 0.04);
  background-color: #ffffff;
  border: solid 1px #eaeaea;
  margin-right: 90px;
`;

export const CourseTileImg = styled.div`
  width: 370px;
  height: 200px;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  background-image: url('${props => props.backgroundImg}')
`;

export const CourseTileBelowImg = styled.div`
  padding-left: 30px;
  padding-right: 30px;
  padding-top: 30px;
  display: flex;
  flex-direction: column;
`;

export const CourseTileRatingAndProgressContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const CourseTileTitle = styled.span`
  width: 310px;
  height: 48px;
  font-size: 18px;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #14293d;
`;

export const CourseTileAuthor = styled.span`
  height: 20px;
  font-size: 14px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.43;
  letter-spacing: normal;
  color: rgba(20, 41, 61, 0.65);
`;

export const CourseTileProgress = styled.span`
  width: 120px;
  height: 19px;
  opacity: 0.5;
  font-size: 14px;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: right;
  color: #14293d;
`;