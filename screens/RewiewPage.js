import { View, Text, StyleSheet, Pressable,FlatList,TextInput } from 'react-native'
import React, { useState } from 'react'
import Header from '../Header'
import HorizontalDatepicker from '@awrminkhodaei/react-native-horizontal-datepicker';
import watch from '../Watch';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 



const RewiewPage = ({navigation}) => {
    
const [selectedData, setSelectedDate] = useState([])  
const [selectTime, setTime]= useState('')
console.log(selectTime)
  return (
    
    <View style={{flex: 1, paddingTop: 20, backgroundColor: '#DE1F26', }}>
        <Header/>
      <View style={{marginTop: 30}}>
<Text style={{color: 'white', fontSize: 18, fontWeight: '500', marginBottom: 20,marginLeft: 5}}>Maalinta Dooro</Text>

<HorizontalDatepicker
  mode="gregorian"
  startDate={new Date('2020-08-20')}
  endDate={new Date('2020-08-31')}
  initialSelectedDate={new Date('2020-08-22')}
  onSelectedDateChange={(date) => setSelectedDate(date)}
  selectedItemWidth={170}
  unselectedItemWidth={38}
  itemHeight={38}
  itemRadius={10}
  selectedItemTextStyle={styles.selectedItemTextStyle}
  unselectedItemTextStyle={styles.selectedItemTextStyle}
  selectedItemBackgroundColor="#DE1F26"
  unselectedItemBackgroundColor="#ececec"
  flatListContainerStyle={styles.flatListContainerStyle}
/>
      </View>
      <View style={{marginTop: 20, marginHorizontal: 5}}>
        <Text style={{color: 'white', fontSize: 18, fontWeight: '500'}}>Saacadee imaan Kartaa</Text>

        <View style={{flexDirection: 'row',}}>

      
        <FlatList
        data={watch}
        numColumns={7}
        renderItem={({item})=> (
       <Pressable style={
        selectTime.includes(item.time) ?{width: 90,backgroundColor: '#FFC000',  margin: 6,marginTop: 10, padding: 6, borderRadius: 7,justifyContent: 'center'}: {
          width: 90,backgroundColor: '#fff', margin: 6,marginTop: 10, padding: 6, borderRadius: 7,justifyContent: 'center'
        }
       }
       onPress={()=> setTime(item.time)}
       >
        <Text style={{textAlign: 'center', fontSize: 17}}>{item.time}</Text>
       </Pressable>
        )}
        />
          </View>
      </View>
      <View style={{marginTop: 50}}>
        <Text style={{color: 'white', fontSize: 18, marginHorizontal: 10,marginBottom: 10 }}>Fariin Noo Reeb</Text>
        <TextInput style={{padding: 40,paddingVertical: 60,borderRadius: 7, margin: 6, borderWidth: 1, borderColor: 'white', }}  />
      </View>
      <View
          style={{
            backgroundColor: "#679BFF",
            padding: 6,
            width: "96%",
            padding: 10,
            borderRadius: 10,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: 80,
            marginHorizontal: 10
          }}
        >
          <View>
          <MaterialCommunityIcons name="blood-bag" size={40} color="red" />
          </View>
          <Pressable
          onPress={()=> navigation.navigate('donate')}
            style={{
              padding: 10,
              backgroundColor: "#0D3F0F",
              borderRadius: 10,
              alignItems: "center",
              width: 150,
              marginRight: 20,
            }}
          >
            <Text style={{ color: "white", fontSize: 16, textAlign: "center" }}>
              Donate Now
            </Text>
          </Pressable>
        </View>
    </View>
   
  
  )
}
const styles = StyleSheet.create({})
export default RewiewPage