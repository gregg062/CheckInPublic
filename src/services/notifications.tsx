import notifee, {
  RepeatFrequency,
  TimestampTrigger,
  TriggerType
} from '@notifee/react-native'

export const createReminder = async (timeIn: Date) => {
  notifee.requestPermission()
  console.log(timeIn)
  const trigger: TimestampTrigger = {
    type: TriggerType.TIMESTAMP,
    timestamp: timeIn.getTime(),
    repeatFrequency: RepeatFrequency.DAILY
  }

  await notifee.createTriggerNotification(
    {
      title: 'Check In Time',
      body: 'Remember to do your Daily Check In',
      android: {
        channelId: 'your-channel-id'
      }
    },
    trigger
  )
}

export const cancelReminder = async () => {
  notifee.cancelAllNotifications()
}
