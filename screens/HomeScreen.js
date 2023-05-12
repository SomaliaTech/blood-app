import {
  View,
  Text,
  Image,
  TextInput,
  Pressable,
  FlatList,
} from "react-native";
import React, { useState } from "react";
import { Entypo } from "@expo/vector-icons";
import data from "../data";
import Header from "../Header";
const HomeScreen = ({navigation}) => {
const [Selectedblood,setBlood ]= useState()
console.log(Selectedblood)
  return (
    <View style={{ flex: 1, backgroundColor: "#DE1F26", paddingTop: 20 }}>
        <Header/>
  
      <View style={{ marginHorizontal: 20, marginVertical: 30 }}>
        <Pressable
          style={{
            flexDirection: "row",
            alignItems: "center",
            padding: 15,
            backgroundColor: "#fff",
            borderRadius: 5,
          }}
        >
          <Entypo name="location" size={30} color="#DE1F26" marginRight={10} />
          <Text style={{ fontSize: 16, fontWeight: "500" }}>
            Jidka Jaamacadda, Mogadishu, Somalia
          </Text>
        </Pressable>
      </View>
      <View style={{ marginHorizontal: 10 }}>
        <FlatList
          data={data}
          numColumns={2}
          renderItem={({ item }) => (
            <View style={{ margin: 20 }}>
              <Pressable
              onPress={()=> setBlood(item)}
                style={
                  Selectedblood.includes(item) ? {
                    marginRight: 20,
                    backgroundColor: "#000",
                    padding: 8,
                    borderRadius: 7,
                    width: 150,
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    height: 65,
                    borderColor: 'gray',
                    borderWidth: 1
                  }: {
                    marginRight: 20,
                    backgroundColor: "#fff",
                    padding: 8,
                    borderRadius: 7,
                    width: 150,
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    height: 65,
                  }
                }
              >
                <Text
                  style={{ fontSize: 40, fontWeight: 500, color: "#686868" }}
                >
                  {item.name}
                </Text>
                <Image
                  source={{ uri: item.image }}
                  style={{ height: 40, width: 40, resizeMode: "contain" }}
                />
              </Pressable>
            </View>
          )}
        />
      </View>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          marginHorizontal: 20,
          marginTop: 50,
        }}
      >
        <View
          style={{
            backgroundColor: "#679BFF",
            padding: 6,
            width: "100%",
            padding: 10,
            borderRadius: 10,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <View></View>
          <Pressable
          onPress={()=> navigation.navigate('review')}
            style={{
              padding: 10,
              backgroundColor: "#0D3F0F",
              borderRadius: 10,
              alignItems: "center",
              width: 100,
              marginRight: 20,
            }}
          >
            <Text style={{ color: "white", fontSize: 16, textAlign: "center" }}>
              Continue
            </Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default HomeScreen;
