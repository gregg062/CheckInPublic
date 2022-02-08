import { Button, TouchableOpacity } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import styled from 'styled-components/native'

interface ButtonProps {
  rounded?: boolean
  gradient?: boolean
  backColor?: string
  square?: boolean
  gutterBottom?: number
  bordered?: boolean
  borderedColor?: string
}
const Container = styled(TouchableOpacity)<ButtonProps>`
  background-color: ${(ButtonProps) =>
    ButtonProps.backColor && !ButtonProps.gradient
      ? ButtonProps.backColor
      : '#fff'};
  width: ${(ButtonProps) => (ButtonProps.square ? '180px' : '100%')};
  height: ${(ButtonProps) => (ButtonProps.square ? 180 : 40)}px;
  justify-content: center;
  align-items: center;
  border-radius: ${(ButtonProps) => (ButtonProps.rounded ? 20 : 4)}px;
  margin-bottom: ${(ButtonProps) =>
    ButtonProps.gutterBottom ? ButtonProps.gutterBottom : 0}px;
  border-width: ${(ButtonProps) => (ButtonProps.bordered ? 1 : 0)}px;
  border-color: ${(ButtonProps) =>
    ButtonProps.bordered && ButtonProps.borderedColor
      ? ButtonProps.borderedColor
      : '#000'};
`

const LinearGrad = styled(LinearGradient)<ButtonProps>`
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  border-radius: ${(ButtonProps) => (ButtonProps.rounded ? 20 : 4)}px;
`

export { Container, LinearGrad }
