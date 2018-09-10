
import styled from 'styled-components';


export const Title = styled.h4`
  border: solid 1px red;
  font-family: NunitoSans;
  font-size: 18px;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
`

export const Text = styled.span`
  border: solid 1px red;
  font-family: NunitoSans;
  font-size: 14px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.43;
  letter-spacing: normal;
  color: ${props=> props.light ? "rgba(20, 41, 61, 0.65)": "default"};
`

export const ContentContainer = styled.div`

  border: solid 1px red;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
  ;

`
