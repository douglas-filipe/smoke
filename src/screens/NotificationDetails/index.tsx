import React from 'react';
import {StyleSheet, View} from 'react-native';
import {NotificationCardDetails} from '../../components/NotificationCardDetails';

export const NotificationDetails = ({route}: any) => {
  const {params: status} = route;

  return (
    <View style={styles.container}>
      <NotificationCardDetails status={status.status} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fbfbfb',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -60,
  },
});
