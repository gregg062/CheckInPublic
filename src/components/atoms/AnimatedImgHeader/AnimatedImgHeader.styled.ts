import styled from 'styled-components/native'
import LinearGradient from 'react-native-linear-gradient'
import { ImageBackground } from 'react-native'
import Animated from 'react-native-reanimated'
import { colors } from '../../../theme'

const GradBackground = styled(LinearGradient)<{ height: number }>`
  width: 100%;
  height: ${({ height }) => height + 100}px;
  padding: 10px;
  justify-content: flex-end;
`
const AnimatedBackground = styled(ImageBackground)<{ imgHeight: number }>`
  width: 100%;
  height: ${({ imgHeight }) => imgHeight}px;
  position: absolute;
  z-index: 0;
`

const LogoContainer = styled(Animated.View)<{ logoAlign: number }>`
  width: 100%;
  height: 100px;
  position: absolute;
  top: ${({ logoAlign }) => logoAlign}px;
  align-items: center;
`

export { GradBackground, AnimatedBackground, LogoContainer }
