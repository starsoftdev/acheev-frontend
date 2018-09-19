
import styled from 'styled-components';

import { circleStyle, fontStyle, flexStyle, flexRow, flexColumn,
   flexCenter, padding, margin, media } from './mixins'

export const Title = styled.h4`
  ${fontStyle}
  font-size: ${props=> props.fontSize? props.fontSize : '1.2em'};
  font-weight: bold;

  ${media.extraSmall`
    font-size: 110%;
  `}

  ${media.small`
    font-size: 120%;
  `}

  ${media.medium`
    font-size: 130%;
  `}
`

export const Paragraph = styled.p`
  ${fontStyle}
  font-size: ${props=> props.fontSize? props.fontSize : '1em'};

  ${media.extraSmall`
    font-size: 100%;
  `}

  ${media.small`
    font-size: 100%;
  `}

  ${media.medium`
    font-size: 110%;
  `}
`

export const Text = styled.span`
  ${fontStyle}
  font-size: ${props=> props.fontSize? props.fontSize : '0.9em'};

  ${media.extraSmall`
    font-size: 90%;
  `}

  ${media.small`
    font-size: 100%;
  `}

  ${media.medium`
    font-size: 110%;
  `}
`

export const FlexBoxRow = styled.div`
  ${flexRow}
`

export const FlexBoxColumn = styled.div`
  ${flexColumn}
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
  ${fontStyle}
  font-size: ${props=> props.fontSize? props.fontSize : '1em'};
  text-align: center;
`

export const CircularButton = styled.button`
  width: 30px;
  height: 30px;
  ${circleStyle}
  ${margin('0.1em','horizontal')}
  background-color: black;
`

export const RoundContainer = styled.div`
  height: 34px;

  ${padding('1em','horizontal')}
  margin-right: 0.5em;
  ${margin('0.5em', 'vertical')}
  ${flexCenter}

  border-radius: 1em;
  border: solid 1px rgba(20,41,61, 0.25);

`
