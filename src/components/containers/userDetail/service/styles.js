
import styled from 'styled-components';
import { FlexBoxRow, FlexBoxColumn } from '../../common/styles.js'
import { media, column } from '../../common/mixins.js'

export const ServiceCardRow = styled(FlexBoxRow)`

  ${media.extraSmall`
      justify-content: center;
  `}

  ${media.medium`
      justify-content: flex-start;
  `}

`

export const ServiceCard = styled(FlexBoxColumn)`
  justify-content: flex-start;
  border-radius: 2em;
  border: solid 1px rgba(53,61,85,0.15);
  max-width: 22em;

  ${media.extraSmall`
    width: ${column(12)};
  `}

  ${media.medium`
    width: ${column(12)};
  `}

  ${media.large`
    width: ${column(6)};
  `}
`
export const ServiceImage = styled.img`
  width: 100%;
  border-radius: 1em 1em 0em 0em;
  flex:1;
  src:${props=>props.src? props.src: 'none'}
`

export const ServiceDetail= styled(FlexBoxColumn)`
  padding: 1em;
  flex:1;
  justify-content: space-around;
`

export const ServiceStats = styled(FlexBoxRow)`
  flex-wrap: nowrap;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export const ServiceRating = styled(FlexBoxRow)`
  width:auto;
  justify-content: flex-start;
  align-items: center;
`

export const ServiceStartPrice= styled(FlexBoxRow)`
  width: auto;
  justify-content: space-between;
`
