import React from 'react';
import {Routes} from './routes';
import {Provider as PaperProvider} from 'react-native-paper';

export const App = () => {
  return (
    <PaperProvider>
      <Routes />
    </PaperProvider>
  );
};
