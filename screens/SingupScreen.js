import { View, Text ,Image,TextInput, Pressable} from 'react-native'
import React from 'react'
import Header from '../Header'

const SingupScreen = ({navigation}) => {
  return (
    <View style={{paddingTop: 30, flex: 1, backgroundColor: '#DE1F26'}}>
   <Header/>

   <View style={{marginTop: 100}}>
    <Text style={{fontSize: 30,color: 'white', margin: 10 }}>Furo Account</Text>

    <View style={{margin: 10}}>
        <TextInput 
        textContentType='emailAddress'
        placeholder="Email" placeholderTextColor={'white'} style={{padding: 10, backgroundColor: '#444444', color: 'white',borderRadius: 5, marginBottom: 18, fontSize: 18}} />
        <TextInput
        textContentType='emailAddress'
        placeholder="UserName" placeholderTextColor={'white'} style={{padding: 10, backgroundColor: '#444444',  color: 'white',borderRadius: 5, marginBottom: 18, fontSize: 18}} />
        <TextInput
                textContentType='password'
                secureTextEntry={true}
        placeholder="Password" placeholderTextColor={'white'} style={{padding: 10, backgroundColor: '#444444', color: 'white',  borderRadius: 5,fontSize: 18}} />
    </View>
    <Pressable 
    onPress={()=> navigation.navigate('Home')}
    style={{padding: 10, backgroundColor: '#444444', borderRadius: 5,margin: 10, justifyContent: 'center'}}>
        <Text style={{textAlign: 'center', fontSize: 20,color: 'white'}}>SING UP</Text>
    </Pressable>
    <Pressable style={{marginTop: 20}} >
        <Text style={{color: 'white', fontSize: 20, fontWeight: '300' ,textAlign: 'center'}}>Account Waan ahaystaa ? <Text style={{fontWeight: '600',textDecorationLine: 'underline', textDecorationColor: 'black'}}>LOGIN</Text></Text>
    </Pressable>
   </View>
    </View>
  )
}

export default SingupScreen