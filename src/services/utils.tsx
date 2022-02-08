import { Options, SurveyResults, SurveyType } from '../../types/types'

export const checkMorningInputs = (surveyInfo: SurveyResults) => {
  if (
    surveyInfo.type === SurveyType.M &&
    typeof surveyInfo.moodRating === 'undefined' &&
    typeof surveyInfo.mealHours === 'undefined' &&
    typeof surveyInfo.sleepHours === 'undefined' &&
    typeof surveyInfo.sleepRating === 'undefined' &&
    typeof surveyInfo.bodyRating === 'undefined' &&
    typeof surveyInfo.sorenessRating === 'undefined' &&
    typeof surveyInfo.mentalityRating === 'undefined'
  ) {
    console.log('not sent')
    return false
  }
  return true
}

export const renderSliderOption = (
  options: Options[] | undefined,
  input: number,
  highNumb: number
) => {
  if (options) {
    if (input >= 0 && input < options[0].topEnd) {
      return options[0].output
    }
    if (input >= 2 && input < options[1].topEnd) {
      return options[1].output
    }
    if (input >= options[1].topEnd && input < options[2].topEnd) {
      return options[2].output
    }
    if (input >= options[2].topEnd && input < options[3].topEnd) {
      return options[3].output
    }
    if (input >= options[3].topEnd && input <= highNumb) {
      return options[4].output
    }
  }
  return ''
}
