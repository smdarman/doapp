
import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons'; 

export default function Header() {
 
  return (
    <View style={styles.header}>
        <Text style={styles.title} ><FontAwesome5 name="running" size={24} color="black" /> Run Do it!</Text>
     
    </View>
  );
}

const styles = StyleSheet.create({
  
  header: {
alignItems: 'center',


marginBottom: 50,
      height: 150,
      width: 650,
    color: 'blue',
 backgroundColor: 'coral',
  },
  title: {
    marginTop: 80,

    fontSize: 20,
    fontWeight: 'bold'

  }
});