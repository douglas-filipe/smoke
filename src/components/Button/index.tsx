import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {Button as Btn} from 'react-native-paper';
import {colors} from '../../themes';

interface ButtonProps {
  text: string;
  onPress: () => void;
  disable?: boolean;
}

export const Button = ({text, onPress, disable = false}: ButtonProps) => {
  return (
    <Btn
      disabled={disable}
      style={[styles.container, disable && styles.disable]}
      mode="contained"
      onPress={onPress}>
      <Text style={styles.text}>{text}</Text>
    </Btn>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    width: '70%',
    borderRadius: 5,
  },

  text: {
    color: 'white',
  },

  disable: {
    opacity: 0.5,
  },
});
