import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Settings } from 'react-native';
import {Provider} from 'react-redux'
import Messages from './src/components/messages/messages'
import SettingsUser from './src/components/configurations/settings'
import Home from './src/components/home/home'
import Helpers from './src/components/helpers/home'


import store from './src/store'

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator  } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function App() {
  const Stack = createStackNavigator();
  const Tab = createMaterialBottomTabNavigator ();
  return (
    <Provider store = {store}>
      
      <NavigationContainer>
      
        <Tab.Navigator >
          <Tab.Screen name="Home" component={Home} 
            options = {{
              tabBarIcon: ({color}) => (
                <MaterialCommunityIcons name="home" color={color} size={26} />
              )

          }}/>
          <Tab.Screen name="Helpers" component={Helpers} 
            options= {{
              tabBarIcon: ({color}) => (
                <MaterialCommunityIcons name = 'charity' color = {color} size = {26}/>
              )
            }}
          />
          <Tab.Screen name="Mensajes" component={Messages}
            options= {{
              tabBarIcon: ({color}) => (
                <MaterialCommunityIcons name = 'forum' color = {color} size = {26}/>
              )
            }}

          />
          <Tab.Screen name="Configuraciones" component={SettingsUser} 
            options= {{
              tabBarIcon: ({color}) => (
                <MaterialCommunityIcons name = 'account' color = {color} size = {26}/>
              )
            }}

          />
        </Tab.Navigator>
        
      </NavigationContainer>
      
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  cards:{
    flex: 9
  },
  bottonBar:{
    flex: 1
  }
});
