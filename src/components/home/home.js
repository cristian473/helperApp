import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
// import Body from '../Body/body.js'
// import ButtonBar from '../buttonBar'
import TopBar from '../TopBar'


const Home = props => {
  
    return (
    //   <SafeAreaView style={styles.container}>
    //     <View style={styles.TopBar}>
    //     <TopBar title="Inicio" />
    //     </View>
    //     <View style={styles.cards}>
    //     <Body />
    //     </View>
    //     <StatusBar style="auto" />
    // </SafeAreaView>

      <View style={styles.container}>
        <View style={styles.TopBar}>
          <TopBar title='Inicio' />
        </View>
        <View style={styles.containerHome}>
          <Text>Home</Text>
        </View>
      </View>

  );
}

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  containerHome:{
    flex: 9,
    alignItems: 'center',
    justifyContent: 'center'
    
  },
  TopBar:{
    flex: 1.1,

  },
  bottonBar:{
    flex: 1
  }
});