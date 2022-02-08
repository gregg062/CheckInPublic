import React, { FC } from 'react'
import { Text } from 'react-native'
import { tileTypes } from '..'
import { Container } from './Tiles.styled'

interface TileProps {
  data: any[]
}
const LargeTile: FC<TileProps> = ({ data }) => {
  return (
    <Container size={tileTypes.LARGE}>
      <Text>{data}</Text>
    </Container>
  )
}

export default LargeTile
