import React from 'react'
import Svg, { SvgProps, Path, Circle } from 'react-native-svg'

const AvatarIcon: React.FC<SvgProps> = ({
  height = 80,
  width = 80,
  ...rest
}) => {
  return (
    <Svg
      viewBox="0 0 512 512"
      height={height}
      width={width}
      {...rest}
      fill="currentColor"
    >
      <Circle cx="256" cy="114.526" r="114.526" />
      <Path
        d="M256,256c-111.619,0-202.105,90.487-202.105,202.105c0,29.765,24.13,53.895,53.895,53.895h296.421
			c29.765,0,53.895-24.13,53.895-53.895C458.105,346.487,367.619,256,256,256z"
      />
    </Svg>
  )
}

export default AvatarIcon
