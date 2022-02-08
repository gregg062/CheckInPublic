import { RouteProp } from '@react-navigation/native'
import React, { FC, useRef, useState } from 'react'
import { ImageSourcePropType } from 'react-native'
import { StackNavigationProp } from 'react-navigation-stack/lib/typescript/src/vendor/types'
import { CustomText } from '../../../components'
import { RootStackParamList } from '../../../routes/root'
import AnimatedSlider from '../../../components/atoms/Slider'
import {
  FatigueSlider,
  MentalitySlider,
  MoodSlider,
  morningStartingPoint,
  SleepSlider,
  SorenessSlider
} from '../../../library/staticObjects'
import { submitSurvey } from '../../../services/firebase'
import { userAccessStore } from '../../../store/user'
import { SurveyResults } from '../../../../types/types'
import ScrollHeaderPage from '../../../components/organisms/scrollableHeaderWrapper'
import { useAuthState } from '../../../hooks/useAuthState'
import { MorningContainer } from './Morning.styled'
import { colors } from '../../../theme'

interface SurveyProps {
  image: ImageSourcePropType
  userId: string
  route: RouteProp<RootStackParamList, 'Morning'>
  navigation: StackNavigationProp<RootStackParamList, 'Morning'>
}

const Morning: FC<SurveyProps> = ({ route, navigation }) => {
  const { item } = route.params
  const auth = useAuthState()
  const info = userAccessStore()
  const results = useRef<SurveyResults>(morningStartingPoint)
  const [complete, setComplete] = useState<boolean>(false)

  return (
    <ScrollHeaderPage
      image={item.image}
      userInfo={auth.user}
      title="Morning Check-In"
      submit={() => {
        if (auth.user) {
          setComplete(true)
          submitSurvey(auth?.user?.uid, info.accessInfo?.org, results.current)
        }
      }}
      close={() => {
        navigation.navigate('Home')
      }}
      withToast
      showBanner
      displayToast={complete}
      warningAction={() => {
        navigation.navigate('Auth')
      }}
    >
      <MorningContainer>
        <CustomText color={colors.gray}>
          Daily wellness check in, self-care is not selfish.
        </CustomText>
      </MorningContainer>
      <AnimatedSlider
        prePadded={false}
        title="Hours since last meal?"
        highNumb={10}
        numbered
        grow
        showUpper
        invert
        onChange={(value: number) => {
          results.current.mealHours = value
        }}
      />
      <AnimatedSlider
        prePadded={false}
        title="How many hours did you sleep last night?"
        highNumb={10}
        numbered
        grow
        showUpper
        onChange={(value: number) => {
          results.current.sleepHours = value
        }}
      />
      <AnimatedSlider
        prePadded={false}
        gradient
        title="How rested do you feel from sleeping last night?"
        highNumb={10}
        options={SleepSlider}
        onChange={(value: string) => {
          results.current.sleepRating = value
        }}
      />
      <AnimatedSlider
        prePadded={false}
        gradient
        title="How does your body feel physically today?"
        highNumb={10}
        options={FatigueSlider}
        onChange={(value: string) => {
          results.current.bodyRating = value
        }}
      />
      <AnimatedSlider
        prePadded={false}
        gradient
        title="How much muscle pain are you experiencing?"
        highNumb={10}
        options={SorenessSlider}
        onChange={(value: string) => {
          results.current.sorenessRating = value
        }}
      />
      <AnimatedSlider
        prePadded={false}
        gradient
        title="How would you describe your mood today?"
        highNumb={10}
        options={MoodSlider}
        onChange={(value: string) => {
          results.current.moodRating = value
        }}
      />
      <AnimatedSlider
        prePadded={false}
        gradient
        title="How mentally attentive are you today?"
        highNumb={10}
        options={MentalitySlider}
        onChange={(value: string) => {
          results.current.mentalityRating = value
        }}
      />
    </ScrollHeaderPage>
  )
}

export default Morning
