import styled from 'styled-components/native'
import { colors } from '../../theme'

const AuthContainer = styled.View`
  flex: 1;
`

const HeaderBar = styled.View`
  position: absolute;
  top: 10px;
  left: 10px;
  width: 40px;
  height: 40px;
`
const CtaContainer = styled.View`
  width: 75%;
`
export { AuthContainer, HeaderBar, CtaContainer }
