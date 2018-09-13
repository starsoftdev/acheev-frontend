
import styled from 'styled-components';
import { GridItemContainer, VerticalContentContainer, Title} from '../../common/styles.js'

export const PortfolioItemContainer = styled(GridItemContainer)`
  display: grid;
  grid-template-columns: repeat(4,1fr);
`

export const PortfolioItem =  styled(VerticalContentContainer)`
  align-items: center;
  grid-column-start: auto
  grid-column-end: auto
  grid-row-start:  auto
  grid-row-end: auto
`
export const PortfolioImage = styled.img`
  width: 100%
  height: 150px;
  src:${props=>props.src? props.src: 'none'}
`

export const PortfolioTitle = styled(Title)`
  text-align: center;
`
