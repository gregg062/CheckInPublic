import Animated from 'react-native-reanimated'
import styled from 'styled-components/native'
import { colors } from '../theme'

const ToastAnim = styled(Animated.View)`
  position: absolute;
  bottom: 40px;
  right: 0px;
  left: 0px;
  z-index: 100;
  padding-left: 20px;
  padding-right: 20px;
  shadow-color: ${colors.black};
  shadow-offset: {
    width: 0px;
    height: 5px;
  }
  shadow-opacity: 0.2;
  shadow-radius: 4px;
  elevation: 8;
`
const ToastContainer = styled.View`
  width: 100%;
  height: 80px;
  background-color: ${colors.white};
  border-radius: 20px;
  justify-content: center;
  align-items: center;
`
export { ToastAnim, ToastContainer }
