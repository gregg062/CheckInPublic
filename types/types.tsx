import { ImageSourcePropType } from 'react-native'

export type Options = {
  topEnd: number
  output: string
}

export type TileData = {
  id: number
  title: string
  to: string
  image: ImageSourcePropType
}

export type FirebaseUserOptions = {
  org: string
  dept: string
  user: string
  type?: string
  surveyInfo?: any
  newName?: string
}

export type UserProfile = {
  displayName: string
  photo: string
}

export enum SurveyType {
  'M' = 'Morning',
  'R' = 'RPE',
  'I' = 'Injury'
}
export type SurveyResults = {
  type: SurveyType
  date: string
  sessionType?: string
  sessionLength?: number
  RPE?: number
  injuryType?: string
  injuryAreas?: string[]
  severity?: number
  mealHours?: number
  sleepHours?: number
  sleepRating?: string
  bodyRating?: string
  sorenessRating?: string
  moodRating?: string
  mentalityRating?: string
}

export type menuOptions = {
  icon: JSX.Element
  text: string
}

export type toastInfo = {
  text: string
  type: 'success' | 'error' | 'info'
  action: () => void
}
