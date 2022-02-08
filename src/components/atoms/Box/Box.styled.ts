import styled from 'styled-components/native'

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

const Container = styled.View<BoxProps>`
  flex: ${({ flex }) => flex || 0};
  width: 100%;
  padding: ${({ padding }) => (padding ? padding : '4')}px;
  padding: ${({ margin }) => (margin ? margin : '2')}px;
  background-color: ${({ backgroundColor }) =>
    backgroundColor || 'transparent'};
  justify-content: ${({ justify }) => justify || 'flex-start'};
  align-items: ${({ align }) => align || 'flex-start'};
  flex-direction: ${(BoxProps) => BoxProps.flexDirection || null};
`

export { Container }
