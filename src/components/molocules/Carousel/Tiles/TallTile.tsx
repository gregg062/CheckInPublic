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
const TallTile: FC<TileProps> = ({ data, vertical, action = (r) => {} }) => {
  return (
    <Container size={tileTypes.TALL} vertical={vertical}>
      <StyledBackground source={data.image}>
        <Overlay
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

export default TallTile
