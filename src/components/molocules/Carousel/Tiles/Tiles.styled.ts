import { Dimensions } from 'react-native'
import styled from 'styled-components/native'
import { tileTypes } from '..'
import { colors } from '../../../../theme'

interface ContainerProps {
  size: tileTypes
  rounded?: boolean
  vertical?: boolean
}

const { width, height } = Dimensions.get('window')

const calcWidth = (input: tileTypes) => {
  switch (input) {
    case tileTypes.SMALL: {
      return 120
    }
    case tileTypes.LARGE: {
      return width / 1.5
    }
    case tileTypes.TALL: {
      return width / 1.5
    }
    case tileTypes.WIDE: {
      return width - 40
    }
    case tileTypes.DETAILED: {
      return Math.floor(width * 0.33)
    }
    case tileTypes.PROFILE: {
      return Math.floor(width * 0.8)
    }
    default: {
      return null
    }
  }
}

const calcHeight = (input: tileTypes) => {
  switch (input) {
    case tileTypes.SMALL: {
      return 120
    }
    case tileTypes.LARGE: {
      return width / 1.5
    }
    case tileTypes.TALL: {
      return width / 1.2
    }
    case tileTypes.WIDE: {
      return width / 2
    }
    case tileTypes.DETAILED: {
      return Math.floor(width * 0.5)
    }
    case tileTypes.PROFILE: {
      return Math.floor(height * 0.7)
    }
    default: {
      return null
    }
  }
}

const Container = styled.View<ContainerProps>`
  width: ${({ size, vertical }) => (vertical ? '45%' : `${calcWidth(size)}px`)};
  height: ${(ContainerProps) => calcHeight(ContainerProps.size)}px;
  border-radius: ${(ContainerProps) => (ContainerProps.rounded ? 10 : 4)}px;
  background-color: ${colors.gray2};
  border-radius: 8px;
`

const Overlay = styled.TouchableOpacity`
  height: 100%;
  width: 100%;
  overflow: hidden;
  justify-content: center;
  align-items: center;
  background-color: #00000080;
`
const StyledBackground = styled.ImageBackground`
  overflow: hidden;
  border-radius: 8px;
`
export { Container, Overlay, StyledBackground }
