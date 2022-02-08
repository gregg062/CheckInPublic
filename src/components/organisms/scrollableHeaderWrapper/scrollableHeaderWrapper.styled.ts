import { transparentize } from 'polished'
import Animated from 'react-native-reanimated'
import styled from 'styled-components/native'
import { colors } from '../../../theme'

const Container = styled.View`
  flex: 1;
  width: 100%;
  background-color: ${colors.background};
`
const AnimatedHeader = styled(Animated.View)`
  position: absolute;
  top: 50px;
  left: 20px;
  right: 20px;
  z-index: 5000;
  flex-direction: row;
  justify-content: space-between;
`

const CloseIconContainer = styled.TouchableOpacity`
  width: 40px;
  height: 40px;
  justify-content: center;
`

const SubmitContainer = styled.View`
  width: 80px;
`

const StyledScrollView = styled.ScrollView`
    z-index: 600;
    padding-top: 280px
    paddingright: 10px
`

const BottomBanner = styled.View`
    position: absolute;
    bottom: 0px;
    right: 0px;
    left: 0px;
    backgroundColor: ${transparentize(0.15, colors.background)},
    height: 110px;
    z-index: 1000;
    justifyContent: center;
    alignItems: center;
`

export {
  Container,
  AnimatedHeader,
  CloseIconContainer,
  SubmitContainer,
  StyledScrollView,
  BottomBanner
}
