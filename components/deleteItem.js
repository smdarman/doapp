
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'; 


function DeleteItem  ({item, pressHandler})  {
  

  return (
    <TouchableOpacity onPress={ () => pressHandler(item.id)} >
      <View style={styles.arrange}>
        <Text style={styles.item}>{item.title}    </Text>
        <MaterialIcons name="delete-forever" size={54} color="black" /> 
   
      </View>
      
    </TouchableOpacity>
  );
}

export default DeleteItem;

const styles = StyleSheet.create({
  item: {
    flex: 1,
    
    padding: 20,
    marginTop: 10,
    borderColor: 'coral',
    borderWidth: 2,
    borderStyle: 'dashed',
    borderRadius: 10,
    color: "black",
    fontSize: 20,
    fontWeight: 'bold',
    justifyContent: 'space-between'
   
  },
  arrange: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    

    
  }

})