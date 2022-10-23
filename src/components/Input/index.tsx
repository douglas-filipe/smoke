import React from 'react';
import {StyleSheet} from 'react-native';
import {TextInput} from 'react-native-paper';
import {colors} from '../../themes';

interface InputProps {
  placeholder: string;
}

export const Input = ({placeholder}: InputProps) => {
  return (
    <TextInput
      underlineColor={colors.primary}
      activeUnderlineColor={colors.primary}
      placeholder={placeholder}
      style={styles.container}
      mode="flat"
    />
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
    width: '70%',
    fontSize: 16,
  },
});
