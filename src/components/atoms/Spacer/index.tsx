import React, { FC } from 'react'
import { SpacerView } from './Spacer.styled'

interface SpaceProps {
  horizontal?: boolean
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'huge'
}
const Spacer: FC<SpaceProps> = ({ size, horizontal = false }) => {
  return <SpacerView size={size || 'xs'} horizontal={horizontal} />
}

export default Spacer
