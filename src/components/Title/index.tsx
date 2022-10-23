import React from 'react';

import {StyleSheet, Text} from 'react-native';

interface TitleProps {
  text: string;
}

export const Title = ({text}: TitleProps) => {
  return <Text style={styles.container}>{text}</Text>;
};

const styles = StyleSheet.create({
  container: {
    color: '#171219',
    fontWeight: '600',
    fontSize: 20,
    marginTop: 20,
  },
});
