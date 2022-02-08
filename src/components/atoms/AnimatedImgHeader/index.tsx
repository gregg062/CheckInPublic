import React from 'react'
import {
  GradBackground,
  AnimatedBackground,
  LogoContainer
} from './AnimatedImgHeader.styled'
import { ImageSourcePropType } from 'react-native'
import Animated, { Easing, useValue } from 'react-native-reanimated'
import { withTimingTransition } from 'react-native-redash/src/v1/Transitions'
import CustomText from '../CustomText'
import { transparentize } from 'polished'
import { colors } from '../../../theme'

const FADEHEIGHT = 0.25

interface Props {
  newHeight: Animated.Value<number>
  image: ImageSourcePropType
  title: string
  height: number
  newOpacity: Animated.Value<number>
  logoOpacity: Animated.Value<number>
  loaded: () => void
}
const AnimatedImgHeader: React.FC<Props> = ({
  newHeight,
  image,
  title,
  height,
  newOpacity,
  logoOpacity,
  loaded = () => {}
}) => {
  const transition = withTimingTransition(newOpacity, {
    duration: 360,
    easing: Easing.bezier(0.83, 0, 0.17, 1)
  })
  const value = useValue(1)

  const newSize = value.interpolate({
    inputRange: [0, height],
    outputRange: [1, newHeight],
    extrapolate: Animated.Extrapolate.CLAMP
  })

  return (
    <Animated.View
      style={{
        transform: [
          {
            scale: newSize
          }
        ],
        opacity: Animated.interpolate(transition, {
          inputRange: [1, 1],
          outputRange: [newOpacity, 0]
        })
      }}
    >
      <AnimatedBackground onLoadEnd={loaded} imgHeight={height} source={image}>
        <GradBackground
          height={900}
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 1 }}
          locations={[0.0, 0.3, FADEHEIGHT]}
          colors={[transparentize(0.7, '#181818'), '#181818', '#181818']}
        />
        <LogoContainer
          logoAlign={220}
          style={{
            opacity: Animated.interpolate(transition, {
              inputRange: [1, 1],
              outputRange: [logoOpacity, 0]
            })
          }}
        >
          <CustomText bold type="title" color={colors.white}>
            {title}
          </CustomText>
        </LogoContainer>
      </AnimatedBackground>
    </Animated.View>
  )
}

export default AnimatedImgHeader
