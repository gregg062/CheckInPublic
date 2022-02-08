import React, { FC } from 'react'
import { FlatList, View } from 'react-native'
import { FlatListContainer } from './Carousel.styled'
import DetailedTile from './Tiles/DetailedTile'
import LargeTile from './Tiles/LargeTile'
import ProfileTile from './Tiles/ProfileTile'
import SmallTile from './Tiles/SmallTile'
import TallTile from './Tiles/TallTile'
import WideTile from './Tiles/WideTile'

export enum tileTypes {
  SMALL = 'small',
  LARGE = 'large',
  TALL = 'tall',
  WIDE = 'wide',
  DETAILED = 'detailed',
  PROFILE = 'profile'
}

interface CarouselProps {
  vertical?: boolean
  twoColumns?: boolean
  data: any[]
  tileType: tileTypes
  navTo: (item: any) => void
}

const Carousel: FC<CarouselProps> = ({
  vertical = false,
  twoColumns,
  data,
  tileType,
  navTo
}) => {
  const renderTile = (
    tileInfo: tileTypes,
    tileData: any,
    vertical?: boolean
  ) => {
    switch (tileInfo) {
      case tileTypes.SMALL: {
        return <SmallTile data={tileData} />
      }
      case tileTypes.LARGE: {
        console.log('here', data)
        return <LargeTile data={tileData} />
      }
      case tileTypes.TALL: {
        return (
          <TallTile
            data={tileData}
            vertical={vertical}
            action={(r) => {
              navTo(r)
            }}
          />
        )
      }
      case tileTypes.WIDE: {
        return (
          <WideTile
            data={tileData}
            action={(r) => {
              navTo(r)
            }}
          />
        )
      }
      case tileTypes.DETAILED: {
        return <DetailedTile data={tileData} />
      }
      case tileTypes.PROFILE: {
        return <ProfileTile data={tileData} />
      }
      default: {
        return null
      }
    }
  }

  const HozSpacer = <View style={{ marginLeft: 10 }} />
  const VertSpacer = <View style={{ marginBottom: 10 }} />

  return (
    <FlatListContainer>
      <FlatList
        bounces={false}
        keyExtractor={(item: any, index: any) => `${index}`}
        data={data}
        horizontal={!vertical}
        numColumns={twoColumns ? 2 : 1}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={() => {
          return !vertical ? HozSpacer : VertSpacer
        }}
        renderItem={({ item }) => {
          return renderTile(tileType, item, vertical)
        }}
      />
    </FlatListContainer>
  )
}

export default Carousel
