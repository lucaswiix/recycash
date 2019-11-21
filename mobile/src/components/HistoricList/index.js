import React, {useState, useEffect} from 'react';
import { AsyncStorage, View, Text, FlatList, ActivityIndicator } from 'react-native';
import { NavigationEvents} from 'react-navigation';
// import { Container } from './styles';
import axios from 'axios';
import config from '../../config';
import moment from 'moment';

export default function HistoricList({navigation, limit = 30}) {
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(false);
  const [token, setToken] = useState('');


  async function getHistory(){
    setLoading(true);
    try {
      const token = await AsyncStorage.getItem('token');
      if(!token) navigation.navigate('Login');
      let response = await axios.get(`${config.API}/user/recyclages`, { headers:{
        "Authorization":" Bearer "+token,
        "perPage": limit.toString(),
      }
      });
        setHistory(response.data.data);      
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  }

  useEffect(()=>{
    getHistory()
  }, [])

  return (
      <View>      
        
        {!loading ? (          
          <View>
            <NavigationEvents
              onWillFocus={payload => getHistory()}
            />
          <View style={{
              flexDirection:'row',
              justifyContent:'space-between',
              marginTop: 10
            }}>
              <Text>
                Data
              </Text>
              <Text>
                Peso
              </Text>
              <Text>
                Preço
              </Text>
            </View>
            <View>
            <FlatList
              data={history}
              renderItem={({ item, index, separators }) => (
                <View style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginTop: 10
                }}>
                  <Text>
                    { moment(item.updated_at).format('DD/MM hh:mm') }
                  </Text>
                  <Text>
                    {item.size}Kg
                  </Text>
                  <Text>
                    R$ {item.price.toFixed(2)}      
                  </Text>
                </View>
              )}
              keyExtractor={item => item.id.toString()}
              ListEmptyComponent={() => (
                <Text style={{alignSelf:'center', marginVertical: 10, fontWeight:'bold'}}>Nenhuma venda encontrada.</Text>
              )}
            />
            </View>
            </View>
            ) : (
              <ActivityIndicator size="small" color="#000" />
              )}

      </View>
  );
}
