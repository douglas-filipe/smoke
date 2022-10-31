import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export type StatusTypes = 'WARNING' | 'INFO' | 'DANGER' | 'SUCCESS';

interface NotificationCardDetailsProps {
  status: StatusTypes;
}

export const NotificationCardDetails = ({
  status,
}: NotificationCardDetailsProps) => {
  const getStatus = () => {
    const findStatus = {
      WARNING: {
        title: 'Fique atento',
        subtitle: 'Verifique sua residência, foi detectado gás inflamável.',
        color: '#DBBA00',
      },
      INFO: {
        title: 'Risco detectado',
        subtitle: 'Foi detectado uma pequena quantidade de gás inflamável.',
        color: '#4653DB',
      },
      DANGER: {
        title: 'Alerta de risco',
        subtitle:
          'Você está correndo perigo, peça ajuda as autoridades mais próximas.',
        color: '#DB5A5E',
      },
      SUCCESS: {
        title: 'Você está seguro',
        subtitle: 'Não foi detectado nenhum problema.',
        color: '#23C65C',
      },
    };

    if (!findStatus[status]) {
      return findStatus.SUCCESS;
    }

    return findStatus[status];
  };
  return (
    <View style={styles.container}>
      {status === 'SUCCESS' ? (
        <Icon name="checkmark-circle" size={80} color={getStatus().color} />
      ) : (
        <Icon name="alert-circle" size={80} color={getStatus().color} />
      )}
      <Text style={styles.title}>{getStatus()?.title}</Text>
      <Text style={styles.subtitle}>{getStatus()?.subtitle}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  title: {
    marginTop: 22,
    color: 'black',
    fontSize: 16,
    fontWeight: '600',
  },

  subtitle: {
    marginTop: 10,
    color: 'black',
    fontSize: 14,
    textAlign: 'center',
    width: 220,
  },
});
