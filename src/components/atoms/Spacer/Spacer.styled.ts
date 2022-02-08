import styled from 'styled-components/native'

interface SpacerProps {
  horizontal: boolean
  size: string
}
const calcSize = (selected: string) => {
  if (selected === 'sm') {
    return 8
  }
  if (selected === 'md') {
    return 12
  }
  if (selected === 'lg') {
    return 16
  }
  if (selected === 'xl') {
    return 20
  }
  if (selected === 'xxl') {
    return 24
  }
  if (selected === 'huge') {
    return 48
  }
  return 4
}

const SpacerView = styled.View<SpacerProps>`
  margin-left: ${({ horizontal, size }) =>
    horizontal ? calcSize(size || 'xs') : 0}px;
  margin-bottom: ${({ horizontal, size }) =>
    !horizontal ? calcSize(size || 'xs') : 0}px;
`

export { SpacerView }
