import React from 'react';

import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createStackNavigator } from 'react-navigation-stack';
import { FontAwesome5 } from '@expo/vector-icons';
import { CustomDrawerComponent } from '../components/CustomDrawerComponent';

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

const RecyclageNavigator = createSwitchNavigator({
    Recycle
});

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
            headerRight: () => <FontAwesome5 name="recycle" size={24} onPress={() => navigation.navigate('Recycle')} color="white" style={{
                padding:10
              }} />,
            headerLeft: () => <FontAwesome5 name="bars" size={24} onPress={() => navigation.toggleDrawer()} color="white" style={{
                padding: 10
            }} />
        }),        
    },
    Recycle
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