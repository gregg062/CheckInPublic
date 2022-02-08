import React, { FC, useRef, useState } from 'react'
import { ImageSourcePropType } from 'react-native'
import { CustomText, Spacer } from '../../../components'
import { colors } from '../../../theme'
import SwitchSelector from 'react-native-switch-selector'
import AnimatedSlider from '../../../components/atoms/Slider'
import { useValue } from 'react-native-reanimated'
import { RouteProp } from '@react-navigation/native'
import { RootStackParamList } from '../../../routes/root'
import { StackNavigationProp } from 'react-navigation-stack/lib/typescript/src/vendor/types'
import AreaModal from '../../../components/molocules/AreaModal'
import DateTimePickerModal from 'react-native-modal-datetime-picker'
import dayjs from 'dayjs'
import LocalizedFormat from 'dayjs/plugin/localizedFormat'
import { SeveritySlider } from '../../../library/staticObjects'
import ScrollHeaderWrapper from '../../../components/organisms/scrollableHeaderWrapper'
import { SurveyResults, SurveyType } from '../../../../types/types'
import { submitSurvey } from '../../../services/firebase'
import { useAuthState } from '../../../hooks/useAuthState'
import { userAccessStore } from '../../../store/user'
import { SurveyDescriptionContainer } from '../Surveys.styled'
import {
  BodyButton,
  DateContainer,
  DateInput,
  InjuryContainer
} from './Injury.styled'
import { useToast } from '../../../providers/toastProvider'

dayjs.extend(LocalizedFormat)

interface InjuryProps {
  image: ImageSourcePropType
  route: RouteProp<RootStackParamList, 'Injury'>
  navigation: StackNavigationProp<RootStackParamList, 'Injury'>
}

const Injury: FC<InjuryProps> = ({ route, navigation }) => {
  const { item } = route.params
  const buttonOpac = useValue<number>(1)
  const auth = useAuthState()
  const info = userAccessStore()
  const [modalOpen, setModalOpen] = useState<boolean>(false)
  const [selectedDate, setSelectedDate] = useState<string>()
  const [show, setShow] = useState(false)
  const toast = useToast()
  const results = useRef<SurveyResults>({
    type: SurveyType.I,
    date: '',
    injuryType: '',
    severity: 0,
    injuryAreas: []
  })

  const handleCancel = () => {
    setShow(false)
  }

  console.log(results.current.injuryAreas)
  const handleConfirm = (date: any) => {
    setShow(false)
    setSelectedDate(dayjs(date).format('llll'))
  }
  return (
    <>
      <ScrollHeaderWrapper
        image={item.image}
        userInfo={auth.user}
        title="Injury Report"
        submit={() => {
          if (auth) {
            submitSurvey(auth.user?.uid, info.accessInfo?.org, results.current)
            toast({
              text: '👍 Injury Report Submitted Successfully.'
            })
          }
          navigation.navigate('Home')
        }}
        close={() => {
          navigation.navigate('Home')
        }}
        warningAction={() => {
          navigation.navigate('Auth')
        }}
      >
        <SurveyDescriptionContainer>
          <CustomText color={colors.gray3}>
            Use this form to report any injuries you experience.
          </CustomText>
        </SurveyDescriptionContainer>
        <InjuryContainer>
          <CustomText color={colors.white}>
            When did the injury occur?
          </CustomText>
          <DateContainer
            onPress={() => {
              setShow(true)
            }}
          >
            <DateInput>
              <CustomText>{selectedDate}</CustomText>
            </DateInput>
          </DateContainer>
          <CustomText color={colors.white}>Type of Injury</CustomText>
          <SwitchSelector
            style={{ marginBottom: 25, marginTop: 10 }}
            initial={0}
            onPress={(value: string) => {
              results.current.injuryType = value
            }}
            textColor={'#4e4376'}
            selectedColor={colors.white}
            buttonColor={'#2b5876'}
            borderColor={'#2b5876'}
            hasPadding
            options={[
              { label: 'Contact', value: 'c' },
              { label: 'Non Contact', value: 'nc' }
            ]}
          />
          <AnimatedSlider
            prePadded
            title="Severity"
            gradient
            invert
            highNumb={10}
            options={SeveritySlider}
            onChange={() => {}}
          />
          <Spacer size="xxl" />
          <BodyButton
            onPress={() => {
              setModalOpen(!modalOpen)
              if (modalOpen) {
                buttonOpac.setValue(1)
              } else {
                buttonOpac.setValue(0)
              }
            }}
          >
            <CustomText color={colors.white}>
              Select the affected body part
            </CustomText>
          </BodyButton>
        </InjuryContainer>
      </ScrollHeaderWrapper>
      <AreaModal
        open={modalOpen}
        close={() => {
          setModalOpen(false)
          buttonOpac.setValue(1)
        }}
        submit={(areas) => {
          setModalOpen(false)
          console.log(areas)
          results.current.injuryAreas = areas
        }}
      />
      <DateTimePickerModal
        isVisible={show}
        mode="datetime"
        onConfirm={handleConfirm}
        onCancel={handleCancel}
      />
    </>
  )
}

export default Injury
