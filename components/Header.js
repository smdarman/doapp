
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function Header() {
 
  return (
    <View style={styles.header}>
        <Text style={styles.title} >Randoit!</Text>
     
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