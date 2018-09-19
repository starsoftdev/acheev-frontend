import styled, { css } from 'styled-components';

const sizes = {
  large: '1200px',
  medium: '992px',
  small: '768px',
}

export const column = (span) => {
  return span / 12 * 100 + "%"
}

export const media = {

    extraSmall: (...args) => css`
      @media (min-width: 0) {
        ${css(...args)}
      }
    `,
    small: (...args) => css`
      @media (min-width: ${sizes.small}) {
        ${css(...args)}
      }
    `,
    medium: (...args) => css`
      @media (min-width: ${sizes.medium}) {
        ${css(...args)}
      }
    `,
    large: (...args) => css`
      @media (min-width: ${sizes.large}) {
        ${css(...args)}
      }
    `
}


export const circleStyle = css`
  border-radius: 50%;
`

export const fontStyle = css`
  font-family: 'Nunito Sans', sans-serif;
  font-size: ${props=> props.fontSize? props.fontSize : '1em'};
  font-weight: ${props=>props.weight? props.weight: 'normal' };
  text-align: ${props=>props.align? props.align: 'left' };
  color: ${props=> props.light ? "rgba(20, 41, 61, 0.65)": "default"};
  box-sizing: border-box;
`

export const flexStyle = css`
  width: 100%;
  display: flex;
  flex-wrap: ${props => props.flexWrap? props.flexWrap: 'wrap'};
  box-sizing: border-box;
  justify-content: ${props => props.justifyContent? props.justifyContent: 'flex-start'};
  align-items: ${props => props.alignItems? props.alignItems: 'flex-start'};
`
export const flexCenter = css`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const flexRow = css`
  ${flexStyle}
  flex-direction: row;
`
export const flexColumn = css`
  ${flexStyle}
  flex-direction: column;
`

export const shadowBox = css`
  box-shadow: 7px 3px 17px 0 rgba(0, 0, 0, 0.04);
  border: solid 1px #eaeaea;
  border-radius: 5px;
`

export const padding = (size, direction) => {

  const paddingSize = size? size: '1em'

  if (direction === 'vertical'){
    return css`
      padding-top : ${paddingSize};
      padding-bottom : ${paddingSize};
    `
  }else if (direction == 'horizontal'){
    return css`
      padding-left : ${paddingSize};
      padding-right : ${paddingSize};
    `
  }else {
    return css`
      padding : ${paddingSize};
    `
  }
}

export const margin = (size, direction) => {

  const marginSize = size? size: '1em'

  if (direction === 'vertical'){
    return css`
      margin-top : ${marginSize};
      margin-bottom : ${marginSize};
    `
  }else if (direction == 'horizontal'){
    return css`
      margin-left : ${marginSize};
      margin-right : ${marginSize};
    `
  }else {
    return css`
      margin : ${marginSize};
    `
  }
}
