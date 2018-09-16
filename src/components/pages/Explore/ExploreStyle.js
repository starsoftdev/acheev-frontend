import styled from 'styled-components';
import { Input } from 'semantic-ui-react'

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

export const FilterSeparator = styled.div`
  width: 270px;
  height: 1px;
  opacity: 0.15;
  border: solid 1px #14293d;
  margin-top: 30px;
  margin-bottom: 30px;
`;

export const PriceInputs = styled(Input)`
  width: 200px;
  height: 50px;
  border-radius: 5px;
  background-color: #f8f8fb;
  border: solid 1px #f8f8fb;
  margin-top: 5px;
`;

export const PageNumberRow = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 100px;
  margin-bottom: 100px;
  margin-left: 100px;
  align-items: center;
`;

export const PageBack = styled.div`
  width: 40px;
  height: 40px;
  box-shadow: 4px 1px 8px 0 rgba(0, 0, 0, 0.04);
  background-color: #ffffff;
  border: solid 1px #eaeaea;
  border-radius: 100px;
  color: rgba(20, 41, 61, 0.65) !important;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 50px;
`;

export const PageNumber = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 5px;
  box-shadow: 7px 3px 17px 0 rgba(0, 0, 0, 0.04);
  background-color: #ffffff;
  border: solid 1px #eaeaea;
  color: rgba(20, 41, 61, 0.65) !important;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 10px;
`;

export const PageForward = styled.div`
  width: 40px;
  height: 40px;
  box-shadow: 4px 1px 8px 0 rgba(0, 0, 0, 0.04);
  background-color: #ffffff;
  border: solid 1px #eaeaea;
  border-radius: 100px;
  color: #2f9ed8;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 40px;
`;