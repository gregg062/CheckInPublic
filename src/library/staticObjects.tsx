import { useAuthState } from '../hooks/useAuthState'
import { Options, SurveyResults, SurveyType, TileData } from '../../types/types'

export const homeTileData: TileData[] = [
  {
    id: 1,
    title: 'Morning Check-In',
    to: 'Morning',
    image: require('../assets/images/morning.jpg'),
  },
  {
    id: 3,
    title: 'Post Session',
    to: 'PostSurvey',
    image: require('../assets/images/post.jpg'),
  },
  {
    id: 5,
    title: 'Injury Report',
    to: 'Injury',
    image: require('../assets/images/injury.jpg'),
  },
]

export const SleepSlider: Options[] = [
  {
    topEnd: 2,
    output: 'Insomnia',
  },
  {
    topEnd: 4,
    output: 'Restless',
  },
  {
    topEnd: 6,
    output: 'OK',
  },
  {
    topEnd: 8,
    output: 'Relaxed',
  },
  {
    topEnd: 10,
    output: 'Great Sleep',
  },
]

export const FatigueSlider: Options[] = [
  {
    topEnd: 2,
    output: 'Exhausted',
  },
  {
    topEnd: 4,
    output: 'Slightly Tired',
  },
  {
    topEnd: 6,
    output: 'OK',
  },
  {
    topEnd: 8,
    output: 'Fresh',
  },
  {
    topEnd: 10,
    output: 'Recovered',
  },
]

export const SorenessSlider: Options[] = [
  {
    topEnd: 2,
    output: 'Very Sore',
  },
  {
    topEnd: 4,
    output: 'Achy',
  },
  {
    topEnd: 6,
    output: 'OK',
  },
  {
    topEnd: 8,
    output: 'Good',
  },
  {
    topEnd: 10,
    output: 'No Soreness',
  },
]

export const MoodSlider: Options[] = [
  {
    topEnd: 2,
    output: 'Miserable',
  },
  {
    topEnd: 4,
    output: 'Grumpy',
  },
  {
    topEnd: 6,
    output: 'OK',
  },
  {
    topEnd: 8,
    output: 'Happy',
  },
  {
    topEnd: 10,
    output: 'Great',
  },
]

export const MentalitySlider: Options[] = [
  {
    topEnd: 2,
    output: 'Stressed',
  },
  {
    topEnd: 4,
    output: 'Somewhat Distressed',
  },
  {
    topEnd: 6,
    output: 'OK',
  },
  {
    topEnd: 8,
    output: 'Somewhat Alert',
  },
  {
    topEnd: 10,
    output: 'Entergetic',
  },
]

export const SeveritySlider: Options[] = [
  {
    topEnd: 2,
    output: 'No Pain',
  },
  {
    topEnd: 4,
    output: 'A Little Pain',
  },
  {
    topEnd: 6,
    output: 'Moderate Pain',
  },
  {
    topEnd: 8,
    output: 'Painful',
  },
  {
    topEnd: 10,
    output: 'Severe Pain',
  },
]

export const Avatars = [
  require('../assets/images/avatarOne.jpg'),
  require('../assets/images/avatarTwo.jpg'),
  require('../assets/images/avatarThree.jpg'),
  require('../assets/images/avatarFour.jpg'),
  require('../assets/images/avatarFive.jpg'),
  require('../assets/images/avatarSix.jpg'),
  require('../assets/images/avatarSeven.jpg'),
]

export const morningStartingPoint: SurveyResults = {
  type: SurveyType.M,
  date: new Date().toString(),
  mealHours: 0,
  sleepHours: 0,
  sleepRating: 'Insomnia',
  bodyRating: 'Exhausted',
  sorenessRating: 'Very Sore',
  moodRating: 'Miserable',
  mentalityRating: 'Stressed',
}

export const RpeNumbers = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]

export const bodyParts: string[] = [
  'Head',
  'Neck',
  'Mid Back',
  'Left Shoulder',
  'Right Shoulder',
  'Left Upper Arm',
  'Right Upper Arm',
  'Left Elbow',
  'Right Elbow',
  'Left Forearm',
  'Right Forearm',
  'Left Wrist/Hand',
  'Right Wrist/Hand',
  'Chest',
  'Abdominal',
  'Lower Back',
  'Left Hip',
  'Right Hip',
  'Left Upper Leg',
  'Right Upper Leg',
  'Left Knee',
  'Right Knee',
  'Left Lower Leg',
  'Right Lower Leg',
  'Left Ankle/Foot',
  'Right Ankle/Foot',
]
