import { View, Text ,Image,TextInput, Pressable} from 'react-native'
import React from 'react'
import Header from '../Header'

const LoginScreen = ({navigation}) => {
  return (
    <View style={{paddingTop: 30, flex: 1, backgroundColor: '#DE1F26'}}>
   <Header/>

   <View style={{marginTop: 100}}>
    <Text style={{fontSize: 30,color: 'white', margin: 10 }}>Furo Account</Text>

    <View style={{margin: 10}}>
        <TextInput
         textContentType='emailAddress'
        placeholder="Gali Faldan Email" placeholderTextColor={'white'} style={{padding: 10, backgroundColor: '#444444',color: 'white', borderRadius: 5, marginBottom: 18, fontSize: 18}} />
        <TextInput placeholder="Gali Fadlan Password" 
        textContentType='password'
        secureTextEntry={true}
        placeholderTextColor={'white'} style={{padding: 10, backgroundColor: '#444444', borderRadius: 5,fontSize: 18,color: 'white'}} />
    </View>
    <Pressable style={{padding: 10, backgroundColor: '#444444', borderRadius: 5,margin: 10, justifyContent: 'center'}}>
        <Text style={{textAlign: 'center', fontSize: 20,color: 'white'}}>SING IN</Text>
    </Pressable>
    <Pressable style={{marginTop: 20}} onPress={()=> navigation.navigate('singup')}>
        <Text style={{color: 'white', fontSize: 20, fontWeight: '300' ,textAlign: 'center'}}>Account Ma ahaysto ? <Text style={{fontWeight: '600',textDecorationLine: 'underline', textDecorationColor: 'black'}}>SINGUP</Text></Text>
    </Pressable>
   </View>
    </View>
  )
}

export default LoginScreen