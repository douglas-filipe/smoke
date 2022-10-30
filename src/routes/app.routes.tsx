import React, {useRef} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Home} from '../screens/Home';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Signup} from '../screens/Signup';
import {Animated, Dimensions, StyleSheet} from 'react-native';
import {colors} from '../themes';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Tab = createBottomTabNavigator();

const Stack = createNativeStackNavigator();

const getWidth = () => {
  let width = Dimensions.get('window').width;

  width = width - 40;

  return width / 5;
};

const TabButton = () => {
  const tabOffsetValue = useRef<any>(new Animated.Value(0)).current;

  return (
    <>
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
          component={Home}
          options={{
            tabBarIcon: ({color}) => (
              <Icon name="home" size={24} color={color} />
            ),
          }}
          listeners={() => ({
            tabPress: () => {
              Animated.spring(tabOffsetValue, {
                toValue: 0,
                useNativeDriver: true,
              }).start();
            },
          })}
        />

        <Tab.Screen
          name="Histórico"
          component={Home}
          options={{
            tabBarIcon: ({color}) => (
              <Icon name="clipboard-list-outline" size={24} color={color} />
            ),
          }}
          listeners={() => ({
            tabPress: () => {
              Animated.spring(tabOffsetValue, {
                toValue: getWidth() * 1.85,
                useNativeDriver: true,
              }).start();
            },
          })}
        />

        <Tab.Screen
          name="Profile"
          component={Home}
          options={{
            tabBarIcon: ({color}) => (
              <Icon name="account-circle-outline" size={24} color={color} />
            ),
          }}
          listeners={() => ({
            tabPress: () => {
              Animated.spring(tabOffsetValue, {
                toValue: getWidth() * 3.7,
                useNativeDriver: true,
              }).start();
            },
          })}
        />
      </Tab.Navigator>
      <Animated.View
        style={[styles.line, {transform: [{translateX: tabOffsetValue}]}]}
      />
    </>
  );
};

export const AppRoutes = () => {
  return (
    <Stack.Navigator
      screenOptions={{animation: 'fade_from_bottom', headerShown: false}}>
      <Stack.Screen name="HomeTabs" component={TabButton} />
      <Stack.Screen name="Teste" component={Signup} />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  line: {
    width: getWidth() - 20,
    height: 2,
    backgroundColor: colors.primary,
    position: 'absolute',
    bottom: 70,
    left: 40,
    borderRadius: 50,
  },
});
