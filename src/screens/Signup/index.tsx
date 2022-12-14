import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import {Button} from '../../components/Button';
import {Input} from '../../components/Input';
import {Logo} from '../../components/Logo';
import {Redirect} from '../../components/Redirect';
import {SpaceDown} from '../../components/SpaceDown';
import {Title} from '../../components/Title';
import {colors} from '../../themes';
import {useForm, Controller} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';
import {api} from '../../services/api';
import Toast from 'react-native-toast-message';
import {ErrorText} from '../../components/ErrorText';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

export const Signup = ({navigation}: any) => {
  const [loading, setLoading] = useState(false);

  const schema = yup.object({
    email: yup.string().email('Insira um email').required('Campo obrigatório'),
    password: yup.string().required('Campo obrigatório'),
    name: yup.string().required('Campo obrigatório'),
  });

  const {
    control,
    handleSubmit,
    formState: {errors, isValid},
  } = useForm({
    mode: 'onChange',
    defaultValues: {
      email: '',
      password: '',
      name: '',
    },
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: any) => {
    setLoading(true);
    try {
      const response = await api.post('/users', {
        email: data.email,
        password: data.password,
        name: data.name,
        telephone: '92995171372',
      });
      console.log(response.data);
      return Toast.show({
        type: 'success',
        text1: 'Faça o login',
      });
    } catch (e: any) {
      console.log(e.message);
      return Toast.show({
        type: 'error',
        text1: 'Email já existe',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <KeyboardAwareScrollView
      style={{backgroundColor: '#4c69a5'}}
      resetScrollToCoords={{x: 0, y: 0}}
      contentContainerStyle={styles.container}
      scrollEnabled={true}>
      <Logo marginTop={0} />

      <Title text="Crie sua conta" />

      <SpaceDown />

      <Controller
        control={control}
        rules={{required: true}}
        render={({field: {onChange, value}}) => (
          <Input setText={onChange} text={value} placeholder="Nome" />
        )}
        name="name"
      />

      {errors.name?.message && <ErrorText message={errors.name?.message} />}

      <SpaceDown />

      <Controller
        control={control}
        rules={{required: true}}
        render={({field: {onChange, value}}) => (
          <Input setText={onChange} text={value} placeholder="Email" />
        )}
        name="email"
      />

      {errors.email?.message && <ErrorText message={errors.email?.message} />}

      <SpaceDown />

      <Controller
        control={control}
        rules={{required: true}}
        render={({field: {onChange, value}}) => (
          <Input isPass setText={onChange} text={value} placeholder="Senha" />
        )}
        name="password"
      />

      {errors.password?.message && (
        <ErrorText message={errors.password?.message} />
      )}

      <SpaceDown value={40} />

      <Button
        text="Enviar"
        onPress={handleSubmit(onSubmit)}
        disable={!isValid || loading}
      />

      <SpaceDown />

      <Redirect
        to="Entre em sua conta"
        onPress={() => navigation.navigate('Login')}
      />
    </KeyboardAwareScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    alignItems: 'center',
  },
});
