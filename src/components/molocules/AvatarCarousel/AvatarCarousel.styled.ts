import { TouchableOpacity } from 'react-native'
import Animated from 'react-native-reanimated'
import styled from 'styled-components/native'

const AvatarContainer = styled.View`
  width: 100%;
`
const AvatarButton = styled(Animated.View)`
  width: 180px;
`

const AvatarImage = styled.Image`
  height: 120px;
  width: 120px;
  border-radius: 60px;
`

const AvatarTitle = styled.View`
  padding: 20px;
  width: 100%;
`
export { AvatarTitle, AvatarContainer, AvatarButton, AvatarImage }
