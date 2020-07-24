import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {getData} from '../actions/dataCards'
import {View, ScrollView, StyleSheet, Button, Text} from 'react-native'

import reducers from '../reducers';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


  

 
  

const ButtonBar =({nav})=>{
 



    return (
        <View style= {styles.containner}>

          <View style= {styles.main}> 
          <Button title = 'Inicio' onPress={() => nav.navigation.navigate('Home')} ></Button> 
          </View>
          <View >
            <Button title = 'Notificaciones' style= {styles.notifications} onPress={() => nav.navigation.navigate('Notifications')}></Button> 
          </View>
          <View style= {styles.settings}>
            <Button title = 'Settings' onPress={() => nav.navigation.navigate('Settings')} ></Button> 
          </View>

        </View>
      
    
    )


}

export default ButtonBar

  const styles = StyleSheet.create({
    containner: {
      flex: 1,
      width: "100%",
      backgroundColor: 'red',
      flexDirection: 'row',
      alignItems: "center",
      // justifyContent: "center"

    },
    main: {
      flex: 1,
      width: "100%",
      backgroundColor: 'white',
      height: '100%', 
      alignItems: "center",
      justifyContent: "center"
      
    },
    notifications: {
      flex: 1,
      width: "100%",
      backgroundColor: 'white',
      height: '100%', 
      alignItems: "center",
      justifyContent: "center"
    },
    settings: {
      flex: 1,
      width: "100%",
      backgroundColor: 'white',
      height: '100%', 
      alignItems: "center",
      justifyContent: "center"
    }
  });
