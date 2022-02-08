import { transparentize } from 'polished'
import React, { FC, useEffect, useRef, useState } from 'react'
import { FlatList, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Animated, { Easing, useValue } from 'react-native-reanimated'
import { Cta } from '../..'
import CloseIcon from '../../../assets/icons/CloseIcon'
import { bodyParts } from '../../../library/staticObjects'
import { colors } from '../../../theme'
import { AreaContainer, ButtonHeader, SaveContainer } from './AreaModal.styled'
import BodyPart from './components/bodyPart'

interface AreaModalProps {
  open: boolean
  close: () => void
  submit: (areas: string[]) => void
}

const AreaModal: FC<AreaModalProps> = ({ open, close, submit }) => {
  const modalHeight = useRef(useValue(0)).current
  const [selected, setSelected] = useState<string[]>([])

  console.log(selected)
  useEffect(() => {
    Animated.timing(modalHeight, {
      toValue: open ? 400 : 0,
      duration: open ? 350 : 100,
      easing: Easing.circle
    }).start()
  }, [open])

  return (
    <AreaContainer
      style={{
        height: modalHeight
      }}
    >
      <ButtonHeader>
        <TouchableOpacity onPress={close}>
          <CloseIcon color={colors.black} />
        </TouchableOpacity>
        <SaveContainer>
          <Cta
            rounded
            buttonText="Save"
            backColor={transparentize(0.8, colors.black)}
            action={() => {
              console.log('save')
              submit(selected)
            }}
          />
        </SaveContainer>
      </ButtonHeader>
      <FlatList
        style={{ paddingLeft: 10, marginTop: 40 }}
        keyExtractor={(item, index) => `${item} ${index}`}
        data={bodyParts}
        horizontal
        ItemSeparatorComponent={() => {
          return <View style={{ margin: 4 }} />
        }}
        renderItem={({ item }) => {
          return (
            <BodyPart
              title={item}
              addToSelected={(area) => {
                console.log(item)
                setSelected((prev) => [...prev, area])
              }}
              remove={() => {
                console.log(item, 'remove')
                setSelected(selected.filter((part) => part !== item))
              }}
            />
          )
        }}
      />
    </AreaContainer>
  )
}

export default AreaModal
