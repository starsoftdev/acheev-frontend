import styled from 'styled-components';
import { Button } from 'semantic-ui-react'

export const TopBanner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 350px;
  justify-content: center;
  background-image: linear-gradient(97deg, #2da2f2, #006494);
  align-items: center;
  height: 12.5em;
`;

export const BannerHeader = styled.h1`
  color: white;
  margin-bottom: 30px;
  margin-top: -30px;
`;

export const CourseDiv = styled.div`
  margin-bottom: -500px;
  width: 900px;
  height: 480px;
  border-radius: 5px;
  box-shadow: 7px 3px 17px 0 rgba(0, 0, 0, 0.04);
  background-color: #ffffff;
  border: solid 1px #eaeaea;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  padding-top: 2em;
`;

export const CategoryPicker = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  width: 20%;
`;

export const TitleAndStarRow = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  padding-left: 2em;
  padding-right: 2em;
`;

export const CourseAttributeRow = styled.div`
  display: flex;
  flex-direction: row;
  padding-top: 10px;
  padding-left: 2em;
`;

export const CourseAttribute = styled.span`
  font-size: 10px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.47;
  letter-spacing: normal;
  color: rgba(20, 41, 61, 0.65);
  margin-right: 30px;
`;

export const CourseTitle = styled.span`
  width: 530px;
  height: 32px;
  font-size: 24px;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #14293d;
`;

export const StarContainer = styled.div`
`;

export const Rating = styled.span`
  font-size: 15px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.47;
  letter-spacing: normal;
  text-align: right;
  color: rgba(20, 41, 61, 0.65);
  padding-right: 5px;
`;

export const CourseImg = styled.div`
  margin-top: 10px;
  width: 100%;
  height: 300px;
  background-image: url('${props => props.Img}');
`;

export const PriceAndButtonRow = styled.div`
  display: flex;
  flex-direction: row;
  padding-left: 2em;
  padding-right: 2em;
  padding-top: 1em;
  justify-content: space-between;
`;

export const PriceContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const BoldPrice = styled.span`
  font-size: 34px;
  font-weight: 900;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.39;
  letter-spacing: normal;
  color: #14293d;
  padding-right: 10px;
`;

export const StrikedPrice = styled.span`
  width: 46px;
  height: 19px;
  opacity: 0.5;
  font-size: 14px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #14293d;
  text-decoration: line-through;
  position: relative;
  top: 22px;
`;

export const StyledButtonWrapper = styled(Button)`
  width: 140px;
  height: 50px;
  border-radius: 5px;
  background-color: #2f9ed8;
  border: none;
  color: white;
`;

export const BodyDiv = styled.div`
  background-color: #f8f8fb;
  padding-left: 10.5em;
  padding-right: 10.5em;
`;

export const PopularTopicsSection = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 460px;
`;

export const TitleAndViewAllContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-bottom: 2em;
  padding-top: 3em;
`;

export const TopicTitle = styled.span`
  width: 530px;
  height: 32px;
  font-size: 24px;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #14293d;
`;

export const TopicsViewAll = styled.a`
  width: 53px;
  height: 20px;
  font-size: 14px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.43;
  letter-spacing: normal;
  text-align: right;
  color: #14293d;
`;

export const TopicRow = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding-botton: 1em;
  justify-content: space-evenly;
`;

export const TopicTile = styled.div`
  width: 150px;
  height: 60px;
  border-radius: 2px;
  box-shadow: 7px 3px 17px 0 rgba(0, 0, 0, 0.04);
  background-color: #ffffff;
  border: none;
  -webkit-box-shadow: 0px 0px 5px 1px rgba(204,200,204,1);
  -moz-box-shadow: 0px 0px 5px 1px rgba(204,200,204,1);
  box-shadow: 0px 0px 5px 1px rgba(204,200,204,1);
  margin-left: 2em;
  margin-bottom: 2em;
`;

export const TopicTileText = styled.div`
  width: 130px;
  height: 20px;
  font-size: 14px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.43;
  letter-spacing: normal;
  text-align: center;
  color: #14293d;
  position: relative;
  float: left;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const CoursesTitle = styled.span`
  width: 530px;
  height: 32px;
  font-size: 24px;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #14293d;
`;

export const CoursesViewAll = styled.a`
  width: 53px;
  height: 20px;
  font-size: 14px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.43;
  letter-spacing: normal;
  text-align: right;
  color: #14293d;
`;

export const CoursesRow = styled.div`
  display: flex;
  flex-directionL row;
  padding-left: 1em;
  justify-content: space-evenly;
`;

export const ScaledCourse = styled.div`
  zoom: 0.95;
  -moz-transform: scale(0.5);
  padding-right: 2em;
`;

export const InstructorRow = styled.div`
  display: flex;
  flex-direction: row;
  padding-left: 1em;
  padding-bottom: 8em;
  justify-content: space-evenly;
`;