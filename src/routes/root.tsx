import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from '../screens/Home'
import Profile from '../screens/Profile'
import { TransitionPresets } from 'react-navigation-stack'
import Settings from '../screens/Settings'
import Morning from '../screens/Surveys/Morning'
import PostSurvey from '../screens/Surveys/PostSurvey'
import Injury from '../screens/Surveys/Injury'
import { FirebaseAuthTypes } from '@react-native-firebase/auth'
import Auth from '../screens/Auth'

export type RootStackParamList = {
  Home: undefined
  Profile: undefined
  Settings: undefined
  Morning: { item?: any; user?: FirebaseAuthTypes.User }
  PostSurvey: { item?: any; user?: FirebaseAuthTypes.User }
  Injury: { item?: any; user?: FirebaseAuthTypes.User }
  Auth: undefined
}

const RootStack = createNativeStackNavigator<RootStackParamList>()

const Root = () => {
  return (
    <RootStack.Navigator initialRouteName="Home">
      <RootStack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false, gestureEnabled: false }}
      />
      <RootStack.Screen
        name="Profile"
        component={Profile}
        options={{
          headerShown: false,
          gestureEnabled: false,
          ...TransitionPresets.ModalSlideFromBottomIOS
        }}
      />
      <RootStack.Screen
        name="Settings"
        component={Settings}
        options={{
          headerShown: false,
          gestureEnabled: false,
          ...TransitionPresets.ModalSlideFromBottomIOS
        }}
      />
      <RootStack.Screen
        name="Morning"
        component={Morning}
        options={{
          headerShown: false,
          gestureEnabled: false,
          ...TransitionPresets.ModalSlideFromBottomIOS
        }}
      />
      <RootStack.Screen
        name="PostSurvey"
        component={PostSurvey}
        options={{
          headerShown: false,
          gestureEnabled: false,
          ...TransitionPresets.ModalSlideFromBottomIOS
        }}
      />
      <RootStack.Screen
        name="Injury"
        component={Injury}
        options={{
          headerShown: false,
          gestureEnabled: false,
          ...TransitionPresets.ModalSlideFromBottomIOS
        }}
      />
      <RootStack.Screen
        name="Auth"
        component={Auth}
        options={{
          headerShown: false,
          gestureEnabled: false,
          presentation: 'modal',
          ...TransitionPresets.ModalSlideFromBottomIOS
        }}
      />
    </RootStack.Navigator>
  )
}

export default Root
