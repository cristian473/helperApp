import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native';
// import Body from '../Body/body.js'
// import ButtonBar from '../buttonBar'
import TopBar from '../TopBar'


const Post = props => {
  
    
    return (
      <View style={styles.post}>
        <View style={styles.headerPost}>
          <Image source={{uri: 'https://media-exp1.licdn.com/dms/image/C4D03AQFFMLIngV-ZGg/profile-displayphoto-shrink_200_200/0?e=1600905600&v=beta&t=lt_syVi5BUp4dH--UjzIzJrUiteJNU5IKIP__1XfoFw'}} style={styles.profilePic}/>
          <View style={styles.profileName}><Text>{props.name}</Text></View>
        </View>
        
          <View style={styles.postText}><Text>{props.body}</Text></View>
        
        <View style={styles.actionsContainer}>
            <View style={styles.like}><Text>Like</Text></View>
            <View style={styles.comment}><Text>Comentar</Text></View>
            <View style={styles.sendMessage}><Text>Mensaje</Text></View>
        </View>
      </View>

  );
}

export default Post;

const styles = StyleSheet.create({

  post: {
    
    marginTop: 5,
    marginBottom: 5,
    width: '95%',
    backgroundColor:'#fff',
    borderColor:'#E0E0E0',
    borderWidth:1,
    borderRadius: 10,
    
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,

  }, 
  headerPost:{
    height:50,
    backgroundColor: '#fff',
    flexDirection: 'row',
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#E0E0E0'
  },
  profileName:{
      marginLeft: 10,
      
  },
  profilePic:{
    zIndex: 1,
    width: 30,
    height: 30,
    marginLeft: 8,
    borderRadius:100
  },

  postText:{
    backgroundColor:'#fff',
    padding: 10
  },
  actionsContainer:{
    height:50,
    backgroundColor: '#fff',
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
    flexDirection: 'row',
    
  },
  like:{
    flex:1,
    alignItems:'center',
    justifyContent: 'center'
    

  },
  comment:{
    flex:1,
    alignItems:'center',
    justifyContent: 'center'
  },
  sendMessage:{
    flex:1,
    alignItems:'center',
    justifyContent: 'center'
  }

  
 
});