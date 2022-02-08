import React, { FC, useState } from 'react'
import { ImageSourcePropType } from 'react-native'
import Animated, { useValue } from 'react-native-reanimated'
import CloseIcon from '../../../assets/icons/CloseIcon'
import { Cta } from '../..'
import Toast from '../../atoms/Toast'
import {
  AnimatedHeader,
  BottomBanner,
  CloseIconContainer,
  Container,
  StyledScrollView,
  SubmitContainer
} from './scrollableHeaderWrapper.styled'
import AnimatedImgHeader from '../../atoms/AnimatedImgHeader'
import { FirebaseAuthTypes } from '@react-native-firebase/auth'
import Warning from '../../atoms/Warning'
import { useAuthState } from '../../../hooks/useAuthState'
import { colors } from '../../../theme'
import { transparentize } from 'polished'

interface SurveyProps {
  image: ImageSourcePropType
  userInfo: FirebaseAuthTypes.User | undefined
  submit: () => void
  close: () => void
  title: string
  withToast?: boolean
  showBanner?: boolean
  displayToast?: boolean
  warningAction?: () => void
}

const OPAC_DIVISOR = 120
const HEIGHT_DIVISOR = 4
const ScrollHeaderWrapper: FC<SurveyProps> = ({
  image,
  userInfo,
  submit,
  close,
  title,
  withToast,
  showBanner,
  displayToast,
  warningAction,
  children
}) => {
  const height = useValue<number>(0)
  const opac = useValue<number>(1)
  const value = useValue(1)
  const newSize = value.interpolate({
    inputRange: [0, 280],
    outputRange: [1, height],
    extrapolate: Animated.Extrapolate.CLAMP
  })
  const [showWarning, setShowWarning] = useState<boolean>(false)
  const auth = useAuthState()

  return (
    <Container>
      <AnimatedHeader
        style={{
          opacity: opac,
          transform: [{ scale: newSize }]
        }}
      >
        <CloseIconContainer onPress={close}>
          <CloseIcon color={colors.white} />
        </CloseIconContainer>
        <SubmitContainer>
          <Cta
            rounded
            sentIndicator={!!userInfo}
            buttonText="Submit"
            backColor={transparentize(0.2, colors.white)}
            action={() => {
              if (auth.user) {
                submit()
              } else {
                console.log('no profile')
                setShowWarning(true)
              }
            }}
          />
        </SubmitContainer>
      </AnimatedHeader>
      <AnimatedImgHeader
        newHeight={height}
        image={image}
        title={title}
        height={280}
        newOpacity={opac}
        logoOpacity={opac}
        loaded={() => {}}
      />
      <StyledScrollView
        contentContainerStyle={{ paddingBottom: 400 }}
        showsVerticalScrollIndicator={false}
        scrollEventThrottle={16}
        onScroll={(event) => {
          const scrollValue = event.nativeEvent.contentOffset.y
          height.setValue(scrollValue < 0 ? -scrollValue / HEIGHT_DIVISOR : 1)
          opac.setValue(-scrollValue < 0 ? 1 - scrollValue / OPAC_DIVISOR : 1)
        }}
      >
        {children}
      </StyledScrollView>
      {withToast && <Toast shown={displayToast} closeAction={close} />}
      {showBanner && <BottomBanner />}
      {showWarning && (
        <Warning
          warningText="You must be logged in to check-in"
          yesText="log in now!"
          yesAction={() => {
            warningAction && warningAction()
          }}
          noAction={() => {
            setShowWarning(false)
          }}
          noText="not right now"
        />
      )}
    </Container>
  )
}

export default ScrollHeaderWrapper
