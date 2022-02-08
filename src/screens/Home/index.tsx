import React, { useEffect } from 'react'
import { Carousel } from '../../components'
import { tileTypes } from '../../components/molocules/Carousel'
import { GradBack, ScreenBack } from '../screens.styled'
import { homeTileData } from '../../library/staticObjects'
import { useAuthState } from '../../hooks/useAuthState'
import { getUserDetails } from '../../services/firebase'
import { userAccessStore } from '../../store/user'
import { colors } from '../../theme'
import { Image } from 'react-native'

const Home = ({ navigation }: { navigation: any }) => {
  const { user } = useAuthState()
  const store = userAccessStore()

  const getDetails = async () => {
    if (user) {
      const info = await getUserDetails(user?.email || '')
      store.setAccessInfo(info)
    }
  }
  useEffect(() => {
    if (user) {
      getDetails()
    }
  }, [user])

  return (
    <GradBack
      start={{ x: 0, y: 0.2 }}
      end={{ x: 1, y: 1 }}
      colors={colors.darkGrad}
    >
      <ScreenBack>
        <Carousel
          data={homeTileData}
          tileType={tileTypes.WIDE}
          twoColumns={false}
          vertical
          navTo={(item: any) => {
            navigation.navigate(item.to, { item, user })
          }}
        />
      </ScreenBack>
    </GradBack>
  )
}

export default Home
