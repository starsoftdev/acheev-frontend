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

export const AddNewCourseTile = styled.div`
  width: 370px;
  height: 420px;
  opacity: 0.15;
  border-radius: 10px;
  border: solid 1px #353d55;
`;

export const AddNewCourseTileCircle = styled.div`
  margin-top: 160px;
  margin-left: 135px;
  width: 100px;
  height: 100px;
  border: solid 1px #353d55;
  border-radius: 100%;
`;

export const AddNewCourseTilePlus = styled.div`
  margin-left: 35px;
  margin-top: 30px;
  font-size: 1.75em;
`;

export const AddNewCourseTileText = styled.span`
  margin-left: 125px;
  width: 80px;
  height: 22px;
  font-size: 15px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.47;
  letter-spacing: normal;
  text-align: center;
  color: rgba(20, 41, 61, 0.65);
`;

export const BannerHeader = styled.h1`
  color: white;
  margin-top: auto;
`;

export const TabItem = styled.span`
  color: rgba(255, 255, 255, 0.65);
  margin-top: 45px;
  padding-bottom: 20px;
  &:hover{
    cursor: pointer;
  }
`;

