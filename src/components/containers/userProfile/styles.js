import { React } from 'react';
import styled from 'styled-components';
import { FlexBoxColumn, FlexBoxRow, Title, Text, Button} from '../common/styles'
import { shadowBox, fontStyle, media, padding, margin } from '../common/mixins'

export const ProfileContainer = styled(FlexBoxColumn)`
    background-color: #ffffff;
    ${shadowBox}
    padding: 20px;
    align-items: center;
`
export const ProfilePicture = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  ${margin('0.5em','vertical')}
`

export const ProfileName = styled(Title)`
  text-align: center;
  ${margin('0.5em','vertical')}
`

export const ProfileSummary = styled(Text)`
  text-align: center;
  ${margin('0.5em','vertical')}
`

export const ProfileReviewContainer = styled(FlexBoxRow)`
  justify-content: space-around;
  align-items: center;
  ${margin('0.5em','vertical')}
`

export const ProfileButtonContainer= styled(FlexBoxRow)`
  justify-content: space-evenly;
  align-items: center;
  ${margin('2em','vertical')}
`

const ProfileButton =  styled(Button)`
  width: 9em;
  height: 3em;
  border-radius: 5px;
  margin: auto;
  background-image: linear-gradient(96deg, #2da2f2, #006494);
`

export const ProfileButtonContactMe =  styled(ProfileButton)`
  color: #ffffff;
`
export const ProfileButtonCustomOrder =  styled(ProfileButton)`
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
`
