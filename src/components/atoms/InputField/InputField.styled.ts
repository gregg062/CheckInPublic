import styled from 'styled-components/native'

interface InputProps {
  textColor?: string
  backColor?: string
  bordered?: boolean
  error?: boolean
}

const Container = styled.View<{ small: boolean | undefined }>`
  flex-direction: column;
  width: ${({ small }) => (small ? '75%' : '100%')};
  margin-bottom: 16px;
  margin-right: 10px;
`

const StyledInput = styled.TextInput<InputProps>`
  width: 100%;
  height: 40px;
  padding: 10px;
  background-color: ${(InputProps) => InputProps.backColor || 'transparent'};
  border: ${(InputProps) => (InputProps.bordered ? '2px solid #fff' : 'none')};
  border-radius: 6px;
  color: ${(InputProps) => InputProps.textColor || '#000'};
  ${(InputProps) => InputProps.error && 'border-bottom-color: red'};
  ${(InputProps) => InputProps.error && 'border-bottom-width: 3px'};
`

export { Container, StyledInput }
