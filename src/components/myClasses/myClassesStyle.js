import { React } from 'react';
import styled from 'styled-components';

export const TopBanner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-image: linear-gradient(97deg, #2da2f2, #006494);
  align-items: center;
  height: 12.5em;
`;

export const TabHolder = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 30%;
  margin-top: auto;
`;

export const CourseHolder = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  background-color: #f8f8fb;
  padding-top: 2em;
  padding-bottom: 2em;
  padding-left: 5em;
  padding-right: 5em;
`;

export const CourseTile = styled.div`
  width: 370px;
  height: 420px;
  border-radius: 10px;
  box-shadow: 7px 3px 17px 0 rgba(0, 0, 0, 0.04);
  background-color: #ffffff;
  border: solid 1px #eaeaea;
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

export const BannerHeader = styled.h1`
  color: white;
  margin-top: auto;
`;

export const TabItem = styled.span`
  color: rgba(255, 255, 255, 0.65);
  height: 1em;
`;

