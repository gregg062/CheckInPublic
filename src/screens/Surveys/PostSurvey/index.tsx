import React, { FC, useState } from 'react'
import { Platform, ScrollView } from 'react-native'
import CloseIcon from '../../../assets/icons/CloseIcon'
import { Cta, CustomText, InputField } from '../../../components'
import VerticalSlider from '../../../components/atoms/VerticalSlider'
import {
  CloseIconContainer,
  SubmitContainer
} from '../../../components/organisms/scrollableHeaderWrapper/scrollableHeaderWrapper.styled'
import { RootStackParamList } from '../../../routes/root'
import { StackNavigationProp } from 'react-navigation-stack/lib/typescript/src/vendor/types'
import { colors } from '../../../theme'
import { useAuthState } from '../../../hooks/useAuthState'
import Warning from '../../../components/atoms/Warning'
import { submitSurvey } from '../../../services/firebase'
import { userAccessStore } from '../../../store/user'
import { SurveyResults, SurveyType } from '../../../../types/types'
import { useToast } from '../../../providers/toastProvider'
import {
  Header,
  InfoContainer,
  InputColumn,
  InputContainer,
  InputRow,
  Styledkeyboard
} from './PostSurvey.styled'
import { transparentize } from 'polished'

interface InjuryProps {
  navigation: StackNavigationProp<RootStackParamList, 'Injury'>
}
const PostSurvey: FC<InjuryProps> = ({ navigation }) => {
  const [scrolling, setScrolling] = useState<boolean>(true)
  const auth = useAuthState()
  const info = userAccessStore()
  const [showWarning, setShowWarning] = useState<boolean>(false)
  const [type, setType] = useState<string>('')
  const [length, setLength] = useState<string>('')
  const [report, setReport] = useState<number>(0)
  const toast = useToast()

  return (
    <Styledkeyboard
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={20}
    >
      <ScrollView
        scrollEnabled={scrolling}
        keyboardShouldPersistTaps={'handled'}
      >
        <Header>
          <CloseIconContainer
            onPress={() => {
              navigation.navigate('Home')
            }}
          >
            <CloseIcon color={colors.white} />
          </CloseIconContainer>
          <SubmitContainer>
            <Cta
              rounded
              sentIndicator={!!auth.user}
              buttonText="Submit"
              backColor={transparentize(0.2, colors.white)}
              action={() => {
                const results: SurveyResults = {
                  type: SurveyType.R,
                  date: new Date().toString(),
                  sessionType: type,
                  sessionLength: parseInt(length),
                  RPE: report
                }
                if (auth.user) {
                  submitSurvey(auth?.user?.uid, info.accessInfo?.org, results)
                  navigation.navigate('Home')
                  toast({
                    text: '👍 RPE Report Submitted Successfully.'
                  })
                } else {
                  setShowWarning(true)
                }
              }}
            />
          </SubmitContainer>
        </Header>
        <InfoContainer>
          <InputContainer>
            <CustomText type="small" color={colors.white} gutterBottom={8}>
              Percieved Exertion
            </CustomText>
            <InputRow>
              <InputColumn right>
                <CustomText type="small" color={colors.white} gutterBottom={2}>
                  Type of session
                </CustomText>
                <InputField
                  backColor={colors.white}
                  placeHolder="Gym"
                  value={type}
                  onChangeText={(e) => {
                    setType(e)
                  }}
                />
              </InputColumn>
              <InputColumn>
                <CustomText type="small" color={colors.white} gutterBottom={2}>
                  Length of Session(min)
                </CustomText>
                <InputField
                  keyboard="numeric"
                  backColor={colors.white}
                  placeHolder="30"
                  value={length}
                  onChangeText={(e) => {
                    setLength(e.toString())
                  }}
                />
              </InputColumn>
            </InputRow>
          </InputContainer>
          <VerticalSlider
            disable={() => {
              setScrolling(!scrolling)
            }}
            reportedNumb={(input) => {
              setReport(input)
            }}
          />
        </InfoContainer>
      </ScrollView>
      {showWarning && (
        <Warning
          yesText="login Now!"
          yesAction={() => {
            navigation.navigate('Auth')
          }}
          noText={'close'}
          noAction={() => {
            setShowWarning(false)
          }}
          warningText="You need to login to change any settings"
        />
      )}
    </Styledkeyboard>
  )
}

export default PostSurvey
