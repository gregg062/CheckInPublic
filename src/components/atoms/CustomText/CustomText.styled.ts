import styled from 'styled-components/native'

interface TextProps {
  color?: string
  bold?: boolean
  type?: 'title' | 'label' | 'body' | 'small' | 'xSmall' | 'caps'
  align?: 'left' | 'center' | 'right'
  gutterBottom?: number
}

const calcSize = (variant: string) => {
  if (variant === 'title') {
    return 26
  }
  if (variant === 'label') {
    return 20
  }
  if (variant === 'body') {
    return 16
  }
  if (variant === 'small') {
    return 12
  }
  if (variant === 'xSmall') {
    return 8
  }
  if (variant === 'caps') {
    return 16
  }
}

const StyledText = styled.Text<TextProps>`
  color: ${(TextProps) => TextProps.color || '#000'};
  font-size: ${(TextProps) => calcSize(TextProps.type || 'body')}px;
  font-weight: ${(TextProps) => (TextProps.bold ? 'bold' : '400')};
  ${({ type }) => type === 'caps' && 'text-transform: uppercase'};
  text-align: ${(TextProps) => TextProps.align || 'left'};
  margin-bottom: ${(TextProps) =>
    TextProps.gutterBottom ? TextProps.gutterBottom : 0}px;
`

export { StyledText }
