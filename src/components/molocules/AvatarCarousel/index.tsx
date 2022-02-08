import React, { useEffect, useRef, FC, useState } from 'react'
import { Dimensions, FlatList, View } from 'react-native'
import Animated, { Easing } from 'react-native-reanimated'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { CustomText } from '../..'
import { GradBack } from '../../../screens/screens.styled'
import { Avatars } from '../../../library/staticObjects'
import { updateUserProfile } from '../../../services/firebase'
import {
  AvatarButton,
  AvatarContainer,
  AvatarImage,
  AvatarTitle
} from './AvatarCarousel.styled'
import { colors } from '../../../theme'
import { useAuthState } from '../../../hooks/useAuthState'

interface Props {
  opened?: boolean
  userId: string | undefined
  noAction?: () => void
}
const { width } = Dimensions.get('window')
const AvatarCarousel: FC<Props> = ({ userId, noAction }) => {
  const [open, setOpen] = useState(false)
  const heightAnim = useRef(new Animated.Value(40)).current
  const buttonHeight = useRef(new Animated.Value(40)).current
  const carouselOpac = useRef(new Animated.Value(0)).current
  const buttonOpac = useRef(new Animated.Value(1)).current
  const containerWidth = useRef(new Animated.Value(180)).current
  const { user } = useAuthState()

  useEffect(() => {
    Animated.timing(heightAnim, {
      toValue: open ? 200 : 40,
      duration: open ? 400 : 200,
      easing: Easing.linear
    }).start()
    Animated.timing(containerWidth, {
      toValue: open ? width : 180,
      duration: open ? 400 : 200,
      easing: Easing.linear
    }).start()
    Animated.timing(carouselOpac, {
      toValue: open ? 1 : 0,
      duration: open ? 600 : 200,
      easing: Easing.linear
    }).start()
    Animated.timing(buttonHeight, {
      toValue: open ? 0 : 40,
      duration: 300,
      easing: Easing.linear
    }).start()
    Animated.timing(buttonOpac, {
      toValue: open ? 0 : 1,
      duration: open ? 400 : 600,
      easing: Easing.linear
    }).start()
  }, [open])

  return (
    <AvatarContainer>
      <AvatarButton
        style={{
          height: buttonHeight,
          opacity: buttonOpac
        }}
      >
        <GradBack
          style={{
            borderRadius: 20,
            justifyContent: 'center',
            alignItems: 'center'
          }}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          colors={user ? colors.brightGrad : colors.disabledGrad}
        >
          <TouchableOpacity
            onPress={() => {
              if (user) {
                setOpen(!open)
              } else {
                noAction && noAction()
              }
            }}
          >
            <CustomText bold color={user ? colors.white : colors.gray}>
              Change my Avatar
            </CustomText>
          </TouchableOpacity>
        </GradBack>
      </AvatarButton>
      <Animated.View
        style={{
          position: 'relative',
          height: heightAnim,
          width: containerWidth,
          overflow: 'hidden',
          opacity: carouselOpac
        }}
      >
        <AvatarTitle>
          <CustomText color={colors.white} type="caps">
            Select your avatar.
          </CustomText>
        </AvatarTitle>
        <FlatList
          keyExtractor={(item, index) => `${item} + ${index}`}
          data={Avatars}
          horizontal
          renderItem={({ item }) => {
            return (
              <TouchableOpacity
                onPress={() => {
                  setOpen(false)
                  if (userId) {
                    updateUserProfile(userId, 'photo', item)
                  }
                }}
              >
                <AvatarImage source={{ uri: item }} />
              </TouchableOpacity>
            )
          }}
          ListHeaderComponent={() => {
            return <View style={{ padding: 10 }} />
          }}
          ItemSeparatorComponent={() => {
            return <View style={{ padding: 10 }} />
          }}
        />
      </Animated.View>
    </AvatarContainer>
  )
}

export default AvatarCarousel
