import React, { FC } from 'react'
import { Text } from 'react-native'
import { tileTypes } from '..'
import { Container } from './Tiles.styled'

interface TileProps {
  data: any[]
}
const SmallTile: FC<TileProps> = ({ data }) => {
  console.log(data)
  return (
    <Container size={tileTypes.SMALL}>
      <Text>{data}</Text>
    </Container>
  )
}

export default SmallTile
