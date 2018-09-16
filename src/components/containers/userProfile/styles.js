import { React } from 'react';
import styled from 'styled-components';

export const UserProfileContainer = styled.div`
    width: 100%;
    height: 621px;
    padding: 20px;
    background-color: #ffffff;
    box-shadow: 7px 3px 17px 0 rgba(0, 0, 0, 0.04);
    border: solid 1px #eaeaea;
    border-radius: 5px;
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    align-items: center;

`
export const UserProfilePicture = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  border: solid 1px red;
`

export const UserProfileName = styled.p`
  font-family: NunitoSans;
  font-size: 18px;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: #14293d;
  border: solid 1px red;
`

export const UserProfileSummary = styled.p`
  font-family: NunitoSans;
  font-size: 15px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.47;
  letter-spacing: normal;
  text-align: center;
  color: rgba(20, 41, 61, 0.65);
  border: solid 1px red;
`

export const UserProfileReviewContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  align-items: center;
`

export const UserProfileButtonContainer= styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  align-items: center;
  border: solid 1px red;
`

export const UserProfileButtonContactMe =  styled.button`
  width: 135px;
  height: 50px;
  border-radius: 5px;
  background-image: linear-gradient(100deg, #2da2f2, #006494);
  ont-family: NunitoSans;
  font-size: 14px;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: #ffffff;
  margin: auto;
`

export const UserProfileButtonCustomOrder =  styled.button`
  width: 135px;
  height: 50px;
  border-radius: 5px;
  border: solid 1px rgba(20, 41, 61, 0.43);
  font-family: NunitoSans;
  font-size: 14px;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  margin: auto;
`
