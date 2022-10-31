import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export const Empty = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <Icon name="alert-circle" size={80} color={'#05A1FC'} />
      <Text style={styles.title}>Seu histórico está vazio.</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },

  title: {
    color: 'black',
    fontSize: 16,
    fontWeight: '600',
    marginTop: 10,
  },
});
