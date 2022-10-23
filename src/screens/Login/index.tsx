import React from 'react';
import {View} from 'react-native';
import {TextInput} from 'react-native-paper';

export const Login = () => {
  return (
    <View>
      <TextInput
        placeholder="Email"
        style={{backgroundColor: '#fff'}}
        mode="outlined"
      />
    </View>
  );
};
