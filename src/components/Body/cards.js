import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {getData, getImages} from '../../actions/dataCards'
import {View, ScrollView, StyleSheet, Text, Image} from 'react-native'
// import * as eva from '@eva-design/eva';
import {BorderShadow} from 'react-native-shadow'
import { Button } from 'react-native-elements';

// import { Button,ApplicationProvider, Card, Layout, Text } from '@ui-kitten/components';


  

 
  

const Cards =()=>{
    const dispatch = useDispatch();
    useEffect(()=>dispatch(getData()))
    useEffect(()=>dispatch(getImages()),[])
    const helpers = useSelector(store => store.helpers)
    const images = useSelector(store=>store.imageCard)

    const shadowOpt = {
      width:300,
      height:500,
      color:"#000",
      border:2,
      radius:3,
      opacity:0.2,
      x:0,
      y:3,
      style:{marginVertical:5}
  }




    const cardList = ()=> {

        return helpers.map((helper, index) => {
          return (
             
                <View key={index} style = {styles.card}>
                 
                    <Image source={require('../../../assets/photo.jpg')} style={styles.image}/>
                    <View style={styles.infoCountainer}>
                      <Text>{helper.superhero}</Text>
                      <Text>{helper.edad} años</Text>
                    </View>
                    
                    
                    <Button buttonStyle={styles.buttonView} title="Mas info"/>               
                           
               
                </View>
         
            
            
            
          )
        })
    
    }
    



    return (
    
        
            <View style={styles.containerCards}>
        

            
                {cardList()}
            
            </View>
    
    )


}

export default Cards

  const styles = StyleSheet.create({
    topContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    card: {
      flex: 3,
      margin: 2,
      marginBottom: 50,
      width: '90%',
      height: 250,
      borderColor:"#000",
      borderWidth:1,
      borderRadius: 20,
      
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 3,
      },
      shadowOpacity: 0.27,
      shadowRadius: 4.65,

      elevation: 6,

    },
    image:{
        width:'100%',
        height:'60%',
        borderTopLeftRadius:20,
        borderTopRightRadius:20
    },
    containerCards:{
        alignItems:'center',
        top:30
    },
    containner:{
        flex:1,
        width:"100%"
    },
    footerContainer: {
      flexDirection: 'row',
      justifyContent: 'flex-end',
    },
    buttonView: {
      borderBottomLeftRadius:20,
      borderBottomRightRadius:20,

    },
    infoCountainer:{
        alignItems:'center',
        paddingTop:5,
        paddingBottom: 15,
        
        width: "100%",
        backgroundColor:'white'
        
    }
  });
