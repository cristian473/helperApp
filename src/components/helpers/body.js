import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput } from 'react-native';
import Cards from './cards'
import ImageSlider from './ImageSlider'



const Body = ()=> {
  return (
    <View style={styles.container}>
          
          <ScrollView style = {styles.scroll}>
  
            <View style={{ alignItems: "center" }}>
              <TextInput
                style={styles.searchProblems}
                placeholder={'En que te podemos ayudar hoy?'}
              />
            </View>
              <View >
                  <ImageSlider />
              </View>
              <View>
                  <Cards />
              </View>
          </ScrollView>
    </View>
   
  );
}

export default Body

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
    flex: 1.1

  },
  bottonBar:{
    flex: 1
  },
  searchProblems:{ 
    height: 40, 
    borderColor: 'gray', 
    borderWidth: 1, 
    width: "90%", 
    borderRadius:10,
    marginTop: 10,
    marginBottom: 10,
    paddingLeft: 10,
    shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 3,
      },
      shadowOpacity: 0.27,
      shadowRadius: 4.65,

      elevation: 6,
    backgroundColor: 'white'
  },
  scroll:{
      flex: 1,
      width: "100%",
      
  }
});
