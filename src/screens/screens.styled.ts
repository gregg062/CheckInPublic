import styled from 'styled-components/native'
import LinearGradient from 'react-native-linear-gradient'

const ScreenBack = styled.SafeAreaView`
  flex: 1;
  align-items: center;
`

const GradBack = styled(LinearGradient)`
  flex: 1;
  width: 100%;
`

export { ScreenBack, GradBack }
