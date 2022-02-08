import React, { FC } from 'react'
import { Text } from 'react-native'
import { tileTypes } from '..'
import { Container } from './Tiles.styled'

interface TileProps {
  data: any[]
}
const ProfileTile: FC<TileProps> = ({ data }) => {
  return (
    <Container size={tileTypes.PROFILE}>
      <Text>{data}</Text>
    </Container>
  )
}

export default ProfileTile
