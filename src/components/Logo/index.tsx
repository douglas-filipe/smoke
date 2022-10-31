import React from 'react';
import Logotipo from '../../assets/logo.png';
import {Image} from 'react-native';

interface LogoProps {
  marginTop?: number;
}

export const Logo = ({marginTop = 20}: LogoProps) => {
  return <Image style={{marginTop}} source={Logotipo} />;
};
