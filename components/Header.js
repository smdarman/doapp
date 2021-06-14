
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



      height: 100,
      // width: 100,
      alignSelf: 'stretch',
    color: 'blue',
 backgroundColor: 'coral',
  },
  title: {
    marginTop: 50,

    fontSize: 20,
    fontWeight: 'bold'

  }
});