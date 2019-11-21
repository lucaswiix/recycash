import React, { useState, useEffect } from 'react';
import { StatusBar, AsyncStorage ,View, Text } from 'react-native';
import { NavigationEvents } from 'react-navigation';
import { styles } from './styles';
import Achievement from '../../components/Achievements';
import HistoricList from '../../components/HistoricList';
import config from '../../config';
import axios from 'axios';
import Balance from '../../components/Balance';
export default function Dashboard({ navigation }) {
  const [token, setToken] = useState('');
  const [user, setUser] = useState({});

  async function getUser(paramToken = token){
    try {
      let response = await axios.get(`${config.API}/user`, { headers:{

        "Authorization":" Bearer "+paramToken
      }
      });
      setUser(response.data);      
    } catch (error) {
      if(error.response && error.response.status == 401){
        await AsyncStorage.clear();
        navigation.navigate('Login');
      }
    }
  }
 
  async function verifyToken(){
    let $token = await AsyncStorage.getItem('token');
    if(!$token){
      await AsyncStorage.clear();
      navigation.navigate('Login');
      return;
    }
    setToken($token);
    getUser($token)
  }

  useEffect(() => {
    verifyToken();
  }, []);
  


  return (
    <View style={styles.container} >
      <StatusBar backgroundColor="white" barStyle="light-content" />
      
      { token.length > 0 && 
      <NavigationEvents
      onWillFocus={payload => getUser()}
      />
      }
      {user && <Balance data={user}/> }

      {/* <View style={styles.boxing}>
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
      </View> */}

      <View style={styles.boxing}>
        <Text style={styles.boxHeader}>
          Historico:
        </Text>
        { token.length > 0 && (
          <HistoricList token={token} limit={5}/>
        )
        }
      </View>
    </View>
  );
}
