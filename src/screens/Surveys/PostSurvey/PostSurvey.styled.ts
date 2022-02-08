import styled from 'styled-components/native'
import { colors } from '../../../theme'

const Styledkeyboard = styled.KeyboardAvoidingView`
  flex: 1;
  background-color: ${colors.background};
`

const Header = styled.View`
  position: absolute;
  top: 40px;
  left: 0px;
  right: 0px;
  z-index: 40;
  flex-direction: row;
  justify-content: space-between;
  padding-left: 20px;
  padding-right: 20px;
`

const InputContainer = styled.View`
  padding-horizontal: 20px;
`

const InputRow = styled.View`
  flex-direction: row;
`
const InputColumn = styled.View<{ right?: boolean }>`
  flex-direction: column;
  width: 45%;
  margin-right: ${({ right }) => (right ? 16 : 0)}px;
`

const InfoContainer = styled.View`
  width: 100%;
  height: 100%;
  flex: 1;
  background-color: ${colors.background};
  padding-top: 80px;
`
export {
  Styledkeyboard,
  Header,
  InputContainer,
  InfoContainer,
  InputRow,
  InputColumn
}
