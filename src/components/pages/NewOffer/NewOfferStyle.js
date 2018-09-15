import styled from 'styled-components';
import { Button } from 'semantic-ui-react'

export const TopBanner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-image: linear-gradient(98deg, #2da2f2, #006494);
  height: 200px;
`;

export const Heading = styled.span`
  font-size: 48px;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: #ffffff;
`;

export const Page = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center
  background-color: #f8f8fb;
  padding-bottom: 50px;
`;

export const TitleHolder = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 50px;
  width: 53%;
`;

export const Title = styled.span`
  font-size: 24px;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #14293d;
`
export const FirstBox = styled.div`
  display: flex;
  flex-direction: row;
  height: 140px;
  background-color: white;
  width: 770px;
  margin-top: 30px;
  border-radius: 5px;
  box-shadow: 7px 3px 17px 0 rgba(0, 0, 0, 0.04);
`;

export const FirstBoxWithOneEntry = styled.div`
  display: flex;
  flex-direction: row;
  height: 140px;
  background-color: white;
  width: 770px;
  margin-top: 30px;
  border-radius: 5px;
  box-shadow: 7px 3px 17px 0 rgba(0, 0, 0, 0.04);
  padding-left: 40px;
  padding-top: 30px;
`;

export const JobNameInputFullWidth = styled.input`
  height: 35px;
  border: none;
  border-bottom: solid 1px #14293d;
  width: 60%;
  margin-top: 20px;
  text-align: left !important;
  &:focus {
    outline:none;
  }
`;

export const FirstBoxHalf = styled.div`
  width: 385px;
  padding-left: 40px;
  padding-top: 30px;
  display: flex;
  flex-direction: column;
`;

export const BoxTitle = styled.span`
  font-size: 18px;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #14293d;
  height: 25px;
`;

export const JobNameInput = styled.input`
  height: 35px;
  border: none;
  border-bottom: solid 1px #14293d;
  width: 60%;
  margin-top: 20px;
  text-align: left !important;
  &:focus {
    outline:none;
  }
`;

export const SecondRowContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 770px;
  margin-top: 30px;
`;

export const SecondRowBox = styled.div`
  width: 370px;
  height: 140px;
  background-color: white;
  padding-left: 40px;
  padding-top: 30px;
  border-radius: 5px;
  box-shadow: 7px 3px 17px 0 rgba(0, 0, 0, 0.04);
  display: flex;
  flex-direction: column;
`;

export const EditorScale = styled.div`
  zoom: .55;
  -moz-transform: scale(0.55);
  padding-top: 30px;
`;

export const ButtonRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 100px;
  margin-bottom: 150px;
`;

export const SubmitButton = styled(Button)`
  width: 90px;
  height: 50px;
  border-radius: 5px;
  background-image: linear-gradient(105deg, #2da2f2, #006494) !important;
  color: white !important;
  margin-right: 20px !important;
`;

export const OtherButton = styled(Button)`
  width: 90px;
  height: 50px;
  background-color: #F8F8FB !important;
  color: #1E80BA !important;
  border-radius: 5px !important;
  border: solid 1px rgba(20, 41, 61, 0.43) !important;
  margin-right: 20px !important;
`;