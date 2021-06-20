import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";

export const About = () => {
  return (
   
      <View style={styles.abt}>
        <Text style={styles.baseText}>
        
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
          varius dui libero. Vestibulum faucibus nulla sed turpis auctor, ac
          malesuada tortor egestas. Aenean dignissim vel dui non pellentesque.
          Suspendisse porttitor nibh urna, luctus viverra nibh viverra non.
          Phasellus egestas metus lectus, quis pellentesque elit euismod ut.
      
        </Text>
      </View>
  
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "tomato",
  },
  baseText: {
    fontFamily: "Arial",
    textAlign: "center",
   
  },
  titleText: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
  },
  abt: {
    flex: 1, justifyContent: 'center', alignItems: 'center', fontWeight: 'bold',  backgroundColor: "#00ffff"
  },
});
