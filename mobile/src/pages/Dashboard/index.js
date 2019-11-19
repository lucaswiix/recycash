import React, { useState, useEffect } from 'react';
import { View, Text, FlatList } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { styles } from './styles';
import Achievement from '../../components/Achievements';
import HistoricList from '../../components/HistoricList';
export default function Dashboard() {
  const fakeData = {
    achivements: [
      {
        id: 1,
        title: '50KG Reciclados',
        isDone: true
      },
      {
        id: 2,
        title: 'Amigo da natureza',
        isDone: true
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
    historic: [
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

  const [balance, setBalance] = useState('104,50');
  const [historic, setHistoric] = useState(fakeData.historic);

  const [achievements, setAchievements] = useState(fakeData.achivements);
  return (
    <View style={styles.container} >

      <View style={styles.boxing}>
        <Text style={styles.boxHeaderBalance}>
          Saldo
        </Text>
        <Text style={styles.boxDescBalance}>
          R$ {balance ? balance : 0}
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
          data={achievements}
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
        <HistoricList data={historic} limit={5}/>
      </View>
    </View>
  );
}
