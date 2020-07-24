import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import Body from './body'
// import ButtonBar from './buttonBar'
import TopBar from '../TopBar'


const Helpers = props => {
  
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.TopBar}>
        <TopBar title="Helpers" />
        </View>
        <View style={styles.cards}>
        <Body />
        </View>
        <StatusBar style="auto" />
    </SafeAreaView>
  );
}

export default Helpers;

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
  TopBar:{
    flex: 1.1,

  },
  bottonBar:{
    flex: 1
  }
});