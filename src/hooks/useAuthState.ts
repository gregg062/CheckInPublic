import { useEffect, useMemo, useState } from 'react'
import { UserProfile } from '../../types/types'
import { userAccessStore } from '../store/user'

export type AuthState = {
  user: UserProfile | undefined
  loading: boolean
}

export const useAuthState = (): AuthState => {
  const [state, setState] = useState<AuthState>({
    user: undefined,
    loading: true
  })
  const userStore = userAccessStore()

  useEffect(() => {
      if (userStore) {
        setState({
          user: {
            displayName: 'John Smith',
            photo: require('../assets/images/avatarOne.jpg'),
          },
          loading: false
        })
      } else {
        setState({
          user: undefined,
          loading: false
        })
      }
  }, [])

  const authState = useMemo(() => state, [state])
  return authState
}
