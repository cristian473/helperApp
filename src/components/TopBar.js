import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {getData} from '../actions/dataCards'
import {View, ScrollView, StyleSheet, Text} from 'react-native'

import reducers from '../reducers';
// import { Button,ApplicationProvider,TopNavigation, Card, Layout, Text } from '@ui-kitten/components';


  

 
  

const TopBar = ({title}) =>{

    return (
      
          <View style = {styles.containner} >
            <Text style= {styles.title}>{title}</Text>
          </View>

    )


}

export default TopBar

  const styles = StyleSheet.create({
    containner:{
        flex:1,
        width:"100%",
        backgroundColor: '#9BD4F5',
        height: '100%', 
        // alignItems: "center",
        // justifyContent: "center"
        
    }, 
    title:{
      top:45,
      left:20,
      fontSize:20
       
    }
  });
