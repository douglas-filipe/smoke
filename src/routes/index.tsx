import React from 'react';
import {AppRoutes} from './app.routes';
import RNBootSplash from 'react-native-bootsplash';
import {NavigationContainer} from '@react-navigation/native';
import {useAuth} from '../contexts/Auth';
import {AuthRoutes} from './auth.routes';
import {ActivityIndicator, View} from 'react-native';

export const Routes = () => {
  const {signed, loading} = useAuth();
  if (loading) {
    return (
      <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
        <ActivityIndicator size={40} />
      </View>
    );
  }
  return (
    <NavigationContainer onReady={() => RNBootSplash.hide()}>
      {signed ? <AppRoutes /> : <AuthRoutes />}
    </NavigationContainer>
  );
};
