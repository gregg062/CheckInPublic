import { useAuthState } from '../hooks/useAuthState'
import { Options, SurveyResults, SurveyType, TileData } from '../../types/types'

export const homeTileData: TileData[] = [
  {
    id: 1,
    title: 'Morning Check-In',
    to: 'Morning',
    image: require('../assets/images/morning.jpg')
  },
  {
    id: 3,
    title: 'Post Session',
    to: 'PostSurvey',
    image: require('../assets/images/post.jpg')
  },
  {
    id: 5,
    title: 'Injury Report',
    to: 'Injury',
    image: require('../assets/images/injury.jpg')
  }
]

export const SleepSlider: Options[] = [
  {
    topEnd: 2,
    output: 'Insomnia'
  },
  {
    topEnd: 4,
    output: 'Restless'
  },
  {
    topEnd: 6,
    output: 'OK'
  },
  {
    topEnd: 8,
    output: 'Relaxed'
  },
  {
    topEnd: 10,
    output: 'Great Sleep'
  }
]

export const FatigueSlider: Options[] = [
  {
    topEnd: 2,
    output: 'Exhausted'
  },
  {
    topEnd: 4,
    output: 'Slightly Tired'
  },
  {
    topEnd: 6,
    output: 'OK'
  },
  {
    topEnd: 8,
    output: 'Fresh'
  },
  {
    topEnd: 10,
    output: 'Recovered'
  }
]

export const SorenessSlider: Options[] = [
  {
    topEnd: 2,
    output: 'Very Sore'
  },
  {
    topEnd: 4,
    output: 'Achy'
  },
  {
    topEnd: 6,
    output: 'OK'
  },
  {
    topEnd: 8,
    output: 'Good'
  },
  {
    topEnd: 10,
    output: 'No Soreness'
  }
]

export const MoodSlider: Options[] = [
  {
    topEnd: 2,
    output: 'Miserable'
  },
  {
    topEnd: 4,
    output: 'Grumpy'
  },
  {
    topEnd: 6,
    output: 'OK'
  },
  {
    topEnd: 8,
    output: 'Happy'
  },
  {
    topEnd: 10,
    output: 'Great'
  }
]

export const MentalitySlider: Options[] = [
  {
    topEnd: 2,
    output: 'Stressed'
  },
  {
    topEnd: 4,
    output: 'Somewhat Distressed'
  },
  {
    topEnd: 6,
    output: 'OK'
  },
  {
    topEnd: 8,
    output: 'Somewhat Alert'
  },
  {
    topEnd: 10,
    output: 'Entergetic'
  }
]

export const SeveritySlider: Options[] = [
  {
    topEnd: 2,
    output: 'No Pain'
  },
  {
    topEnd: 4,
    output: 'A Little Pain'
  },
  {
    topEnd: 6,
    output: 'Moderate Pain'
  },
  {
    topEnd: 8,
    output: 'Painful'
  },
  {
    topEnd: 10,
    output: 'Severe Pain'
  }
]

export const Avatars = [
  'https://firebasestorage.googleapis.com/v0/b/amped-wellness.appspot.com/o/Avatars%2FavatarOne.jpg?alt=media&token=1f12ecc4-0f01-4817-8463-a5faf908a229',
  'https://firebasestorage.googleapis.com/v0/b/amped-wellness.appspot.com/o/Avatars%2FavatarTwo.jpg?alt=media&token=7fc907b0-2f00-47f0-9d33-81fdb53e4307',
  'https://firebasestorage.googleapis.com/v0/b/amped-wellness.appspot.com/o/Avatars%2FavatarThree.jpg?alt=media&token=8ac4b43e-423e-4053-8b94-40576775893e',
  'https://firebasestorage.googleapis.com/v0/b/amped-wellness.appspot.com/o/Avatars%2FavatarFour.jpg?alt=media&token=15268815-9221-47e4-8e1b-9f6c6daa2fa4',
  'https://firebasestorage.googleapis.com/v0/b/amped-wellness.appspot.com/o/Avatars%2FavatarFive.jpg?alt=media&token=31010f7f-5dd3-4713-b0b3-abb3120b4479',
  'https://firebasestorage.googleapis.com/v0/b/amped-wellness.appspot.com/o/Avatars%2FavatarSix.jpg?alt=media&token=05136c3c-7006-4042-ad36-b881bdfa37f0',
  'https://firebasestorage.googleapis.com/v0/b/amped-wellness.appspot.com/o/Avatars%2FavatarSeven.jpg?alt=media&token=1b6d5663-5e33-4aa7-80d5-17f6c99b02db'
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
  mentalityRating: 'Stressed'
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
  'Right Ankle/Foot'
]
