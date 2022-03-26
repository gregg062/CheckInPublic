import 'react-native-gesture-handler/jestSetup'
import { jest } from '@jest/globals'
import * as ReactNative from 'react-native'

jest.doMock('react-native', () => {
  return Object.setPrototypeOf(
    {
      Platform: {
        OS: 'android',
        select: () => {
          /* do nothing */
        }
      },
      NativeModules: {
        ...ReactNative.NativeModules,
        NotifeeApiModule: {
          addListener: jest.fn(),
          eventsAddListener: jest.fn(),
          eventsNotifyReady: jest.fn()
        }
      }
    },
    ReactNative
  )
})
jest.mock('react-native-reanimated', () => {
  const Reanimated = require('react-native-reanimated/mock')
  Reanimated.default.call = () => {}

  return Reanimated
})

// Silence the warning: Animated: `useNativeDriver`
jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper')
