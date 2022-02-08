import Animated from 'react-native-reanimated'
import styled from 'styled-components/native'

const ToastContainer = styled(Animated.View)`
    position: absolute;
    z-index: 5000;
    top: 100px;
    height: 100px;
    width: 250px;
    background-color: #ffffff90;
    border-top-left-radius: 10px
    border-bottom-left-radius: 10px;
    justify-content: center;
    padding: 20px;
`

export { ToastContainer }
