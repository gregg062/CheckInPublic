import React, { FC } from 'react'
import { Text } from 'react-native'
import { StyledText } from './CustomText.styled'

interface TextProps {
  type?: 'title' | 'label' | 'body' | 'small' | 'xSmall' | 'caps'
  color?: string
  bold?: boolean
  align?: 'left' | 'center' | 'right'
  gutterBottom?: number
}
const CustomText: FC<TextProps> = ({
  type,
  children,
  color,
  bold,
  align,
  gutterBottom,
  ...rest
}) => {
  return (
    <StyledText
      type={type || 'body'}
      color={color}
      bold={bold}
      align={align}
      gutterBottom={gutterBottom}
    >
      {children}
    </StyledText>
  )
}

export default CustomText
