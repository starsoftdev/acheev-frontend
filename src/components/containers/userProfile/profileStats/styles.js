
import styled from 'styled-components';

export const ProfileStatsContainer = styled.div`
  width: 100%;
  border: solid 1px red;
  display: flex;
  padding: 20px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const ProfileStatsLineContainer =  styled.div`
  width: 100%;
  border: solid 1px red;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`
export const ProfileStatsIcon = styled.img`
  border: solid 1px red;
  width: 15px;
  height: 15px;
`
export const ProfileStatsText = styled.span`

  border: solid 1px red;
  opacity: 0.5;
  font-family: NunitoSans;
  font-size: 14px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: #14293d;
`

export const ProfileStatsValue = styled.span`

  border: solid 1px red;
  font-family: NunitoSans;
  font-size: 14px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: right;
  color: #14293d;
`
