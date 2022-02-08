import React, { FC, useEffect, useRef, useState } from 'react'
import { Dimensions } from 'react-native'
import { Animated, PanResponder } from 'react-native'
import { Options } from '../../../../types/types'
import { renderSliderOption } from '../../../services/utils'
import { colors } from '../../../theme'
import CustomText from '../CustomText'
import { calcColor, calcNumb, calcPan } from './calculations'
import {
  AnimatedBackground,
  AnimatedBubble,
  AnimatedContainer,
  AnimatedTitle,
  DivideContainer,
  ElipseOne,
  ElipseTwo,
  SliderContainer,
  TouchResponse
} from './Slider.styled'

const { width } = Dimensions.get('window')

interface SliderProps {
  title?: string
  prePadded: boolean
  numbered?: boolean
  highNumb: number
  showUpper?: boolean
  grow?: boolean
  options?: Options[]
  invert?: boolean
  onChange: (value: any) => void
  gradient?: boolean
}
const AnimatedSlider: FC<SliderProps> = ({
  title,
  prePadded,
  numbered,
  highNumb,
  showUpper,
  grow,
  options,
  invert,
  onChange,
  gradient
}) => {
  const [pressed, setPressed] = useState<boolean>(false)
  const [panning, setPanning] = useState<boolean>(false)
  const [numb, setNumb] = useState<number>(0)
  const divider = (width - 85) / (highNumb || 10)
  const numberToDisplay = calcNumb(numb, highNumb)

  const ylocal = useRef(new Animated.Value(-40)).current
  const spacerOpac = useRef(new Animated.Value(0)).current
  const borderRad = useRef(new Animated.Value(20)).current
  const textOpac = useRef(new Animated.Value(1)).current
  const yWord = useRef(new Animated.Value(0)).current

  useEffect(() => {
    Animated.timing(ylocal, {
      toValue: pressed ? -84 : -40,
      duration: 200,
      useNativeDriver: true
    }).start()
    Animated.timing(yWord, {
      toValue: pressed ? -40 : 0,
      duration: 200,
      useNativeDriver: true
    }).start()
    Animated.timing(spacerOpac, {
      toValue: pressed ? 1 : 0,
      delay: 100,
      duration: 50,
      useNativeDriver: true
    }).start()
    Animated.timing(borderRad, {
      toValue: pressed ? 8 : 20,
      duration: 220,
      useNativeDriver: true
    }).start()
    Animated.timing(textOpac, {
      toValue: pressed ? 0 : 1,
      duration: 100,
      useNativeDriver: true
    }).start()
  }, [pressed])

  const pan = PanResponder.create({
    onShouldBlockNativeResponder: () => false,
    onStartShouldSetPanResponder: () => true,
    onStartShouldSetPanResponderCapture: () => true,
    onPanResponderGrant: (e) => {
      setPressed(true)
    },
    onPanResponderEnd: () => {
      setPressed(false)
      setPanning(false)
      onChange(
        numbered
          ? numberToDisplay
          : renderSliderOption(options, numberToDisplay, highNumb)
      )
    },
    onMoveShouldSetPanResponder: () => false,
    onPanResponderMove: (e, gestureState) => {
      if (calcPan(e.nativeEvent.pageX)) {
        setNumb(e.nativeEvent.pageX - 40)
      }
    },
    onPanResponderTerminationRequest: () => false
  })

  return (
    <SliderContainer prePadded={prePadded}>
      <AnimatedTitle style={{ opacity: textOpac }}>
        <CustomText color={colors.white}>{title}</CustomText>
      </AnimatedTitle>
      <AnimatedContainer
        color={gradient ? calcColor(invert, numb) : '#59C3C3'}
        style={{
          borderTopLeftRadius: borderRad,
          borderTopRightRadius: borderRad,
          borderBottomLeftRadius: borderRad,
          borderBottomRightRadius: borderRad,
          transform: [{ scale: pressed && grow ? 1.05 : 1 }]
        }}
      >
        <AnimatedBackground
          style={{
            borderTopLeftRadius: borderRad,
            borderTopRightRadius: borderRad,
            borderBottomLeftRadius: borderRad,
            borderBottomRightRadius: borderRad,
            transform: [
              {
                translateY: yWord
              }
            ]
          }}
        >
          <CustomText color={colors.white}>
            {renderSliderOption(options, numberToDisplay, highNumb)}
          </CustomText>
        </AnimatedBackground>
      </AnimatedContainer>
      <TouchResponse>
        {pressed && showUpper && (
          <DivideContainer
            style={{
              backgroundColor: gradient ? calcColor(invert, numb) : '#59C3C3',
              opacity: spacerOpac,
              transform: [
                {
                  translateX: numb
                }
              ]
            }}
          >
            <ElipseOne
              style={{
                transform: [{ scaleX: 1.2 }]
              }}
            />
            <ElipseTwo style={{ transform: [{ scaleX: 1.2 }] }} />
          </DivideContainer>
        )}
        <AnimatedBubble
          color={gradient ? calcColor(invert, numb) : '#59C3C3'}
          pressed={pressed}
          numbered={numbered}
          {...pan.panHandlers}
          style={{
            transform: [
              {
                translateX: numb
              },
              {
                translateY: showUpper ? ylocal : -40
              },
              {
                scale: pressed && grow ? 1.05 : 1
              }
            ]
          }}
        >
          <CustomText
            bold
            color={gradient || pressed ? colors.white : colors.background}
          >
            {numbered ? numberToDisplay : ''}
          </CustomText>
        </AnimatedBubble>
      </TouchResponse>
    </SliderContainer>
  )
}

export default AnimatedSlider
