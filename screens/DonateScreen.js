import { View, Text, Image } from 'react-native'
import React from 'react'
import Header from '../Header'

const DonateScreen = () => {
  return (
    <View style={{flex: 1, backgroundColor: '#fff', paddingTop: 20}}>
     <View>
         
         <Image
           source={require("../assets/Screenshot__186_-removebg-preview.png")}
           style={{ width: 300, height: 100, resizeMode: "contain" }}
         />
 
         </View>
         <View>
            <Text style={{fontSize: 30, color: 'black', marginLeft: 20}}>Jazaka Allah Kheyr</Text>
         </View>
         <View>
            <Image source={require('../assets/2_274_surah_baqarah.png')}  style={{resizeMode: 'contain', width: 400, height: 140}}/>
         </View>
         <View style={{marginTop: 80}}>
            <Image source={require('../assets/jazaka.png')} style={{height: 450, resizeMode: 'cover',width: "100%"}} />
         </View>
       
    </View>
  )
}

export default DonateScreen