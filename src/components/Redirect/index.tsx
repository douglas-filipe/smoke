import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {colors} from '../../themes';

interface RedirectProps {
  to: string;
}

export const Redirect = ({to}: RedirectProps) => {
  return <Text style={sytles.container}>{to}</Text>;
};

const sytles = StyleSheet.create({
  container: {
    color: colors.primary,
    fontSize: 14,
  },
});
