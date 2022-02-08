import React, { FC } from 'react'
import { Text } from 'react-native'
import { tileTypes } from '..'
import { Container } from './Tiles.styled'

interface TileProps {
  data: any[]
}
const DetailedTile: FC<TileProps> = ({ data }) => {
  return (
    <Container size={tileTypes.DETAILED}>
      <Text>{data}</Text>
    </Container>
  )
}

export default DetailedTile
