import { AsyncStorage } from 'react-native';
import { Notifications, Permissions } from 'expo';

const NOTIFICATION_KEY = 'Udacicards123';

export const clearLocalNotification = () => {
  return AsyncStorage.removeItem(NOTIFICATION_KEY)
    .then(Notifications.cancelAllScheduledNotificationsAsync);
}

const createNotification = () => {
  return {
    title: 'Record your score',
    body: "Remember to record your score for today",
    ios: {
      sound: true,
    },
    android: {
      sound: true,
      priority: 'high',
      sticky: false,
      vibrate: true,
    },
  };
}

export async function setLocalNotification() {
  const res = await AsyncStorage.getItem(NOTIFICATION_KEY);
  const notification = await JSON.parse(res);

  if (notification === null) {
    const permissionRes = await Permissions.askAsync(Permissions.NOTIFICATIONS);
    const { status } = permissionRes;
    if (status === 'granted') {
      Notifications.cancelAllScheduledNotificationsAsync();
      const tomorrow = new Date();
      tomorrow.setDate(tomorrow.getDate() + 1);
      tomorrow.setHours(20);
      tomorrow.setMinutes(0);
      Notifications.scheduleLocalNotificationAsync(
        createNotification(),
        {
          time: tomorrow,
          repeat: 'day',
        },
      );
      AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true));
    }
  }
}
