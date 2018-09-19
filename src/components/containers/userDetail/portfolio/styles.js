
import styled from 'styled-components';
import { FlexBoxRow, FlexBoxColumn, Text} from '../../common/styles.js'
import { media, column } from '../../common/mixins'

export const PortfolioItemContainer = styled(FlexBoxRow)`
  width: 100%;
  justify-content: flex-start;
  justify-items: center;
  align-items: start;

`
export const PortfolioItem =  styled(FlexBoxColumn)`

  align-items: center;
  padding: 1em;

  ${media.extraSmall`
    width: ${column(6)};
  `}

  ${media.small`
    width: ${column(6)};
  `}

  ${media.medium`
    width: ${column(6)};
  `}

  ${media.large`
    width: ${column(3)};
  `}

`
export const PortfolioImage = styled.img`
  width: 100%;
  max-width:150px;
  max-height:150px;
  src:${props=>props.src? props.src: 'none'}
`

export const PortfolioTitle = styled(Text)`
  text-align: center;
`
