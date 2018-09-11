
import styled from 'styled-components';


const hasStyleProp = (prop,name) => {

  if (!prop.style){
    return false
  }

  if (prop[name]){
    return true
  }

  return false
}


export const Title = styled.h4`
  border: solid 1px red;
  font-family: NunitoSans;
  font-size: ${props=> props.fontSize? props.fontSize : '18px'}
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
  letter-spacing: normal;
  text-align:left;
  color: ${props=> props.light ? "rgba(20, 41, 61, 0.65)": "default"};
`

export const ContentContainer = styled.div`
  border: solid 1px red;
  width: ${props=> hasStyleProp(props,'width') ? props.style.width: "100%"};
  display: flex;
  flex-wrap: wrap;
  flex-direction: ${props=> hasStyleProp(props,'flexDirection') ? props.style.flexDirection: "column"};
  justify-content: ${props=> hasStyleProp(props,'justifyContent') ? props.style.justifyContent: "space-around"};
  align-items: ${props=> hasStyleProp(props,'alignItems') ? props.style.alignItems: "flex-start"};
  ;
`
export const ColumnItemContentContainer = styled(ContentContainer)`
  margin-bottom: 5px;
  margin-top: 5px;
  flex-direction: column;
`

export const RoundContainer = styled.div`
  height: 34px;
  padding-left: 10px;
  padding-right: 10px;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 17px;
  border: solid 1px grey;

  margin-right: 10px;
  margin-bottom: 10px;

`
export const CircularButton = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin-right: 10px;
  background-color: black;
`
