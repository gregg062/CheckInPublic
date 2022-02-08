import styled from 'styled-components/native'
import { colors } from '../../theme'

const SafeContainer = styled.SafeAreaView`
  flex: 1;
  width: 100%;
  background-color: ${colors.background};
  align-items: center;
`
const StyledScroll = styled.ScrollView`
  width: 100%;
  padding: 20px;
`

const SectionHeader = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 32px;
`

const Line = styled.View`
  flex: 1;
  height: 1px;
  background-color: ${colors.white};
  margin-left: 8px;
`

const EditNameContainer = styled.View`
  width: 100%;
  flex-direction: row;
`

const ReminderContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 16px;
`

const ButtonContainer = styled.View`
  width: 80px;
  height: 40px;
`

export {
  SafeContainer,
  StyledScroll,
  SectionHeader,
  Line,
  EditNameContainer,
  ReminderContainer,
  ButtonContainer
}
