import { transparentize } from 'polished'
import React, { FC, useEffect, useRef, useState } from 'react'
import { Text, TouchableOpacity, Dimensions } from 'react-native'
import { Animated, PanResponder, View } from 'react-native'
import { RpeNumbers } from '../../../library/staticObjects'
import { colors } from '../../../theme'
import CustomText from '../CustomText'

const { width } = Dimensions.get('window')

interface VSliderProps {
  disable: () => void
  grow?: boolean
  reportedNumb: (numb: number) => void
}

const VerticalSlider: FC<VSliderProps> = ({ disable, grow, reportedNumb }) => {
  const [pressed, setPressed] = useState<boolean>(false)
  const [numb, setNumb] = useState<number>(-40)

  const ylocal = useRef(new Animated.Value(0)).current
  const spacerOpac = useRef(new Animated.Value(0)).current
  const borderRad = useRef(new Animated.Value(20)).current
  const textOpac = useRef(new Animated.Value(1)).current

  const setResult = (numbIn: number) => {
    if (numbIn < 8) {
      reportedNumb(1)
    } else if (numbIn >= 8 && numbIn < 14) {
      reportedNumb(2)
    } else if (numbIn >= 14 && numbIn < 17) {
      reportedNumb(3)
    } else if (numbIn >= 17 && numbIn < 26) {
      reportedNumb(4)
    } else if (numbIn >= 26 && numbIn < 30) {
      reportedNumb(5)
    } else if (numbIn >= 30 && numbIn < 33) {
      reportedNumb(6)
    } else if (numbIn >= 33 && numbIn < 39) {
      reportedNumb(7)
    } else if (numbIn >= 39 && numbIn < 45) {
      reportedNumb(8)
    } else if (numbIn >= 45 && numbIn < 50) {
      reportedNumb(9)
    } else if (numbIn >= 50) {
      reportedNumb(10)
    }
  }
  const calcRPE = (numbIn: number) => {
    setResult(numbIn)
    console.log(numbIn)
    if (numbIn < 8) {
      return 'Very Light'
    } else if (numbIn >= 8 && numbIn < 14) {
      return 'Fairly Light'
    } else if (numbIn >= 14 && numbIn < 17) {
      return 'Moderate'
    } else if (numbIn >= 17 && numbIn < 26) {
      return 'Some What Hard'
    } else if (numbIn >= 26 && numbIn < 40) {
      return 'Hard'
    } else if (numbIn >= 40 && numbIn < 49) {
      return 'Very Hard'
    } else if (numbIn >= 49) {
      return 'Maximum Effort'
    }
  }

  useEffect(() => {
    Animated.timing(ylocal, {
      toValue: pressed ? 40 : 80,
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
      disable()
    },
    onPanResponderEnd: () => {
      setPressed(false)
      disable()
    },
    onMoveShouldSetPanResponder: () => false,
    onPanResponderMove: (e, gestureState) => {
      if (
        Math.floor(e.nativeEvent.pageY) > 200 &&
        Math.floor(e.nativeEvent.pageY) < 700
      ) {
        setNumb(e.nativeEvent.pageY - 740)
      }
    },
    onPanResponderTerminationRequest: () => false,
    onPanResponderRelease: async (e, { vx }) => {}
  })

  const rNumb = 200 / Math.floor((numb + 650) / 100)
  const gNumb = 20 * Math.floor((numb + 650) / 100)
  return (
    <View style={{ paddingHorizontal: 20, height: 580 }}>
      <Animated.View
        style={{
          flex: 1,
          position: 'relative',
          backgroundColor: `rgb(${rNumb < 240 ? rNumb : 255}, ${gNumb}, 10)`,
          borderTopLeftRadius: borderRad,
          borderTopRightRadius: borderRad,
          borderBottomLeftRadius: borderRad,
          borderBottomRightRadius: borderRad,
          transform: [{ scale: pressed && grow ? 1.05 : 1 }],
          zIndex: 1,
          alignItems: 'center'
        }}
      />
      <View
        style={{
          position: 'absolute',
          left: 10,
          flexDirection: 'column',
          width: 40,
          paddingLeft: 10,
          transform: [{ scale: pressed && grow ? 1.05 : 1 }],
          height: '100%',
          maxHeight: 540,
          zIndex: 20,
          justifyContent: 'space-evenly',
          alignItems: 'center'
        }}
      >
        {RpeNumbers.map((item) => {
          return (
            <CustomText bold color={colors.white}>
              {item}
            </CustomText>
          )
        })}
      </View>
      <TouchableOpacity
        style={{
          width: '100%',
          height: 40,
          borderRadius: 20,
          zIndex: 1,
          alignItems: 'center',
          shadowColor: colors.black,
          shadowOffset: {
            width: 2,
            height: 5
          },
          shadowOpacity: 0.2,
          shadowRadius: 8
        }}
        onPressIn={() => {
          setPressed(true)
        }}
        onPressOut={() => {
          setPressed(false)
        }}
      >
        <Animated.View
          style={{
            flex: 1,
            width: '70%',
            height: 40,
            flexDirection: 'column',
            backgroundColor: pressed
              ? colors.white
              : transparentize(0.5, colors.white),
            borderColor: `rgb(${rNumb < 240 ? rNumb : 255}, ${gNumb}, 10)`,
            borderWidth: pressed ? 3 : 1,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            borderBottomLeftRadius: 20,
            borderBottomRightRadius: 20,
            zIndex: 1,
            transform: [
              {
                translateY: numb
              },
              {
                scale: pressed ? 1.05 : 1
              }
            ],
            alignItems: 'center',
            justifyContent: 'center'
          }}
          {...pan.panHandlers}
        >
          <Text
            style={{
              fontWeight: '900',
              color: pressed ? colors.black : colors.white
            }}
          >
            {calcRPE(Math.floor(-numb / 10))}
          </Text>
        </Animated.View>
      </TouchableOpacity>
    </View>
  )
}

export default VerticalSlider
