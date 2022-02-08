import { Dimensions } from 'react-native'

const { width } = Dimensions.get('window')
export const calcRedColor = (inverted: boolean | undefined, numb: number) => {
  if (inverted) {
    return 20 * Math.floor(numb / (width / 11))
  }
  return 200 / Math.floor(numb / (width / 11))
}

export const calcGreenColor = (inverted: boolean | undefined, numb: number) => {
  if (inverted) {
    return 200 / Math.floor(numb / (width / 11))
  }
  return 20 * Math.floor(numb / (width / 11))
}

export const calcNumb = (numb: number, highNumb: number) => {
  return Math.floor(numb / (width / (highNumb + 3.5 * (highNumb / 10))))
}

export const calcColor = (invert: boolean | undefined, numb: number) => {
  const rNumb = calcRedColor(invert, numb)
  const gNumb = calcGreenColor(invert, numb)
  return `rgb(${rNumb < 240 ? rNumb : 255}, ${gNumb < 240 ? gNumb : 200}, 10)`
}

export const calcPan = (input: number) => {
  return Math.floor(input) > 40 && Math.floor(input) < width - 50
}
