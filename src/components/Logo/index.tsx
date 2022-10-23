import React from 'react';
import {Image, StyleSheet} from 'react-native';
import Logotipo from '../../assets/logo.png';

export const Logo = () => {
  return <Image style={styles.container} source={Logotipo} />;
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
});
