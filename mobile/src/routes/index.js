import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createStackNavigator } from 'react-navigation-stack';
import { FontAwesome5 } from '@expo/vector-icons';

/* [Pages] */
import Login from '../pages/Login';
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

const Drawer = createDrawerNavigator({
    Dashboard: DashboardNavigator,
    Historic: HistoricNavigator,
    Sair: SettingsNavigator
    
});

const RecyclageNavigator = createStackNavigator({
    Recyclage: Recycle
},{
    headerMode: 'none'
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
    Main
},
    {
        initialRouteName: 'Login',
    });

export default createAppContainer(navigation);