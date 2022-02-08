import React, { FC, ReactElement, useEffect, useRef } from 'react'
import Animated, { Easing, useValue } from 'react-native-reanimated'
import { colors } from '../../../theme'
import CustomText from '../CustomText'
import { ToastContainer } from './Toast.styled'

interface ToastProps {
  icon?: ReactElement
  text?: string
  closeAction?: () => void
  shown?: boolean
}

const Toast: FC<ToastProps> = ({ shown = false, closeAction = () => {} }) => {
  const showToast = useRef(useValue(-250)).current
  const opacToast = useRef(useValue(0)).current

  useEffect(() => {
    Animated.timing(showToast, {
      toValue: shown ? 0 : -250,
      duration: 300,
      easing: Easing.linear
    }).start()

    Animated.timing(opacToast, {
      toValue: 1,
      duration: 200,
      easing: Easing.linear
    }).start()

    if (shown) {
      setTimeout(() => {
        closeAction()
      }, 3000)
    }
  }, [shown])

  return (
    <ToastContainer
      style={{
        right: showToast,
        opacity: opacToast
      }}
    >
      <CustomText type={'title'} bold color={colors.white}>
        👍
      </CustomText>
      <CustomText bold>Your results have been submitted.</CustomText>
    </ToastContainer>
  )
}

export default Toast
