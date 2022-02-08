import { Animated } from 'react-native'
import styled from 'styled-components/native'

const SliderContainer = styled.View<{ prePadded: boolean }>`
  padding: ${({ prePadded }) => (prePadded ? 0 : 20)}px;
  padding-right: ${({ prePadded }) => (prePadded ? 0 : 20)}px;
  padding-bottom: 16px;
`

const AnimatedTitle = styled(Animated.View)`
  margin-bottom: 8px;
`

const AnimatedContainer = styled(Animated.View)<{ color: string }>`
  height: 40px;
  background-color: ${({ color }) => color};
  z-index: 1;
  align-items: center;
  justify-content: center;
`

const DivideContainer = styled(Animated.View)`
  height: 8px;
  width: 40px;
  position: absolute;
  top: -49px;
  flex-direction: row;
`
const ElipseOne = styled(Animated.View)`
  width: 10px;
  height: 8px;
  border-radius: 20px;
  background-color: #181818;
  position: absolute;
  left: -4px;
`

const ElipseTwo = styled(Animated.View)`
  width: 10px;
  height: 8px;
  border-radius: 20px;
  background-color: #181818;
  position: absolute;
  right: -4px;
`
const TouchResponse = styled.TouchableOpacity`
  position: relative;
  z-index: 7000;
`

const AnimatedBackground = styled(Animated.View)`
  height: 40px;
  z-index: 1;
  align-items: center;
  justify-content: center;
`

const getBackgroundColor = (
  pressed: boolean,
  numbered: boolean | undefined
) => {
  if (pressed && numbered) {
    return '#1b1b1b'
  } else if (pressed && !numbered) {
    return '#1b1b1b70'
  } else {
    return '#ffffff50'
  }
}
const AnimatedBubble = styled(Animated.View)<{
  color: string
  pressed: boolean
  numbered: boolean | undefined
}>`
  position: absolute;
  flex: 1;
  width: 40px;
  height: 40px;
  flex-direction: column;
  background-color: ${({ pressed, numbered }) =>
    getBackgroundColor(pressed, numbered)};
  border-color: ${({ color }) => color};
  border-width: ${({ pressed }) => (pressed ? 3 : 0)}px;
  border-radius: 20px;
  z-index: 20;
  align-items: center;
  justify-content: center;
`
export {
  SliderContainer,
  AnimatedTitle,
  AnimatedContainer,
  DivideContainer,
  ElipseOne,
  ElipseTwo,
  TouchResponse,
  AnimatedBackground,
  AnimatedBubble
}
