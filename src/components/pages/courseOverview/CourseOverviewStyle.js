import styled from 'styled-components';

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
  margin-top: 50px;
`;

export const CourseDiv = styled.div`
  margin-bottom: -500px;
  width: 1170px;
  height: 602px;
  border-radius: 5px;
  box-shadow: 7px 3px 17px 0 rgba(0, 0, 0, 0.04);
  background-color: #ffffff;
  border: solid 1px #eaeaea;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
`;

export const CategoryPicker = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  width: 20%;
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
`

export const BodyDiv = styled.div`
  background-color: #f8f8fb;
  padding-left: 40px;
  padding-right: 40px;
`;