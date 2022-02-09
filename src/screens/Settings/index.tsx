import React, { useEffect, useState } from 'react'
import { Switch, Keyboard } from 'react-native'
import { CustomText, InputField } from '../../components'
import AvatarCarousel from '../../components/molocules/AvatarCarousel'
import { colors } from '../../theme'
import DateTimePickerModal from 'react-native-modal-datetime-picker'
import { useAuthState } from '../../hooks/useAuthState'
import { GradBack } from '../screens.styled'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Warning from '../../components/atoms/Warning'
import { cancelReminder, createReminder } from '../../services/notifications'
import {
  ButtonContainer,
  EditNameContainer,
  Line,
  ReminderContainer,
  SafeContainer,
  SectionHeader,
  StyledScroll,
} from './Settings.styled'

enum ReminderTypes {
  RPE = 'rpe',
  MORNING = 'morning',
}

const Settings = ({ navigation }: { navigation: any }) => {
  const [show, setShow] = useState(false)
  const [morningReminder, setMorningReminder] = useState<boolean>(false)
  const [userName, setUserName] = useState<string>()
  const [update, setUpdate] = useState<boolean>(false)
  const { user } = useAuthState()
  const [displayWarning, setDisplayWarning] = useState<boolean>(false)

  const handleCancel = () => {
    setMorningReminder(false)
    setShow(false)
  }

  const handleConfirm = (date: any) => {
    setShow(false)
    createReminder(date)
  }

  const getInfo = async () => {
    if (user) {
      setUserName(user.displayName)
    }
  }

  useEffect(() => {
    if (update) {
      setTimeout(() => {
        setUpdate(false)
      }, 1500)
    }
  }, [update])

  useEffect(() => {
    if (user) {
      getInfo()
    }
  }, [user])

  useEffect(() => {
    if (!morningReminder) {
      cancelReminder()
    }
  }, [morningReminder])

  return (
    <SafeContainer>
      <StyledScroll keyboardShouldPersistTaps="never">
        <SectionHeader>
          <CustomText color={colors.white} type="label">
            Profile Settings
          </CustomText>
          <Line />
        </SectionHeader>
        <EditNameContainer>
          <InputField
            backColor={colors.white}
            small
            placeHolder="Users name"
            value={userName}
            onChangeText={newName => {
              setUserName(newName)
            }}
          />
          <ButtonContainer>
            <GradBack
              style={{
                borderRadius: 20,
                justifyContent: 'center',
                alignItems: 'center',
              }}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              colors={user ? colors.brightGrad : colors.disabledGrad}
            >
              <TouchableOpacity
                onPress={() => {
                  Keyboard.dismiss()
                  if (userName && user) {
                    setUpdate(true)
                  } else {
                    setDisplayWarning(true)
                  }
                }}
              >
                <CustomText bold color={user ? colors.white : colors.gray}>
                  {update ? 'saved' : 'save'}
                </CustomText>
              </TouchableOpacity>
            </GradBack>
          </ButtonContainer>
        </EditNameContainer>
        <AvatarCarousel
          userId={user?.displayName}
          noAction={() => {
            setDisplayWarning(true)
          }}
        />
        <SectionHeader>
          <CustomText color={colors.white} type="label">
            Reminder Settings
          </CustomText>
          <Line />
        </SectionHeader>
        <ReminderContainer>
          <CustomText color={colors.white}>Daily Reminder:</CustomText>
          <Switch
            value={morningReminder}
            trackColor={{ true: colors.highlight }}
            onValueChange={e => {
              if (user) {
                setMorningReminder(e)
                if (e) {
                  setShow(true)
                }
              } else {
                setDisplayWarning(true)
              }
            }}
          />
        </ReminderContainer>
        <DateTimePickerModal
          isVisible={show}
          mode="time"
          onConfirm={handleConfirm}
          onCancel={handleCancel}
        />
        {displayWarning && (
          <Warning
            yesText="login Now!"
            yesAction={() => {
              navigation.navigate('Auth')
            }}
            noText={'close'}
            noAction={() => {
              setDisplayWarning(false)
            }}
            warningText="You need to login to change any settings"
          />
        )}
      </StyledScroll>
    </SafeContainer>
  )
}

export default Settings
