import React, {
  createContext,
  FC,
  ReactElement,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState
} from 'react'
import { View } from 'react-native'
import Animated, { Easing, useValue } from 'react-native-reanimated'
import { toastInfo } from '../../types/types'
import { CustomText } from '../components'
import { ToastAnim, ToastContainer } from './toastProvider.styled'

type ToastContextProps = (toast: toastProviderProps) => void

const ToastCont = createContext<ToastContextProps>(() => {})

const useToast = () => {
  const context = useContext(ToastCont)
  if (context === undefined) {
    throw new Error('useToast must be used within a ToastProvider')
  }
  return context
}

interface toastProviderProps {
  text: string
  icon?: string
  action?: () => void
}

const ToastProvider: FC<Omit<ToastContextProps, 'toast'>> = (props) => {
  const [addToast, setAddToast] = useState<toastProviderProps[]>([])

  const toast = useCallback(
    (newToast: toastProviderProps) => {
      setAddToast((prev) => [...prev, { ...newToast }])
    },
    [setAddToast]
  )
  const removeToast = () => {
    setAddToast([])
  }
  const value = useMemo(() => toast, [toast])

  return (
    <>
      <ToastCont.Provider value={value} {...props} />
      <View>
        {addToast.length !== 0 ? (
          <ShowToast
            text={addToast[0].text}
            type="error"
            action={() => {
              removeToast()
            }}
          />
        ) : null}
      </View>
    </>
  )
}

const ShowToast: FC<toastInfo> = React.memo(({ text, action }) => {
  const opac = useValue(0)

  useEffect(() => {
    Animated.timing(opac, {
      toValue: 1,
      duration: 300,
      easing: Easing.linear
    }).start()
  }, [])

  useEffect(() => {
    setTimeout(() => {
      Animated.timing(opac, {
        toValue: 0,
        duration: 200,
        easing: Easing.linear
      }).start()
      action()
    }, 3000)
  }, [])

  return (
    <ToastAnim
      style={{
        opacity: opac
      }}
    >
      <ToastContainer>
        <CustomText>{text}</CustomText>
      </ToastContainer>
    </ToastAnim>
  )
})

export { ToastProvider, useToast }
