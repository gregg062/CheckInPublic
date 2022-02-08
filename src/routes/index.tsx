import React, { useState, useRef } from 'react'
import {
  NavigationContainer,
  NavigationContainerRef
} from '@react-navigation/native'
import { StatusBar } from 'react-native'
import Root, { RootStackParamList } from './root'
import Menu from '../components/molocules/Menu'

const Routes = () => {
  const navRef = useRef<NavigationContainerRef<RootStackParamList>>(null)
  const [current, setCurrent] = useState<string>('')
  const [change, setChange] = useState<boolean>(false)
  return (
    <NavigationContainer
      ref={navRef}
      onReady={() => {
        setCurrent(navRef.current?.getCurrentRoute()?.name || '')
      }}
      onStateChange={() => {
        setChange(!change)
        setCurrent(navRef.current?.getCurrentRoute()?.name || '')
      }}
    >
      <StatusBar barStyle={'light-content'} />
      <Root />
      <Menu nav={navRef.current!} current={current} change={change} />
    </NavigationContainer>
  )
}

export default Routes
