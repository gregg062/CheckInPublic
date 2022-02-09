import React, { useEffect, useState } from 'react'
import { Cta, CustomText, InputField, Spacer } from '../../components'
import { useAuthState } from '../../hooks/useAuthState'
import { colors } from '../../theme'
import { GradBack } from '../screens.styled'
import { AuthContainer, CtaContainer, HeaderBar } from './Auth.styled'
import * as Keychain from 'react-native-keychain'
import CloseIcon from '../../assets/icons/CloseIcon'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { userAccessStore } from '../../store/user'

const Auth = ({ navigation }: { navigation: any }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const authState = useAuthState()
  const [error, setError] = useState<boolean>(false)
  const [submitting, setSubmitting] = useState<boolean>(false)
  const store = userAccessStore()

  useEffect(() => {
    if (authState.user) {
      navigation.navigate('Home')
    }
  }, [authState])

  const submitLogin = async () => {
    try {
      store.setAccessInfo({
        org: 'orgOne',
      })
    } catch (e) {
      setError(true)
    }
  }

  const setKeys = async () => {
    await Keychain.setGenericPassword(email, password, {
      accessControl: Keychain.ACCESS_CONTROL.BIOMETRY_ANY_OR_DEVICE_PASSCODE,
    })
  }

  const getKeys = async () => {
    try {
      const options = {
        authenticationPrompt: {
          title: 'Sign In to CheckIn',
        },
      }
      const cred = await Keychain.getGenericPassword(options)
      if (cred) {
        setEmail(cred.username)
        setPassword(cred.password)
        submitLogin()
      }
    } catch (error) {
      console.log('Keys to the kingdom do not exist')
    }
  }

  useEffect(() => {
    //getKeys()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <AuthContainer>
      <GradBack
        start={{ x: 0, y: 0.2 }}
        end={{ x: 1, y: 1 }}
        colors={colors.darkGrad}
        style={{ padding: 30, paddingTop: 40, alignItems: 'center' }}
      >
        <HeaderBar>
          <TouchableOpacity
            onPress={() => {
              navigation.goBack()
            }}
          >
            <CloseIcon width={20} color={colors.gray} />
          </TouchableOpacity>
        </HeaderBar>
        <CustomText color={colors.white} type={'caps'}>
          Login to Check-In
        </CustomText>
        <Spacer size="huge" />
        <InputField
          backColor={colors.gray3}
          placeHolder="Email Address"
          value={email}
          onChangeText={e => {
            setEmail(e)
          }}
          error={!email.includes('@')}
          errorMsg="Enter a valid email address"
          keyboard="email-address"
        />
        <InputField
          secure
          backColor={colors.gray3}
          placeHolder="Password"
          value={password}
          onChangeText={e => {
            setPassword(e)
            if (e.length === 0) {
              setError(false)
            }
          }}
        />
        <Spacer size="xl" />
        <CtaContainer>
          <Cta
            disabled={!email || !password}
            backColor={email && password.length > 4 ? '#59C3C3' : '#2b5876'}
            textColor={email && password.length > 4 ? '#000' : '#aaa'}
            bold={!!email && password.length > 4}
            rounded
            sentIndicator={submitting && !error}
            buttonText="log in"
            action={() => {
              setSubmitting(true)
              submitLogin()
            }}
          />
        </CtaContainer>
        <Spacer size="md" />
        {error && (
          <CustomText color={colors.white} type="small">
            Invalid Login Information, please try again.
          </CustomText>
        )}
      </GradBack>
    </AuthContainer>
  )
}

export default Auth
