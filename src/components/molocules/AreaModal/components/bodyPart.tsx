import React, { FC, useState } from 'react'
import { Pressable } from 'react-native'
import { CustomText } from '../../..'
import { colors } from '../../../../theme'
import { BodyPartContainer } from './components.styled'

interface BodyPartProp {
  title: string
  addToSelected: (area: string) => void
  remove: () => void
}
const BodyPart: FC<BodyPartProp> = ({ title, addToSelected, remove }) => {
  const [selected, setSelected] = useState<boolean>(false)
  return (
    <Pressable
      onPress={() => {
        setSelected(!selected)
        if (selected) {
          remove()
        } else {
          addToSelected(title)
        }
      }}
    >
      <BodyPartContainer selected={selected}>
        <CustomText color={selected ? colors.black : colors.white}>
          {title}
        </CustomText>
      </BodyPartContainer>
    </Pressable>
  )
}

export default BodyPart
