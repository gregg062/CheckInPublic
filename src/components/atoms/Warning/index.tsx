import React, { FC, useEffect } from 'react'
import Animated, { Easing, useValue } from 'react-native-reanimated'
import { GradBack } from '../../../screens/screens.styled'
import { colors } from '../../../theme'
import Cta from '../Cta'
import CustomText from '../CustomText'
import { Overlay, WarningContainer } from './Warning.styled'

interface WarningProps {
  yesAction: () => void
  noAction?: () => void
  warningText: string
  yesText: string
  noText?: string
}
const Warning: FC<WarningProps> = ({
  yesAction,
  warningText,
  yesText,
  noAction,
  noText
}) => {
  const opac = useValue(0)

  useEffect(() => {
    Animated.timing(opac, {
      toValue: 1,
      duration: 500,
      easing: Easing.linear
    }).start()
  }, [])

  return (
    <Overlay>
      <WarningContainer
        style={{
          opacity: opac
        }}
      >
        <GradBack
          start={{ x: 0, y: 0.2 }}
          end={{ x: 1, y: 1 }}
          colors={colors.brightGrad}
          style={{
            padding: 20,
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <CustomText align="center" type="label" gutterBottom={16}>
            {warningText}
          </CustomText>
          <Cta
            rounded
            buttonText={yesText}
            action={yesAction}
            gutterBottom={16}
          />
          {noText && noAction && (
            <Cta
              backColor="transparent"
              bordered
              rounded
              buttonText={noText}
              action={noAction}
            />
          )}
        </GradBack>
      </WarningContainer>
    </Overlay>
  )
}

export default Warning
