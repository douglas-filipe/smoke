import React from 'react';
import {View} from 'react-native';

interface SpaceDownProps {
  value?: number;
}

export const SpaceDown = ({value = 20}: SpaceDownProps) => {
  return <View style={{marginBottom: value}} />;
};
