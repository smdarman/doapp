
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function Header() {
 
  return (
    <View style={styles.header}>
        <Text style={styles.title}>Do it app!</Text>
     
    </View>
  );
}

const styles = StyleSheet.create({
  
  header: {
    alignItems: 'center',
      paddingTop: 20,
    
      height: 100,
      width: 350,
    color: 'blue',
    backgroundColor: 'blue'
  },
  title: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold'
  }
});