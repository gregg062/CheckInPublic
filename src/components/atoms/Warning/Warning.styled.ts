import { transparentize } from 'polished'
import Animated from 'react-native-reanimated'
import styled from 'styled-components/native'
import { colors } from '../../../theme'

const Overlay = styled.View`
    position: absolute;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
    justify-content: center;
    align-items: center;
    z-index: 10000
    background-color: ${transparentize(0.2, colors.black)}
`

const WarningContainer = styled(Animated.View)`
  height: 200px;
  width: 80%;
  border-radius: 16px;
  overflow: hidden;
`

export { Overlay, WarningContainer }
