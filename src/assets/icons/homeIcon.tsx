import React from 'react'
import Svg, { Path, SvgProps } from 'react-native-svg'

const HomeIcon: React.FC<SvgProps> = ({ height = 32, width = 32, ...rest }) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 460.45 460.45"
      {...rest}
      fill={'currentColor'}
    >
      <Path
        d="M444.396,167.33L249.284,6.831C243.747,2.277,236.986,0,230.225,0s-13.522,2.277-19.058,6.831L151.76,55.699V46.34
			c0-8.284-6.716-15-15-15H64.81c-8.284,0-15,6.716-15,15v93.223L16.055,167.33c-9.781,8.046-13.456,21.369-9.182,33.291
			c3.711,10.354,12.723,17.715,23.325,19.473V430.45c0,16.569,13.432,30,30,30h103.443c16.568,0,30-13.431,30-30v-76.474
			c0-5.316,2.297-8.485,3.368-9.296h66.432c1.071,0.811,3.368,3.98,3.368,9.296v76.474c0,16.569,13.431,30,30,30h103.443
			c16.569,0,30-13.431,30-30V220.095c10.603-1.757,19.614-9.119,23.325-19.473C457.852,188.699,454.177,175.377,444.396,167.33z
			 M79.81,61.341h41.95v19.037l-41.95,34.508V61.341z M400.253,190.499v239.952H296.809v-76.474
			c0-21.703-14.693-39.296-32.818-39.296H196.46c-18.125,0-32.818,17.594-32.818,39.296v76.474H60.198V190.499H35.113L230.225,30
			l195.112,160.499H400.253z"
      />
    </Svg>
  )
}

export default HomeIcon