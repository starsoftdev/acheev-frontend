
import styled from 'styled-components';
import { FlexBoxRow, FlexBoxColumn, media, column, Title} from '../../common/styles.js'


export const ReviewHeadLineBox = styled(FlexBoxRow)`

    align-items: center;

    ${media.extraSmall`
      justify-content: center;
    `}
    ${media.medium`
      justify-content: space-between;
    `}
`
export const ReviewTitle = styled.h4`

    ${media.extraSmall`
      width: ${column(12)};
    `}

    ${media.medium`
      width: ${column(6)};
    `}

`
export const RatingBox = styled(FlexBoxRow)`
    align-items: flex-start;

    ${media.extraSmall`
      width: ${column(6)};
    `}

    ${media.medium`
      width: ${column(3)};
    `}

`
export const SearchBox = styled(FlexBoxRow)`

  ${media.extraSmall`
    width: ${column(6)};
  `}
  ${media.medium`
    width: ${column(3)};
  `}
`
export const detailedRatingBox = styled.div`


`
