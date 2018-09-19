
import styled from 'styled-components';
import { FlexBoxRow, FlexBoxColumn, Title,
  Text, Button} from '../../common/styles.js'

import { media, column } from '../../common/mixins'

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
      text-align: center;
    `}

    ${media.medium`
      width: ${column(4)};
      text-align: left;
    `}

`
export const RatingBox = styled(FlexBoxRow)`
    align-items: center;
    ${media.extraSmall`
      width: ${column(6)};
    `}

    ${media.medium`
      width: ${column(4)};
    `}

`
export const SearchBox = styled(FlexBoxRow)`
  border: 1px solid blue;
  ${media.extraSmall`
    width: ${column(6)};
  `}
  ${media.medium`
    width: ${column(4)};
  `}
`
export const RatingDetailBox = styled(FlexBoxColumn)`

   background-color: rgba(248, 248, 251, 0.25);
   border: 1px solid rgba(53, 61, 85, 0.15);
   padding: 1em;

   :first-child {
    border-right: 0px;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;

   }
   :last-child {
     border-left: 0px;
     border-top-right-radius: 10px;
     border-bottom-right-radius: 10px;

   }
   ${media.extraSmall`
     width: ${column(12)};
   `}

   ${media.medium`
     width: ${column(4)};
   `}
`

export const UserReviewBox  = styled(FlexBoxRow)`
  border-bottom: solid 1px rgba(53,61,85,0.15);
  padding-top: 1.5em;
  padding-bottom: 1.5em;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: nowrap;
`
export const UserReviewContentBox = styled(FlexBoxColumn)`
  justify-content: flex-start;
  align-items: flex-start;

  ${media.extraSmall`
    width: ${column(10)}
  `}

  ${media.medium`
    width: ${column(10)}
  `}
`
export const UserReviewTitleBox = styled(FlexBoxRow)`
  justify-content: space-between;
  align-items: flex-start;
`
export const UserImage = styled.img`
  border-radius: 50%;
  ${media.extraSmall`
    width: ${column(2)};
    width: 2em;
    height: 2em;
  `}

  ${media.small`
    width: ${column(2)};
    width: 2.5em;
    height: 2.5em;
  `}

  ${media.medium`
    width: ${column(2)};
    width: 3em;
    height: 3em;
  `}

  ${media.large`
    width: ${column(2)};
    width: 4em;
    height: 4em;
  `}
`

export const LoadButton = styled(Button)`
     width: 100%;
     background-color: white;
     border: none;
     background: -webkit-linear-gradient(97deg, #2da2f2, #006494);
     -webkit-background-clip: text;
     -webkit-text-fill-color: transparent;
`
