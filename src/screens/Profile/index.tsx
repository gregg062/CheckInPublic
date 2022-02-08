import React, { useEffect, useState } from 'react'
import { Dimensions, View } from 'react-native'
import { Cta, CustomText, Spacer } from '../../components'
import { colors } from '../../theme'
import { LineChart } from 'react-native-chart-kit'
import { useProfile } from '../../providers/userProvider'
import {
  AvatarContainer,
  CtaContainer,
  Divider,
  ProfileAvatar,
  ProfileContainer,
  SignOutButton,
  SignOutContainer,
  StyledSafe,
  StyledScroll
} from './Profile.styled'
import { getRPEScores, signOut } from '../../services/firebase'
import { useAuthState } from '../../hooks/useAuthState'
import AvatarIcon from '../../assets/icons/AvatarIcon'
import { GradBack } from '../screens.styled'

const { width } = Dimensions.get('window')

const Profile = ({ navigation }: { navigation: any }) => {
  const user = useProfile()
  const auth = useAuthState()
  const [scores, setScores] = useState<number[]>([])

  const getData = async () => {
    if (auth.user) {
      const info = await getRPEScores(auth.user.uid)
      setScores(info)
    }
  }

  useEffect(() => {
    getData()
  }, [auth.user])

  return (
    <ProfileContainer>
      <StyledScroll bounces={false}>
        <StyledSafe>
          <Spacer size="md" />
          {user?.photo ? (
            <ProfileAvatar source={{ uri: user?.photo }} />
          ) : (
            <AvatarContainer>
              <GradBack
                start={{ x: 0, y: 0.2 }}
                end={{ x: 1, y: 1 }}
                colors={colors.brightGrad}
                style={{
                  justifyContent: 'center',
                  alignItems: 'center'
                }}
              >
                <AvatarIcon color={colors.white} />
              </GradBack>
            </AvatarContainer>
          )}

          {user ? (
            <>
              <CustomText color={colors.white} type="title">
                {user?.displayName}
              </CustomText>
              <Divider loggedIn={!!user} />
            </>
          ) : (
            <CtaContainer>
              <Cta
                rounded
                buttonText="log in to RVIVE Check-in"
                action={() => {
                  navigation.navigate('Auth')
                }}
              />
            </CtaContainer>
          )}
          <Spacer size="md" />
          {user && (
            <>
              <CustomText color={colors.white} type="label">
                RPE trend:
              </CustomText>
              {scores.length ? (
                <LineChart
                  data={{
                    labels: [],
                    datasets: [
                      {
                        data: scores
                      }
                    ]
                  }}
                  height={220}
                  width={width - 20}
                  yAxisLabel=""
                  yAxisSuffix=""
                  yAxisInterval={1}
                  chartConfig={{
                    backgroundColor: '#4e4376',
                    backgroundGradientFrom: '#2b5876',
                    backgroundGradientTo: '#4e4376',
                    decimalPlaces: 0, // optional, defaults to 2dp
                    color: (opacity = 1) => `rgba(255, 255, 255, 0.2)`,
                    labelColor: (opacity = 1) =>
                      `rgba(255, 255, 255, ${opacity})`,
                    style: {
                      borderRadius: 16
                    },
                    propsForDots: {
                      r: '6',
                      strokeWidth: '2',
                      stroke: '#4e4376'
                    }
                  }}
                  bezier
                  style={{
                    marginVertical: 8,
                    borderRadius: 16
                  }}
                />
              ) : null}
            </>
          )}
        </StyledSafe>
      </StyledScroll>
      <SignOutContainer>
        {auth.user ? (
          <SignOutButton>
            <Cta
              buttonText="sign out"
              action={() => {
                signOut()
              }}
              bordered
              rounded
              backColor="transparent"
              borderedColor={colors.white}
              textColor={colors.white}
            />
          </SignOutButton>
        ) : null}
      </SignOutContainer>
    </ProfileContainer>
  )
}

export default Profile
