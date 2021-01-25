
import React from 'react';
import {  Text, StyleSheet, TouchableOpacity} from 'react-native';

function DeleteItem  ({item, pressHandler})  {
  

  return (
    <TouchableOpacity onPress={ () => pressHandler(item.id)} >
      <Text style={styles.item}>{item.title}</Text>
    </TouchableOpacity>
  );
}
///const Item = ({ title }) => (
//   <View style={styles.item}>
//   <Text style={styles.title}>{title}</Text>
// </View>
export default DeleteItem;

const styles = StyleSheet.create({
  item: {
    
    
    padding: 20,
    marginTop: 10,
    borderColor: 'coral',
    borderWidth: 2,
    borderStyle: 'dashed',
    borderRadius: 4
    // backgroundColor: "#fff",
   
  },
})