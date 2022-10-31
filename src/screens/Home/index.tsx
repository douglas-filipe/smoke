import React, {useEffect, useState} from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';
import {
  NotificationCardDetails,
  StatusTypes,
} from '../../components/NotificationCardDetails';
import {useAuth} from '../../contexts/Auth';
import {api} from '../../services/api';
import jwt_decode from 'jwt-decode';
interface IDecoded {
  id: string;
}

export const Home = () => {
  const {token} = useAuth();
  const [status, setStatus] = useState<StatusTypes>('SUCCESS');
  const [loading, setLoading] = useState(false);

  const reqUser = async () => {
    setLoading(true);
    const decoded: IDecoded = await jwt_decode(token);
    const response = await api.get(`/user/${decoded.id}`);
    setLoading(false);
    setStatus(response.data.status[0].status);
  };

  useEffect(() => {
    reqUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator style={styles.loading} size={40} color="#05A1FC" />
      ) : (
        <NotificationCardDetails status={status} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fbfbfb',
    alignItems: 'center',
    justifyContent: 'center',
  },

  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
