
import styled from 'styled-components';
import { VerticalContentContainer, HorizontalContentContainer} from '../../common/styles.js'

export const ServiceContentContainer = styled(VerticalContentContainer)`
  width: 330px;
  height: 390px;
  justify-content: flex-start;
  background-image: url(${props=>props.backgroundImage? props.backgroundImage: 'none'});
`
export const ServiceImage = styled.img`
  width: 100%;
  flex:1;
  src:${props=>props.backgroundImage? props.backgroundImage: 'none'}
`

export const ServiceDetailContainer = styled(VerticalContentContainer)`
  padding: 10px;
  flex:1;
  justify-content: space-around;
`

export const ServiceStatsContainer = styled(HorizontalContentContainer)`
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
`

export const ServiceRatingContainer = styled(HorizontalContentContainer)`
  justify-content: space-between;
`

export const ServiceStartPriceContainer = styled(HorizontalContentContainer)`
  justify-content: space-between;
`
