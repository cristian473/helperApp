import { StatusBar } from 'expo-status-bar';
import React, {useEffect} from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import {getData} from '../../actions/dataCards'
import {useDispatch, useSelector} from 'react-redux'
import TopBar from '../TopBar'
import Post from './post'
import { ScrollView } from 'react-native-gesture-handler';



const Home = props => {

    const dispatch = useDispatch();
    useEffect(()=>dispatch(getData()),[])
    // useEffect(()=>dispatch(getImages()),[])
    const helpers = useSelector(store => store.helpers)
    console.log(helpers)
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
          <ScrollView style={styles.scroll}>
            <View style={styles.contanerPosts}>
                {helpers.map((hel, index) => (
                  <Post key={index} name = {hel.superhero} body = {hel.first_appearance}/>
                ))}
            </View>
          </ScrollView>
          
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
  scroll:{
    width:'100%',
  },
  contanerPosts:{
    alignItems: 'center'
  }
});