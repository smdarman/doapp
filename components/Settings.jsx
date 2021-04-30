import React, { useState } from "react";

import { StyleSheet, Text, View, Picker } from "react-native";
// import Slider from '@react-native-community/slider';


function SettingsScreen() {
  const [mypick, setMyPick]= useState(20)
  let secTime = [1500, 20000, 25000]
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        fontWeight: "bold",
        backgroundColor: "#00ffff",
      }}
    >
      <Text>Settings!</Text>
      <Picker
        style={{width: "90%"}}
        selectedValue={mypick}
        onValueChange={(itemValue, itemIndex) => {setMyPick(itemValue); console.log(itemValue)}}
      >
        <Picker.Item label="Select Value" value="" />
        <Picker.Item label="25min" value={secTime[0]} />
        <Picker.Item label="45min" value={secTime[1]} />
        <Picker.Item label="1hr" value={secTime[2]} />
      </Picker>
      <Text>{mypick}</Text>
    </View>
  );
}

export default SettingsScreen;
