import create from 'zustand'

type AccessInfo = {
  Date?: string
  code?: string
  dept?: string
  name?: string
  org: string
  used?: boolean
}

type userAccessInfo = {
  accessInfo: AccessInfo | undefined
  setAccessInfo: (accessDetails: AccessInfo) => void
  reset: () => void
}
export const userAccessStore = create<userAccessInfo>((set) => ({
  accessInfo: undefined,
  setAccessInfo: (accessDetails: AccessInfo) => {
    set(() => ({
      accessInfo: accessDetails
    }))
  },
  reset: () => {
    set(() => ({
      accessInfo: undefined
    }))
  }
}))
