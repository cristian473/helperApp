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

export default function App() {
  const Stack = createStackNavigator();
  const Tab = createMaterialBottomTabNavigator ();
  return (
    <Provider store = {store}>
      
      <NavigationContainer>
      
        <Tab.Navigator>
          <Tab.Screen name="Home" component={Home} />
          <Tab.Screen name="Helpers" component={Helpers} />
          <Tab.Screen name="Mensajes" component={Messages} />
          <Tab.Screen name="Configuraciones" component={SettingsUser} />
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
