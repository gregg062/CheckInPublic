import Animated from 'react-native-reanimated'
import styled from 'styled-components/native'
import { colors } from '../../../theme'

const AreaContainer = styled(Animated.View)`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: ${colors.gray4};
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  z-index: 8000;
`

const ButtonHeader = styled.View`
  padding: 10px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

const SaveContainer = styled.View`
  width: 80px;
`

const StyledFlatList = styled.FlatList`
  padding-left: 10px;
  margin-top: 40px;
`
export { AreaContainer, ButtonHeader, SaveContainer, StyledFlatList }
