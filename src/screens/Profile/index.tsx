import React, { useEffect, useState } from 'react'
import { Dimensions, View } from 'react-native'
import { Cta, CustomText, Spacer } from '../../components'
import { colors } from '../../theme'
import { LineChart } from 'react-native-chart-kit'
import {
  AvatarContainer,
  CtaContainer,
  Divider,
  ProfileAvatar,
  ProfileContainer,
  SignOutButton,
  SignOutContainer,
  StyledSafe,
  StyledScroll,
} from './Profile.styled'
import { useAuthState } from '../../hooks/useAuthState'
import AvatarIcon from '../../assets/icons/AvatarIcon'
import { GradBack } from '../screens.styled'
import { userAccessStore } from '../../store/user'

const { width } = Dimensions.get('window')

const Profile = ({ navigation }: { navigation: any }) => {
  const auth = useAuthState()
  const { reset } = userAccessStore()

  return (
    <ProfileContainer>
      <StyledScroll bounces={false}>
        <StyledSafe>
          <Spacer size="md" />
          {auth.user?.photo ? (
            <ProfileAvatar source={auth.user?.photo} />
          ) : (
            <AvatarContainer>
              <GradBack
                start={{ x: 0, y: 0.2 }}
                end={{ x: 1, y: 1 }}
                colors={colors.brightGrad}
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <AvatarIcon color={colors.white} />
              </GradBack>
            </AvatarContainer>
          )}

          {auth.user ? (
            <>
              <CustomText color={colors.white} type="title">
                {auth.user?.displayName}
              </CustomText>
              <Divider loggedIn={!!auth.user} />
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
          {auth.user && (
            <>
              <CustomText color={colors.white} type="label">
                RPE trend:
              </CustomText>
              <LineChart
                data={{
                  labels: [],
                  datasets: [
                    {
                      data: [
                        Math.floor(Math.random() * 100),
                        Math.floor(Math.random() * 100),
                        Math.floor(Math.random() * 100),
                        Math.floor(Math.random() * 100),
                        Math.floor(Math.random() * 100),
                        Math.floor(Math.random() * 100),
                      ],
                    },
                  ],
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
                    borderRadius: 16,
                  },
                  propsForDots: {
                    r: '6',
                    strokeWidth: '2',
                    stroke: '#4e4376',
                  },
                }}
                bezier
                style={{
                  marginVertical: 8,
                  borderRadius: 16,
                }}
              />
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
                reset()
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
