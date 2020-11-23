/**
 * @format
 */

import {AppRegistry, Platform} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import PushNotificationIOS from '@react-native-community/push-notification-ios';
import PushNotification from 'react-native-push-notification';

PushNotification.configure({
  onRegister: (token) => {
    console.log('token :>> ', token);
  },
  onNotification: (notification) => {
    console.log('notification :>> ', notification);

    notification.finish(PushNotificationIOS.FetchResult.NoData);
  },
  onAction: (notification) => {
    console.log('action :>> ', notification.action);
  },
  onRegistrationError: (error) => {
    console.log('error :>> ', error);
  },
  permissions: {
    alert: true,
    badge: true,
    sound: true,
  },
  popInitialNotification: true,
  requestPermissions: true,
});

PushNotification.getChannels(function (channels) {
  console.log(channels);
});

PushNotification.channelExists('demo-channel-id', function (exists) {
  if (exists) {
    PushNotification.deleteChannel('demo-channel-id');
  }
  PushNotification.createChannel(
    {
      channelId: 'demo-channel-id', // (required)
      channelName: 'demo channel', // (required)
      channelDescription: 'A channel to demo notifications', // (optional) default: undefined.
      soundName: 'default', // (optional) See `soundName` parameter of `localNotification` function
      importance: 4, // (optional) default: 4. Int value of the Android notification importance
      vibrate: true, // (optional) default: true. Creates the default vibration patten if true.
    },
    (created) => console.log(`createChannel returned '${created}'`), // (optional) callback returns whether the channel was created, false means it already existed.
  );
});

PushNotification.channelExists('demo-custom-sound-channel-id', function (
  exists,
) {
  if (exists) {
    PushNotification.deleteChannel('demo-custom-sound-channel-id');
  }
  PushNotification.createChannel(
    {
      channelId: 'demo-custom-sound-channel-id', // (required)
      channelName: 'custom sound demo channel', // (required)
      channelDescription: 'A channel to demo custom sound notifications', // (optional) default: undefined.
      soundName: 'android_noti.mp3', // (optional) See `soundName` parameter of `localNotification` function
      importance: 4, // (optional) default: 4. Int value of the Android notification importance
      vibrate: true, // (optional) default: true. Creates the default vibration patten if true.
    },
    (created) => console.log(`createChannel returned '${created}'`), // (optional) callback returns whether the channel was created, false means it already existed.
  );
});

AppRegistry.registerComponent(appName, () => App);
