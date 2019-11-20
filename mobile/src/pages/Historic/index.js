import React, {useState, useEffect} from 'react';
import { AsyncStorage, View, FlatList, Text } from 'react-native';
import HistoricList from '../../components/HistoricList';

import { styles } from './styles';

export default function Historic() {
  const [user, setUser] = useState([]);

      async function getAsyncStorage(){
        const user = await AsyncStorage.getItem('user');
        setUser(JSON.parse(user));
      }
      useEffect(()=> {
        getAsyncStorage()
      }, []);
  return (
    <View style={styles.container}>
        <Text style={styles.header}>
           Histórico das transações
        </Text>
        <HistoricList data={user.history} />
    </View>
  );
}
