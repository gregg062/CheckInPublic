import React, { FC } from 'react'
import { tileTypes } from '..'
import { CustomText } from '../../..'
import { TileData } from '../../../../../types/types'
import { colors } from '../../../../theme'
import { Container, Overlay, StyledBackground } from './Tiles.styled'

interface TileProps {
  data: TileData
  vertical?: boolean
  action?: (r: any) => void
}
const WideTile: FC<TileProps> = ({ data, vertical, action = (r) => {} }) => {
  return (
    <Container size={tileTypes.WIDE} vertical={vertical}>
      <StyledBackground source={data.image}>
        <Overlay
          activeOpacity={0.7}
          onPress={() => {
            action(data)
          }}
        >
          <CustomText type={'label'} bold color={colors.white}>
            {data.title}
          </CustomText>
        </Overlay>
      </StyledBackground>
    </Container>
  )
}

export default WideTile
