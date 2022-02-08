import styled from 'styled-components/native'
import { colors } from '../../theme'

const ProfileContainer = styled.View`
  flex: 1;
  background-color: ${colors.background};
`
const StyledSafe = styled.SafeAreaView`
    flex: 1;
    backgroundColor: ${colors.background}
    align-items: center;
    padding: 20px;
    margin-bottom: 80px;
`

const StyledScroll = styled.ScrollView`
  height: 100%;
  backgroundcolor: ${colors.background};
`
const AvatarContainer = styled.View`
  height: 120px;
  width: 120px;
  border-radius: 80px;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`
const ProfileAvatar = styled.Image`
  height: 120px;
  width: 120px;
  border-radius: 80px;
  margin-bottom: 16px;
`
const Divider = styled.View<{ loggedIn: boolean }>`
  width: 80%;
  height: 0.5px;
  background-color: rgba(255, 255, 255, 0.2);
  margin: ${({ loggedIn }) => (loggedIn ? 16 : 12)}px;
`
const CtaContainer = styled.View`
  width: 75%;
  margin-top: 28px;
`

const SignOutContainer = styled.View`
  width: 100%;
  align-items: flex-end;
  position: absolute;
  top: 50px;
  right: 10px;
`

const SignOutButton = styled.View`
  width: 80px;
`
export {
  StyledSafe,
  StyledScroll,
  ProfileAvatar,
  AvatarContainer,
  Divider,
  CtaContainer,
  SignOutContainer,
  SignOutButton,
  ProfileContainer
}
