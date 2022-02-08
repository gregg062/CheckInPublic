import Animated from 'react-native-reanimated'
import styled from 'styled-components/native'
import { colors } from '../../../theme'

const MenuContainer = styled(Animated.View)<{ menuOpen: boolean }>`
  position: absolute;
  bottom: 40px;
  left: 20px;
  background-color: ${colors.white};
  height: 50px;
  border-radius: 40px;
  padding-left: ${({ menuOpen }) => (menuOpen ? 10 : 0)}px;
  overflow: hidden;
`

const TouchZone = styled.TouchableOpacity<{ menuOpen: boolean }>`
  flex: 1;
  flex-direction: row;
  justify-content: ${({ menuOpen }) => (menuOpen ? 'flex-start' : 'center')};
  align-items: center;
`

const OptionsContainer = styled(Animated.View)<{ menuOpen: boolean }>`
  flex: 1;
  flex-direction: row;
  display: ${({ menuOpen }) => (menuOpen ? 'flex' : 'none')};
  justify-content: space-evenly;
  align-items: center;
`

const MenuIconContainer = styled.View`
  justify-content: center;
  align-items: center;
`

const AvatarContainer = styled.TouchableOpacity`
  position: absolute;
  right: 20px;
  bottom: 45px;
  height: 45px;
  width: 45px;
  border-radius: 25px;
  background-color: #aaa;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`

const AvatarImg = styled.Image`
  height: 45px;
  width: 45px;
`

export {
  MenuContainer,
  TouchZone,
  OptionsContainer,
  MenuIconContainer,
  AvatarContainer,
  AvatarImg
}
