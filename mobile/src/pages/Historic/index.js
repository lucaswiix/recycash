import React, {useState, useEffect} from 'react';
import { AsyncStorage, View, Text } from 'react-native';
import HistoricList from '../../components/HistoricList';

import { styles } from './styles';

export default function Historic({ navigation }) {
  const [token, setToken] = useState([]);

      async function getAsyncStorage(){
        const token = await AsyncStorage.getItem('token')
        if(!token){
          navigation.navigate('Login');
          return;
        }
        setToken(token);
      }

      useEffect(()=> {
        getAsyncStorage()
      }, []);

  return (
    <View style={styles.container}>
        <Text style={styles.header}>
           Histórico das transações
        </Text>
        <HistoricList token={token} />
    </View>
  );
}
