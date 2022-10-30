import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Login} from '../screens/Login';
import {Signup} from '../screens/Signup';

const AuthStack = createNativeStackNavigator();

export const AuthRoutes = () => {
  return (
    <AuthStack.Navigator
      screenOptions={{
        headerBackTitleVisible: false,
        title: '',
        headerShadowVisible: false,
        animation: 'fade_from_bottom',
      }}>
      <AuthStack.Screen name="Login" component={Login} />
      <AuthStack.Screen name="Signup" component={Signup} />
    </AuthStack.Navigator>
  );
};
