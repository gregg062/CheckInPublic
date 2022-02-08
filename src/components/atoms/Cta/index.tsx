import React, { FC, ReactElement, useState } from 'react'
import { ActivityIndicator } from 'react-native'
import { colors } from '../../../theme'
import CustomText from '../CustomText'
import { Container, LinearGrad } from './Cta.styled'

interface CtaProps {
  buttonText: string
  buttonTextColor?: string
  action: () => void
  rounded?: boolean
  gradient?: boolean
  gradColors?: string[]
  backColor?: string
  square?: boolean
  textColor?: string
  bold?: boolean
  icon?: ReactElement
  sentIndicator?: boolean
  disabled?: boolean
  gutterBottom?: number
  bordered?: boolean
  borderedColor?: string
}
const Cta: FC<CtaProps> = ({
  buttonText = 'submit',
  action = () => {},
  rounded,
  gradient,
  backColor,
  square,
  textColor,
  bold,
  icon,
  sentIndicator,
  disabled,
  gutterBottom,
  bordered,
  borderedColor
}) => {
  const [submitted, setSubmitted] = useState(false)

  const renderCtaText = () => {
    if (sentIndicator && submitted) {
      return <ActivityIndicator color={colors.activity} />
    }
    return (
      <CustomText color={textColor} bold={bold}>
        {icon ? icon : buttonText}
      </CustomText>
    )
  }
  return (
    <Container
      disabled={disabled}
      onPress={() => {
        if (!disabled) {
          action()
          setSubmitted(true)
        }
      }}
      rounded={rounded}
      square={square}
      backColor={backColor}
      bordered={bordered}
      gutterBottom={gutterBottom}
      borderedColor={borderedColor}
    >
      {gradient ? (
        <LinearGrad
          colors={['#4c669f', '#3b5998', '#192f6a']}
          rounded={rounded}
        >
          <CustomText>{buttonText}</CustomText>
        </LinearGrad>
      ) : (
        renderCtaText()
      )}
    </Container>
  )
}

export default Cta
