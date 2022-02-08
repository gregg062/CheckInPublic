import React from 'react'

import Routes from './src/routes'
import { UserProvider } from './src/providers/userProvider'
import { ToastProvider } from './src/providers/toastProvider'

const App = () => {
  return (
    <>
      <UserProvider>
        <ToastProvider>
          <Routes />
        </ToastProvider>
      </UserProvider>
    </>
  )
}

export default App
