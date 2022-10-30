import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

interface ErrorTextProps {
  message: string;
}

export const ErrorText = ({message}: ErrorTextProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{message}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '70%',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },

  text: {
    alignSelf: 'flex-start',
    color: '#DB5A5E',
  },
});
