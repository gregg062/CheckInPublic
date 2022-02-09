import { NavigationContainerRef } from '@react-navigation/native'
import React, { FC, useEffect, useRef, useState } from 'react'
import { TouchableOpacity } from 'react-native'
import { RootStackParamList } from '../../../routes/root'
import { CustomText } from '../..'
import UpArrow from '../../../assets/icons/upArrow'
import Animated, { useValue, Easing } from 'react-native-reanimated'
import DownArrow from '../../../assets/icons/downArrow'
import HomeIcon from '../../../assets/icons/homeIcon'
import ProfileIcon from '../../../assets/icons/profileIcon'
import SettingsIcon from '../../../assets/icons/settingsIcon'
import { colors } from '../../../theme'
import { useAuthState } from '../../../hooks/useAuthState'
import {
  AvatarContainer,
  AvatarImg,
  MenuContainer,
  MenuIconContainer,
  OptionsContainer,
  TouchZone,
} from './Menu.styled'
import { menuOptions } from '../../../../types/types'
import { GradBack } from '../../../screens/screens.styled'
import AvatarIcon from '../../../assets/icons/AvatarIcon'

type Props = {
  nav: NavigationContainerRef<RootStackParamList>
  current: string
  change: boolean
}
const Menu: FC<Props> = ({ nav, current, change }) => {
  const expandMenu = useRef(useValue(40))
  const menuOpacity = useRef(useValue(1))
  const [menuOpen, setMenuOpen] = useState<boolean>(false)
  const auth = useAuthState()
  const [currentRoute, setCurrentRoute] = useState<string>('home')

  console.log(currentRoute, 'currentRoute')
  useEffect(() => {
    setMenuOpen(false)
  }, [change, auth])

  console.log(auth.user, 'auth.user')

  useEffect(() => {
    Animated.timing(expandMenu.current, {
      toValue: menuOpen ? 240 : 50,
      duration: menuOpen ? 200 : 100,
      easing: Easing.inOut(Easing.ease),
    }).start()
    Animated.timing(menuOpacity.current, {
      toValue: menuOpen ? 1 : 0,
      duration: 600,
      easing: Easing.linear,
    }).start()
  }, [menuOpen])

  const renderNav = (route: string) => {
    if (route === 'Home') {
      nav?.navigate('Home')
    } else if (route === 'Profile') {
      nav?.navigate('Profile')
    } else if (route === 'Settings') {
      nav?.navigate('Settings')
    }
  }

  const menuItems: menuOptions[] = [
    {
      icon: (
        <HomeIcon
          width={30}
          color={current === 'Home' ? colors.black : colors.gray}
        />
      ),
      text: 'Home',
    },
    {
      icon: (
        <ProfileIcon
          width={30}
          color={current === 'Profile' ? colors.black : colors.gray}
        />
      ),
      text: 'Profile',
    },
    {
      icon: (
        <SettingsIcon
          width={30}
          color={current === 'Settings' ? colors.black : colors.gray}
        />
      ),
      text: 'Settings',
    },
  ]

  return (
    <>
      <MenuContainer
        menuOpen={menuOpen}
        style={{
          width: expandMenu.current,
        }}
      >
        <TouchZone
          menuOpen={menuOpen}
          activeOpacity={0.8}
          onPress={() => {
            setMenuOpen(!menuOpen)
          }}
        >
          {menuOpen ? <DownArrow width={25} /> : <UpArrow width={20} />}
          <OptionsContainer
            menuOpen={menuOpen}
            style={{
              opacity: menuOpacity.current,
            }}
          >
            {menuItems.map((item, index) => {
              return (
                <TouchableOpacity
                  key={index}
                  onPress={() => {
                    renderNav(item.text)
                    setCurrentRoute(item.text)
                  }}
                >
                  <MenuIconContainer>
                    {item.icon}
                    <CustomText
                      type="xSmall"
                      color={current === item.text ? colors.black : colors.gray}
                      bold={current === item.text}
                    >
                      {item.text}
                    </CustomText>
                  </MenuIconContainer>
                </TouchableOpacity>
              )
            })}
          </OptionsContainer>
        </TouchZone>
      </MenuContainer>
      {currentRoute !== 'Profile' && (
        <AvatarContainer
          activeOpacity={0.7}
          onPress={() => {
            nav?.navigate('Profile')
          }}
        >
          {auth.user?.photo ? (
            <AvatarImg source={auth.user?.photo} />
          ) : (
            <GradBack
              start={{ x: 0, y: 0.2 }}
              end={{ x: 1, y: 1 }}
              colors={colors.brightGrad}
              style={{
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <AvatarIcon color={colors.white} width={20} />
            </GradBack>
          )}
        </AvatarContainer>
      )}
    </>
  )
}

export default Menu
