import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {colors} from '../../themes';

type StatusTypes = 'WARNING' | 'INFO' | 'DANGER';

interface NotificationCardProps {
  status: StatusTypes;
  onPress: () => void;
}

export const NotificationCard = ({status, onPress}: NotificationCardProps) => {
  const getStatus = () => {
    const findStatus = {
      WARNING: {
        title: 'Fique atento',
        color: '#DBBA00',
      },
      INFO: {
        title: 'Risco detectado',
        color: '#4653DB',
      },
      DANGER: {
        title: 'Alerta de risco',
        color: '#DB5A5E',
      },
    };

    return findStatus[status];
  };
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <View style={styles.alert}>
        <Icon name="alert-circle" size={24} color={getStatus().color} />
        <Text style={styles.title}>{getStatus()?.title}</Text>
      </View>
      <Icon name="arrow-forward-outline" size={20} color={colors.primary} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 42,
    backgroundColor: 'white',
    borderRadius: 10,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.15,
    shadowRadius: 1.0,
    elevation: 1,
    flexDirection: 'row',
    paddingHorizontal: 10,
    marginBottom: 15,
  },

  alert: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  title: {
    color: 'black',
    fontSize: 14,
    fontWeight: '600',
    marginLeft: 7,
  },
});
