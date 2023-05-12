import { View, Text ,Image, Pressable} from 'react-native'
import React from 'react'

const Header = () => {
  return (
    <View style={{flexDirection: 'row', justifyContent: 'space-between',alignItems: 'center',marginHorizontal: 10}}>

        <View>
         
        <Image
          source={require("./assets/Screenshot__184_-removebg-preview.png")}
          style={{ width: 300, height: 100, resizeMode: "contain" }}
        />

        </View>
        <View>
         
      {/* <Pressable style={{  }}>
        <Image
          source={{
            uri: "https://www.wajaalenews.net/wp-content/uploads/2022/08/shmustafe.png",
          }}
          style={{
            resizeMode: "contain",
            height: 50,
            width: 50,
            borderRadius: 50,
          }}
        />
      </Pressable> */}

        </View>
    
        </View>
    
  )
}

export default Header