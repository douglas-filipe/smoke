import React from 'react';
import {Routes} from './routes';
import {Provider as PaperProvider} from 'react-native-paper';
import Toast from 'react-native-toast-message';
import {Providers} from './contexts';

export const App = () => {
  return (
    <PaperProvider>
      <Providers>
        <Routes />
        <Toast />
      </Providers>
    </PaperProvider>
  );
};
