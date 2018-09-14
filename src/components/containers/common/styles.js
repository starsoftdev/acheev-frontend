
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
  border: solid 1px red;
  font-family: NunitoSans;
  font-size: ${props=> props.fontSize? props.fontSize : '1.2em'};
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
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start;;
  box-sizing: border-box
`

export const HorizontalContentContainer = styled.div`
  border: solid 1px red;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: flex-start;
  box-sizing: border-box;
`

export const SeparationLine = styled.div`
  width: 100%;
  height: 2px;
  opacity: 0.15;
  border: solid 1px #14293d;
  box-sizing: border-box;
`

export const Text = styled.span`
  border: solid 1px red;
  font-family: NunitoSans;
  font-size: 1em;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  letter-spacing: normal;
  text-align:left;
  color: ${props=> props.light ? "rgba(20, 41, 61, 0.65)": "default"};
  box-sizing: border-box;
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
  border: 1px solid blue;
`
