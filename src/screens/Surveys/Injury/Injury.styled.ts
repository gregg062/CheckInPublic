import styled from 'styled-components/native'
import { colors } from '../../../theme'

const InjuryContainer = styled.View`
  padding: 20px;
`

const DateInput = styled.View`
    width: 100%;
    background-color: ${colors.white};
    border-radius: 8px;
    height: 40px;
    margin-bottom: 16px;
    padding-left: 10px
    justify-content: center;
    margin-top: 10px;
`
const SelectButton = styled.TouchableOpacity`
padding: 10px;
background-color: #2b5876;
border-radius: 100px;
align-items: center;
margin-top: 12px;
shadow-color: ${colors.black};
shadow-offset: {
  width: 0,
  height: 8
};
shadow-opacity: 0.1;
shadow-radius: 10px;
`

const BodyButton = styled.TouchableOpacity`
  padding: 10px;
  background-color: #2b5876;
  border-radius: 100px;
  align-items: center;
  margin-top: 12px;
  shadow-color: ${colors.white};
  shadow-offset: {
    width: 0px;
    height: 8px;
  }
  shadow-opacity: 0.1;
  shadow-radius: 10px;
`

const DateContainer = styled.Pressable`
  margin-bottom: 10px;
`
export { DateInput, SelectButton, BodyButton, DateContainer, InjuryContainer }
