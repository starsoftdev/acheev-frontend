
import styled from 'styled-components';

export const Title = styled.h4`
  border: solid 1px red;
  font-family: NunitoSans;
  font-size: ${props=> props.fontSize? props.fontSize : '18px'};
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
`

export const VerticalContentContainer = styled.div`
  border: solid 1px red;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start;
`

export const HorizontalContentContainer = styled.div`
  border: solid 1px red;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export const SeparationLine = styled.div`
  width: 100%;
  height: 2px;
  opacity: 0.15;
  border: solid 1px #14293d;
`

export const Text = styled.span`
  border: solid 1px red;
  font-family: NunitoSans;
  font-size: 14px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  letter-spacing: normal;
  text-align:left;
  color: ${props=> props.light ? "rgba(20, 41, 61, 0.65)": "default"};
`
