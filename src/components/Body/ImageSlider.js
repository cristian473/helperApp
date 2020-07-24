import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {getData} from '../../actions/dataCards'
import {View, ScrollView, Image, StyleSheet} from 'react-native'
// import * as eva from '@eva-design/eva';
import reducers from '../../reducers';
// import { Button,ApplicationProvider,TopNavigation, Card, Layout, Text } from '@ui-kitten/components';


  

 
  

const ImageSlider =()=>{
    // const dispatch = useDispatch();
    // useEffect(()=>dispatch(getData()))
    // const helpers = useSelector(store => store.helpers)


    // const Header = (helpe, props) => (
    //     <View >
    //       <Text category='h6'>{helpe.superhero}</Text>
    //       <Text category='s1'>By Wikipedia</Text>
    //     </View>
    //   );
    


  // const cardList = ()=> {

  //     return helpers.map((helper, index) => {
  //       return (
          
  //             <Card key={index} style = {styles.card}  header={()=>Header(helper)}>
  
  //                 <Text>{helper.superhero}</Text>
  //                 <Text>ediaatossorial: {helper.publisher}</Text>
  //                 <Button style={styles.footerControl}>Hola Soy el button</Button>
              
  //             </Card>
          
          
  //       )
  //     })
  
  // }
    



    return (
      
          <View style = {styles.containner} >
              {/* <Text>hoplaa</Text> */}
              <Image
                // style={styles.tinyLogo}
                source={{
                uri: 'https://images.unsplash.com/photo-1587974928365-eb5d6b108395?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=600&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=800',
                }}
            />

          </View>

      
    
    )


}

export default ImageSlider

  const styles = StyleSheet.create({
    containner:{
        flex:1,
        width:"100%",
        backgroundColor: 'white',
        height: '100%', 
        alignItems: "center",
        justifyContent: "center"
        
        
        
    }, 
    title:{
      marginTop: 25
    }
  });
