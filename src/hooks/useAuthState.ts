import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth'
import { useEffect, useMemo, useState } from 'react'

export type AuthState = {
  user: FirebaseAuthTypes.User | undefined
  loading: boolean
}

export const useAuthState = (): AuthState => {
  const [state, setState] = useState<AuthState>({
    user: undefined,
    loading: true
  })

  useEffect(() => {
    auth().onAuthStateChanged((user) => {
      if (user) {
        setState({
          user,
          loading: false
        })
      } else {
        setState({
          user: undefined,
          loading: false
        })
      }
    })
  }, [])

  const authState = useMemo(() => state, [state])
  return authState
}
