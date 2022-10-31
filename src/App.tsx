import React, {useEffect} from 'react';
import {Routes} from './routes';
import {Provider as PaperProvider} from 'react-native-paper';
import Toast from 'react-native-toast-message';
import {Providers} from './contexts';
import messaging from '@react-native-firebase/messaging';
import {api} from './services/api';

export const App = () => {
  /* const sendFcmToken = async () => {
    try {
      await messaging().registerDeviceForRemoteMessages();
      const token = await messaging().getToken();
      await api.post('/register', {token});
    } catch (err: any) {
      //Do nothing
      console.log(err.message);
      return;
    }
  };

  useEffect(() => {
    sendFcmToken();
  }, []); */
  return (
    <PaperProvider>
      <Providers>
        <Routes />
        <Toast />
      </Providers>
    </PaperProvider>
  );
};
