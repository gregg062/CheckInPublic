import React, { FC } from 'react'
import { KeyboardTypeOptions } from 'react-native'
import { colors } from '../../../theme'
import CustomText from '../CustomText'
import Spacer from '../Spacer'
import { Container, StyledInput } from './InputField.styled'

interface InputProps {
  backColor?: string
  small?: boolean
  bordered?: boolean
  error?: boolean
  errorMsg?: string
  placeHolder?: string
  keyboard?: KeyboardTypeOptions
  value?: string
  onChangeText?: (text: string) => void
  onFocus?: () => void
  secure?: boolean
}
const InputField: FC<InputProps> = ({
  backColor,
  small,
  bordered,
  error,
  errorMsg,
  placeHolder,
  keyboard = 'default',
  value,
  onChangeText,
  onFocus,
  secure = false
}) => {
  return (
    <Container small={small}>
      <StyledInput
        backColor={backColor}
        bordered={bordered}
        error={error}
        placeholder={placeHolder}
        keyboardType={keyboard}
        value={value}
        onChangeText={onChangeText}
        onFocus={onFocus}
        secureTextEntry={secure}
      />
      <Spacer />
      {error && (
        <CustomText color={colors.white} type="small">
          {errorMsg || 'There is an error'}
        </CustomText>
      )}
    </Container>
  )
}

export default InputField
