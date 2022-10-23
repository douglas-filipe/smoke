import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Home} from '../screens/Home';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Login} from '../screens/Login';
import {Signup} from '../screens/Signup';

const Tab = createBottomTabNavigator();

export const AppRoutes = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          paddingTop: 13,
          paddingBottom: 13,
          height: 70,
          borderTopColor: 'white',
          elevation: 0,
        },
        headerShown: false,
        tabBarActiveTintColor: '#0E6BA8',
        tabBarInactiveTintColor: '#ACACAC',
      }}>
      <Tab.Screen
        name="Home"
        component={Signup}
        options={{
          tabBarIcon: ({color}) => <Icon name="home" size={24} color={color} />,
        }}
      />

      <Tab.Screen
        name="Profile"
        component={Home}
        options={{
          tabBarIcon: ({color}) => (
            <Icon name="account-circle-outline" size={24} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
