
import styled from 'styled-components';
import { HorizontalContentContainer, VerticalContentContainer, Text, media, column} from '../../common/styles.js'

export const PortfolioItemContainer = styled(HorizontalContentContainer)`
  width: 100%;
  justify-content: flex-start;
  justify-items: center;
  align-items: start;

`
export const PortfolioItem =  styled(VerticalContentContainer)`

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

  ${media.extraLarge`
    width: ${column(3)};
  `}


`
export const PortfolioImage = styled.img`
  width: 100%;
  src:${props=>props.src? props.src: 'none'}
`

export const PortfolioTitle = styled(Text)`
  text-align: center;
`
