import React, {useState, useEffect} from 'react';
import { AsyncStorage, ScrollView, View, Text } from 'react-native';
import { DrawerItems } from 'react-navigation-drawer';

// import { Container } from './styles';

export const CustomDrawerComponent = ( props ) => {
    const [user, setUser] = useState('');

    async function getName(){
        let username = await AsyncStorage.getItem('username');
        setUser(username);
    }

    useEffect(()=>{
        getName()
    }, [])

    return (
    <ScrollView>
        <View style={{
            flex:1, 
            height: 60, 
            borderColor: '#000',
            borderBottomWidth: 1,
            }}>

        <Text style={{
            padding: 20, 
            fontWeight: 'bold', 
            fontSize: 20,
            }}>{user.length > 0 && user}</Text>

        </View>
        <DrawerItems {...props} />
      </ScrollView>
    );
}