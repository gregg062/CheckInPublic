import Slider from '@react-native-community/slider'
import React, { FC, useState } from 'react'
import { colors } from '../../../theme'
import Box from '../Box'
import CustomText from '../CustomText'
import Spacer from '../Spacer'
import { StyledView } from './HorizontalSlider.styled'

interface SliderProps {
  maxVal: number
  step?: number
  minColor: string
  maxColor: string
  thumbColor: string
  title?: string
  outputOptions?: string[]
}
const HorizontalSlider: FC<SliderProps> = ({
  maxVal,
  step = 0,
  minColor,
  maxColor,
  thumbColor,
  title,
  outputOptions
}) => {
  const [val, setVal] = useState<number>(0)
  return (
    <StyledView>
      {title && (
        <CustomText type="caps" color={colors.white}>
          {title}
        </CustomText>
      )}
      <Box flexDirection="row" justify="space-between" align="center" flex={1}>
        <Slider
          style={{ width: '76%', height: 40 }}
          minimumValue={0}
          maximumValue={maxVal}
          step={step}
          minimumTrackTintColor={minColor}
          maximumTrackTintColor={maxColor}
          thumbTintColor={thumbColor}
          onValueChange={(value: number) => setVal(value)}
        />
        <Spacer horizontal size="sm" />
        <Box>
          <CustomText color={colors.white} bold type="body">
            {outputOptions ? outputOptions[val] : val}
          </CustomText>
        </Box>
      </Box>
    </StyledView>
  )
}

export default HorizontalSlider
