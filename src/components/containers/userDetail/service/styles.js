
import styled from 'styled-components';
import { VerticalContentContainer, HorizontalContentContainer} from '../../common/styles.js'

export const ServiceContentContainer = styled(VerticalContentContainer)`
  width: 20em;
  justify-content: flex-start;
  border-radius: 1em;
`
export const ServiceImage = styled.img`
  width: 100%;
  border-radius: 1em 1em 0em 0em;
  flex:1;
  src:${props=>props.src? props.src: 'none'}
`

export const ServiceDetailContainer = styled(VerticalContentContainer)`
  padding: 1em;
  flex:1;
  justify-content: space-around;
`

export const ServiceStatsContainer = styled(HorizontalContentContainer)`
  flex-wrap: nowrap;
  flex-direction: row;
  justify-content: space-between;
`

export const ServiceRatingContainer = styled(HorizontalContentContainer)`
  width:auto;
  justify-content: space-between;
`

export const ServiceStartPriceContainer = styled(HorizontalContentContainer)`
  width: auto;
  justify-content: space-between;
`
