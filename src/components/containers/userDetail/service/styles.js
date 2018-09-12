
import styled from 'styled-components';
import { VerticalContentContainer, HorizontalContentContainer} from '../../common/styles.js'

export const ServiceContentContainer = styled(VerticalContentContainer)`
  width: 330px;
  height: 390px;
  justify-content: flex-end;
  background-image: ${props=>props.backgroundImage? props.backgroundImage: 'none'};
`

export const ServiceDetailContainer = styled(VerticalContentContainer)`
  padding: 10px;
  height: 190px;
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
