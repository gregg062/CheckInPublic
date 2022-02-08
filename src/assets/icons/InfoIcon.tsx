import React from 'react'
import Svg, { SvgProps, Path, Circle } from 'react-native-svg'

const InfoIcon: React.FC<SvgProps> = ({ height = 32, width = 32, ...rest }) => {
  return (
    <Svg viewBox="0 0 128 128" width={width} height={width} {...rest}>
      <Circle cx="64" cy="64" r="55" fill="#181818" />
      <Path
        fill="#75fa61"
        d="M15,69.2c-1.6,0-2.9-1.3-3-2.9c0-0.8-0.1-1.5-0.1-2.3c0-1.7,1.3-3,3-3s3,1.3,3,3c0,0.7,0,1.4,0,2.1 c0.1,1.7-1.2,3.1-2.9,3.1C15.1,69.2,15.1,69.2,15,69.2z"
      />
      <Path
        fill="#75fa61"
        d="M64,116c-19.9,0-37.8-11.1-46.6-29c-0.7-1.5-0.1-3.3,1.4-4s3.3-0.1,4,1.4C30.6,100.2,46.4,110,64,110 c25.4,0,46-20.6,46-46c0-12.3-4.8-23.8-13.5-32.5c-1.2-1.2-1.2-3.1,0-4.2c1.2-1.2,3.1-1.2,4.2,0C110.6,37.1,116,50.1,116,64 C116,92.7,92.7,116,64,116z"
      />
      <Circle cx="64" cy="39" r="7" fill="#e4e4e7" />
      <Path
        fill="#e4e4e7"
        d="M57,68l0,24c0,3.9,3.1,7,7,7h0c3.9,0,7-3.1,7-7V68c0-3.9-3.1-7-7-7h0C60.1,61,57,64.1,57,68z"
      />
      <Path
        fill="#aaa"
        d="M64,122C32,122,6,96,6,64S32,6,64,6s58,26,58,58S96,122,64,122z M64,12c-28.7,0-52,23.3-52,52s23.3,52,52,52 s52-23.3,52-52S92.7,12,64,12z"
      />
      <Path
        fill="#444b54"
        d="M64,49c-5.5,0-10-4.5-10-10s4.5-10,10-10s10,4.5,10,10S69.5,49,64,49z M64,35c-2.2,0-4,1.8-4,4s1.8,4,4,4 s4-1.8,4-4S66.2,35,64,35z"
      />
      <Path
        fill="#444b54"
        d="M64,102c-5.5,0-10-4.5-10-10V68c0-5.5,4.5-10,10-10s10,4.5,10,10v24C74,97.5,69.5,102,64,102z M64,64 c-2.2,0-4,1.8-4,4v24c0,2.2,1.8,4,4,4s4-1.8,4-4V68C68,65.8,66.2,64,64,64z"
      />
    </Svg>
  )
}

export default InfoIcon
