import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TopBar from '../TopBar'


const Messages = () => {

    return (
        <View style={styles.container}>
            <View style={styles.TopBar}>
                <TopBar title ='Menesajes'/>
            </View>
            <View style={styles.containerNotifications}>
                <Text>Mensajes</Text>
            </View>
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      
      backgroundColor: '#fff',
      
    },
    containerNotifications:{
      flex: 9,
      alignItems: 'center',
      justifyContent: 'center'
      
    },
    TopBar:{
      flex: 1.1
  
    },
    // bottonBar:{
    //   flex: 1
    // }
  });


export default Messages