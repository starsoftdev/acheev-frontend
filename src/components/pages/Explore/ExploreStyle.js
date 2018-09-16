import styled from 'styled-components';

export const TopBanner = styled.div`
  width: 100%;
  height: 200px;
  background-image: linear-gradient(98deg, #2da2f2, #006494);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const AboveHeader = styled.span`
  font-size: 15px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.47;
  letter-spacing: normal;
  text-align: center;
  color: rgba(255, 255, 255, 0.65);
  margin: auto;
  margin-bottom: 0;
`;

export const HeaderText = styled.span`
  font-size: 48px;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: #ffffff;
  margin: auto;
  margin-top: 0;
`;

export const Page = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #f8f8fb;
  padding-top: 45px;
`;

export const FilterColumn = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 135px;
  width: 290px;
`;

export const CourseColumn = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 30px;
`;

export const SearchColumnTitle = styled.span`
  font-size: 24px;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #14293d;
  margin-bottom: 30px;
`;

export const SearchColumnRow = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const FilterTitle = styled.span`
  font-size: 18px;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #14293d;
  width: 290px;
`;