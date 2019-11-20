import React, { useState, useEffect, useCallback } from 'react';
import { StatusBar, AsyncStorage ,View, Text, FlatList } from 'react-native';
import { styles } from './styles';
import Achievement from '../../components/Achievements';
import HistoricList from '../../components/HistoricList';
export default function Dashboard({ navigation }) {
  const fakeData = {
    achivements: [
      {
        id: 1,
        title: '50KG Reciclados',
        isDone: false
      },
      {
        id: 2,
        title: 'Amigo da natureza',
        isDone: false
      },
      {
        id: 3,
        title: 'Novo usuario',
        isDone: false
      },
      {
        id: 4,
        title: 'Bom reciclador',
        isDone: false
      }
    ],
    history: [
      {
        id: 0,
        date: '18/10',
        size: '24kg',
        price: 'R$ 4.90'
      },
      {
        id: 1,
        date: '19/10',
        size: '16kg',
        price: 'R$ 2.60'
      },
      {
        id: 2,
        date: '20/10',
        size: '29kg',
        price: 'R$ 7.90'
      }
    ]
  }

  async function getUser(){
    let userStore = await AsyncStorage.getItem('user');
    if(!userStore){
      navigation.navigate('Login');
    }
    setUser(JSON.parse(userStore));
  }

  useEffect(() => {
    getUser();
  });
  
  const [user, setUser] = useState([]);

  return (
    <View style={styles.container} >
      <StatusBar backgroundColor="white" barStyle="light-content" />

      <View style={styles.boxing}>
        <Text style={styles.boxHeaderBalance}>
          Saldo
        </Text>
        <Text style={styles.boxDescBalance}>
          R$ {user.balance ? parseFloat(user.balance).toFixed(2) : 0}
        </Text>
      </View>

      <View style={styles.boxing}>
        <Text style={styles.boxHeader}>
          Ranking
        </Text>
        
        <FlatList
          style={{
            marginTop: 10
          }}
          data={user.achievements}
          renderItem={({ item, index, separators }) => <Achievement
            title={item.title}
            isDone={item.isDone} />
          }
          keyExtractor={item => item.id.toString()}
        />
      </View>

      <View style={styles.boxing}>
        <Text style={styles.boxHeader}>
          Historico:
        </Text>
        <HistoricList data={user.history} limit={5}/>
      </View>
    </View>
  );
}
