import firebase from 'firebase';

export const askForPermissionToReceiveNotifications = async () => {
  try {
    const messaging = firebase.messaging();
    await messaging.requestPermission();
    const token = await messaging.getToken();
    console.log('User Token: ', token);

    return token;
  } catch (error) {
    console.error(error);
  }
};

export const removePermissionToReceiveNotifications = async () => {
  try {
    const messaging = firebase.messaging();
    const token = await messaging.getToken();
    await messaging.deleteToken(token);
    console.log('Deleted User Token: ', token);

    return token;
  } catch (error) {
    console.error(error);
  }
};
