import styled from 'styled-components/native'
import { colors } from '../../../../theme'

const BodyPartContainer = styled.View<{ selected: boolean }>`
  width: 150px;
  height: 150px;
  justify-content: center;
  align-items: center;
  background-color: ${({ selected }) => (selected ? '#0f0' : '#0d324d')};
  border-radius: 8px;
  padding: 4px;
`
export { BodyPartContainer }
