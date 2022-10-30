import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {colors} from '../../themes';

interface RedirectProps {
  to: string;
  onPress: () => void;
}

export const Redirect = ({to, onPress}: RedirectProps) => {
  return (
    <Text onPress={onPress} style={sytles.container}>
      {to}
    </Text>
  );
};

const sytles = StyleSheet.create({
  container: {
    color: colors.primary,
    fontSize: 14,
  },
});
