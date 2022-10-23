import React from 'react';
import {StyleSheet, Text} from 'react-native';
import * as Paper from 'react-native-paper';
import {colors} from '../../themes';

interface ButtonProps {
  text: string;
}

export const Button = ({text}: ButtonProps) => {
  return (
    <Paper.Button
      style={styles.container}
      mode="contained"
      onPress={() => console.debug.toString()}>
      <Text>{text}</Text>
    </Paper.Button>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    width: '70%',
    borderRadius: 5,
  },
});
