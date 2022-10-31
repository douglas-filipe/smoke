import React from 'react';
import {AppRoutes} from './app.routes';
import RNBootSplash from 'react-native-bootsplash';
import {NavigationContainer} from '@react-navigation/native';
import {useAuth} from '../contexts/Auth';
import {AuthRoutes} from './auth.routes';
import {Image, View} from 'react-native';
import {colors} from '../themes';
import Splash from '../assets/splash.png';

export const Routes = () => {
  const {signed, loading} = useAuth();

  if (loading) {
    return (
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          flex: 1,
          backgroundColor: colors.primary,
        }}>
        <Image source={Splash} />
      </View>
    );
  }
  return (
    <NavigationContainer onReady={() => RNBootSplash.hide()}>
      {signed ? <AppRoutes /> : <AuthRoutes />}
    </NavigationContainer>
  );
};
