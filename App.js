import React from 'react';
import {View, Text, Image, ImageBackground} from 'react-native';

const App =() => {
  return(
      <View style={{backgroundColor:'#f4f4f4',alignItems:"center",justifyContent:"center",height:'100%',}}>
          <ImageBackground style={{height:"100%",width:"100%",}} source={require('../FirebaseApp/src/assets/App_icon.png')}>
        <Text style={{color:'#000',fontSize:25,fontWeight:'700'}}>FASTLANE</Text>
        <Text style={{color:'#000',fontSize:25,fontWeight:'700'}}>WITH</Text>
          <Text style={{color:'#000',fontSize:25,fontWeight:'700'}}>FIREBASE</Text>
          <Text style={{color:'#000',fontSize:25,fontWeight:'700'}}>ACTIONS</Text>
          <Text style={{color:'#000',fontSize:25,fontWeight:'700'}}>WITH</Text>
          <Text style={{color:'#000',fontSize:25,fontWeight:'700'}}>GITHUB</Text>
          <Text style={{color:'#000',fontSize:25,fontWeight:'700'}}>ACTIONS</Text>
          </ImageBackground>
      </View>
  )
}
export default App
