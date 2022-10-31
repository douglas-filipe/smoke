import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  FlatList,
  SafeAreaView,
  StyleSheet,
} from 'react-native';

import {NotificationCard} from '../../components/NotificationCard';
import {Title} from '../../components/Title';
import {api} from '../../services/api';
import jwt_decode from 'jwt-decode';
import {useAuth} from '../../contexts/Auth';
import {Empty} from '../../components/Empty';

interface IDecoded {
  id: string;
}

export const History = ({navigation}: any) => {
  const {token} = useAuth();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const reqStatus = async () => {
    setLoading(true);
    const decoded: IDecoded = await jwt_decode(token);
    const response = await api.get(`/status/${decoded.id}`);
    setData(response.data);
    setLoading(false);
  };

  useEffect(() => {
    reqStatus();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      {loading ? (
        <ActivityIndicator style={styles.loading} size={40} color="#05A1FC" />
      ) : (
        <>
          {data.length === 0 ? (
            <Empty />
          ) : (
            <>
              <Title text="Histórico:" />
              <FlatList
                contentContainerStyle={styles.flatList}
                data={data}
                renderItem={({item}: any) => (
                  <NotificationCard
                    onPress={() =>
                      navigation.navigate('NotificationDetails', {
                        status: item?.status,
                      })
                    }
                    status={item?.status}
                  />
                )}
                keyExtractor={(item: any) => item.id}
              />
            </>
          )}
        </>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fbfbfb',
  },

  flatList: {
    justifyContent: 'center',
    width: '80%',
    alignSelf: 'center',
    flexDirection: 'column-reverse',
  },

  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
