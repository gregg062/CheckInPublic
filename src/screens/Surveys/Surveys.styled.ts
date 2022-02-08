import { ImageBackground } from 'react-native'
import styled from 'styled-components/native'

const HeaderImage = styled(ImageBackground)`
  position: absolute;
  top: 0px;
  left: 0px;
  right: 0px;
`

const SurveyDescriptionContainer = styled.View`
  flex-direction: column;
  padding-left: 10px;
  padding-right: 10px;
  justify-content: center;
  margin-bottom: 16px;
`
export { HeaderImage, SurveyDescriptionContainer }
