import React, { FC } from 'react'
import { Container } from './Box.styled'

interface BoxProps {
  flex?: number
  padding?: number
  margin?: number
  justify?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
  align?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
  flexDirection?: 'row' | 'column'
  backgroundColor?: string
}
const Box: FC<BoxProps> = ({
  flex,
  padding,
  margin,
  justify,
  align,
  flexDirection,
  backgroundColor,
  ...rest
}) => {
  return (
    <Container
      flex={flex}
      justify={justify}
      align={align}
      padding={padding}
      margin={margin}
      flexDirection={flexDirection}
      backgroundColor={backgroundColor}
      {...rest}
    />
  )
}

export default Box
