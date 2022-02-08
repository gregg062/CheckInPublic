import React from 'react'
import Svg, { SvgProps, Path } from 'react-native-svg'

const CloseIcon: React.FC<SvgProps> = ({
  height = 20,
  width = 20,
  ...rest
}) => {
  return (
    <Svg
      fill="currentColor"
      viewBox="0 0 50 50"
      width="25px"
      height="25px"
      {...rest}
    >
      <Path d="M 40.783203 7.2714844 A 2.0002 2.0002 0 0 0 39.386719 7.8867188 L 25.050781 22.222656 L 10.714844 7.8867188 A 2.0002 2.0002 0 0 0 9.2792969 7.2792969 A 2.0002 2.0002 0 0 0 7.8867188 10.714844 L 22.222656 25.050781 L 7.8867188 39.386719 A 2.0002 2.0002 0 1 0 10.714844 42.214844 L 25.050781 27.878906 L 39.386719 42.214844 A 2.0002 2.0002 0 1 0 42.214844 39.386719 L 27.878906 25.050781 L 42.214844 10.714844 A 2.0002 2.0002 0 0 0 40.783203 7.2714844 z" />
    </Svg>
  )
}

export default CloseIcon
