import database from '@react-native-firebase/database'
import firestore from '@react-native-firebase/firestore'
import auth from '@react-native-firebase/auth'
import dayjs from 'dayjs'
import {
  FirebaseUserOptions,
  SurveyResults,
  SurveyType
} from '../../types/types'

export const saveSurvey = async (userInfo: FirebaseUserOptions) => {
  const date = dayjs(new Date()).format('MMM DD,YYYY HH:mm:ss')
  const ref = database().ref(
    `/${userInfo.org}/ Org Details/Departments/${userInfo.dept}/Users/${userInfo.user}/Surveys/${userInfo.type}/${date}`
  )
  try {
    await ref.set(userInfo.surveyInfo)
  } catch (error) {
    console.log(error)
  }
}

export const getUserDetails = async (emailIn: string) => {
  const emailName = emailIn.split('@')[0].replace('.', '_')
  const emailDomain = emailIn.split('@')[1].replace('.', '__dot__')
  const ref = database().ref(`/Access Codes/${emailName}@${emailDomain}`)
  try {
    const snapshot = await ref.once('value')
    const user = snapshot.val()
    console.log(user, 'SNAPSHOT')
    return user
  } catch (error) {
    console.log(error)
  }
}

export const updateUsername = (
  userInfo: FirebaseUserOptions,
  newName: string
) => {
  const ref = database().ref(
    `/${userInfo.org}/ Org Details/Departments/${userInfo.dept}/Users/${userInfo.user}/userDetails`
  )
  ref.update({
    'first name': newName?.split(' ')[0] || '',
    'last name': newName?.split(' ')[1] || ''
  })
}

export const updateUserProfile = async (
  userId: string,
  key: string,
  value: string
) => {
  await firestore()
    .collection('userProfiles')
    .doc(userId)
    .update({
      [key]: value
    })
}

export const setUserProfile = async (userInfo: string, displayName: string) => {
  await firestore().collection('userProfiles').doc(userInfo).set({
    displayName
  })
}

export const getUserProfile = async (userId: string) => {
  const user = await firestore().collection('userProfiles').doc(userId).get()
  return user.data()
}

export const setProfilePic = (newPic: string) => {
  const user = auth().currentUser
  user?.updateProfile({
    photoURL: newPic
  })
}

export const submitSurvey = async (
  userId: string | undefined,
  org: string | undefined,
  surveyInfo: SurveyResults
) => {
  if (userId && org) {
    await firestore()
      .collection('surveys')
      .add({ userId, org, ...surveyInfo })
  }
}

export const logInWithEmail = async (email: string, password: string) => {
  await auth().signInWithEmailAndPassword(email, password)
}

export const signOut = () => {
  auth().signOut()
}

export const getRPEScores = async (userId: string) => {
  const rpeScores: number[] = []
  await firestore()
    .collection('surveys')
    .where('userId', '==', userId)
    .where('type', '==', SurveyType.R)
    .orderBy('date', 'desc')
    .limit(8)
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        rpeScores.unshift(doc.data().RPE)
      })
    })

  return rpeScores
}
