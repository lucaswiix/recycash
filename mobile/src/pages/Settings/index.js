import React, {useEffect} from 'react';
import { View, Text } from 'react-native';

// import { Container } from './styles';

export default function Settings({navigation}) {
    useEffect(() => {
        function handleLogout(){
            setTimeout(() => {
                navigation.navigate('Login')
            }, 2000);
        }
        return handleLogout();
    }, []);
    

  return (
      <View style={{flex:1, alignItems:'center', margin: 30 }}>          
          <Text >Encerrando a sessão...</Text>
      </View>
  );
}
