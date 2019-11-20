import React, {useState, useEffect} from 'react';
import { AsyncStorage, ScrollView, View, Text } from 'react-native';


import {  createAppContainer, createSwitchNavigator } from 'react-navigation';
import { DrawerItems, createDrawerNavigator } from 'react-navigation-drawer';
import { createStackNavigator } from 'react-navigation-stack';
import { FontAwesome5 } from '@expo/vector-icons';

/* [Pages] */
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import Dashboard from '../pages/Dashboard';
import Recycle from '../pages/Recycle';
import Historic from '../pages/Historic';
import Settings from '../pages/Settings';

const DashboardNavigator = createSwitchNavigator({
    Dashboard
});

const HistoricNavigator = createSwitchNavigator({
    Historic
});

const SettingsNavigator = createSwitchNavigator({
    Settings
});

const CustomDrawerComponent = (props) => {
    const [user, setUser] = useState('');

    async function getName(){
        let userAll = await AsyncStorage.getItem('user');
        setUser(JSON.parse(userAll).name);
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
            }}>{user && user}</Text>
        </View>
        <DrawerItems {...props} />
      </ScrollView>
    );
}

const Drawer = createDrawerNavigator({
    Resumo: DashboardNavigator,
    Historico: HistoricNavigator,
    Sair: SettingsNavigator    
},
{
    contentComponent: CustomDrawerComponent,
    'drawerOpenRoute': 'DrawerOpen',
    'drawerCloseRoute': 'DrawerClose',
    'drawerToggleRoute': 'DrawerToggle',
    navigationOptions: {
        gesturesEnabled: false,
    },
});

const RecyclageNavigator = createStackNavigator({
    Recyclage: Recycle
},{
    headerMode: 'none'
});


const SignupNavigator = createStackNavigator({
    Cadastro: {
        screen: Signup,
        navigationOptions: ({ navigation }) => ({
            title: `Cadastro`,
            headerStyle: {
                backgroundColor: '#4CBC4C'                
            },
            headerTitleStyle: {
                color: '#fff',
                fontSize: 24,
                fontWeight: '300',
            },            
            headerLeft: () => <FontAwesome5 name="chevron-left" size={24} onPress={() => navigation.navigate('Login')} color="white" style={{
                padding: 10
            }} />
        }),  
    }
        
});

const Main = createStackNavigator({
    Default: {
        screen: Drawer,
        navigationOptions: ({ navigation }) => ({
            title: `Recycash`,
            headerStyle: {
                backgroundColor: '#4CBC4C'
            },
            headerTitleStyle: {
                color: '#fff',
                fontSize: 24,
                fontWeight: '300',
            },
            headerRight: () => <FontAwesome5 name="recycle" size={24} onPress={() => navigation.navigate('newRecycling')} color="white" style={{
                padding:10
              }} />,
            headerLeft: () => <FontAwesome5 name="bars" size={24} onPress={() => navigation.toggleDrawer()} color="white" style={{
                padding: 10
            }} />
        }),        
    },
    newRecycling:{
        screen: RecyclageNavigator,
    }
},{
    initialRouteName: 'Default',
    cardStyle:{
        backgroundColor: '#E9EBEE'
    }
})

const navigation = createSwitchNavigator({
    Login,
    Signup: SignupNavigator,
    Main
},
    {
        initialRouteName: 'Login',
    });

export default createAppContainer(navigation);