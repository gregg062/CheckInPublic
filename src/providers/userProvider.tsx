import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react'
import { UserProfile } from '../../types/types'
import { useAuthState } from '../hooks/useAuthState'

const UserProviderContext = createContext<UserProfile | null>(null)

const useProfile = () => {
  const context = useContext(UserProviderContext)
  if (context === undefined) {
    throw new Error('userProfile must be used within a UserProvider')
  }
  return context
}
const UserProvider = (props: any) => {
  const auth = useAuthState()
  const [user, setUser] = useState<UserProfile | null>(null)

  useEffect(() => {
    let sub = () => {}
    /*if (auth.user) {
      sub = firestore()
        .collection('userProfiles')
        .doc(auth.user?.uid)
        .onSnapshot((snap) => {
          if (snap && snap.exists) {
            const data: UserProfile = snap.data() as UserProfile
            setUser(data)
          }
        })
    } else {
      console.log('setting user to null')
      setUser(null)
    }*/
    return sub
  }, [auth])
  const value = useMemo(() => user, [user])
  return <UserProviderContext.Provider value={value} {...props} />
}

export { UserProvider, useProfile }
