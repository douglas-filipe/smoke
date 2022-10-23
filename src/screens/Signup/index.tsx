import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Button} from '../../components/Button';
import {Input} from '../../components/Input';
import {Logo} from '../../components/Logo';
import {Redirect} from '../../components/Redirect';
import {SpaceDown} from '../../components/SpaceDown';
import {Title} from '../../components/Title';
import {colors} from '../../themes';

export const Signup = () => {
  return (
    <View style={styles.container}>
      <Logo />

      <Title text="Crie sua conta" />

      <SpaceDown />

      <Input placeholder="Nome" />

      <SpaceDown />

      <Input placeholder="Email" />

      <SpaceDown />

      <Input placeholder="Senha" />

      <SpaceDown value={40} />

      <Button text="Enviar" />

      <SpaceDown />

      <Redirect to="Entre em sua conta" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    alignItems: 'center',
  },
});
