
import styled, { css }from 'styled-components';

const sizes = {
  extraLarge: 1200,
  large: 992,
  medium: 768,
  small: 576,
  extraSmall:0,
}

export const column = (span) => {
  return span / 12 * 100 + "%"
}

export const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${sizes[label] / 16}em) {
      ${css(...args)}
    }
  `
  return acc
}, {})


export const Title = styled.h4`
  font-family: 'Nunito Sans', sans-serif;
  font-size: ${props=> props.fontSize? props.fontSize : '1.2em'};
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
`

export const Paragraph = styled.p`
  font-family: 'Nunito Sans', sans-serif;
  font-size: ${props=> props.fontSize? props.fontSize : '1.2em'};
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
`

export const Text = styled.span`
  font-family: 'Nunito Sans', sans-serif;
  font-size: ${props=> props.fontSize? props.fontSize: '1em' };
  font-weight: ${props=>props.weight? props.weight: 'normal' };
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align:${props=>props.align? props.align: 'left' };
  color: ${props=> props.light ? "rgba(20, 41, 61, 0.65)": "default"};
  box-sizing: border-box;
`

export const VerticalContentContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start;;
  box-sizing: border-box;
`

export const HorizontalContentContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: flex-start;
  box-sizing: border-box;
`

export const FlexBoxRow = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: ${props => props.justifyContent? props.justifyContent: 'flex-start'};
  align-items: ${props => props.alignItems? props.alignItems: 'flex-start'};
  box-sizing: border-box;
`

export const FlexBoxColumn = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: ${props => props.justifyContent? props.justifyContent: 'flex-start'};
  align-items: ${props => props.alignItems? props.alignItems: 'flex-start'};
  box-sizing: border-box;
`

export const SeparationLine = styled.div`
  width: 100%;
  height: 1px;
  opacity: 0.15;
  border: solid 1px #14293d;
  box-sizing: border-box;
`

export const Gap = styled.div`
  width: 100%;
  height: ${props=>props.height? props.height: '1em'};
`

export const GridItemContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(12, "1fr"});
  grid-template-rows: auto;
  grid-auto-rows: auto;
  grid-auto-flow: row;
  grid-gap: 1.5em;
  justify-items: start;
  align-items: center;

  padding: 10px;
`
export const Button = styled.button`
  font-family: 'Nunito Sans', sans-serif;
  text-align: center;
  font-size: 1.25em;
`

export const CircularButton = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin-right: 10px;
  background-color: black;
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

export const debugBorder = "1px solid red"
