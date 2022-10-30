import React from 'react';
import {StyleSheet} from 'react-native';
import {TextInput} from 'react-native-paper';
import {colors} from '../../themes';

interface InputProps {
  placeholder: string;
  setText?: (text: string) => void;
  text?: string;
  isPass?: boolean;
}

export const Input = ({
  placeholder,
  text,
  setText,
  isPass = false,
}: InputProps) => {
  return (
    <TextInput
      underlineColor={colors.primary}
      activeUnderlineColor={colors.primary}
      placeholder={placeholder}
      style={styles.container}
      mode="flat"
      onChangeText={setText}
      value={text}
      secureTextEntry={isPass}
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
