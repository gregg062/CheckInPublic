import React from 'react'
import { Text, View } from 'react-native'
import { DEMO_MODE } from '@/env'

const App2 = () => {
  console.log('App2', DEMO_MODE)
  return (
    <View>
      <Text>App2</Text>
    </View>
  )
}

export default App2
