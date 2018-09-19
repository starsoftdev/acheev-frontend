
import styled from 'styled-components';
import { FlexBoxColumn, FlexBoxRow, Title, Text, Button} from '../../common/styles'
import { padding } from '../../common/mixins'

export const ProfileStatsContainer = styled(FlexBoxColumn)`
  padding: 1em;
  justify-content: center;
  align-items: center;
`

export const ProfileStatsLineContainer =  styled(FlexBoxRow)`
  justify-content: space-between;
  align-items: center;
  ${padding('0.1em','vertical')}

`
export const ProfileStatsIcon = styled.img`
  width: 1em;
  height: 1em;
`
export const ProfileStatsText = styled(Text)`
  opacity: 0.5;
  text-align: left;
`

export const ProfileStatsValue = styled(Text)`
  text-align: right;
`
