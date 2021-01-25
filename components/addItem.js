
import React, { useState } from 'react';
import { TextInput, Button, View, StyleSheet } from 'react-native';

function AddItem({submitHandler})  {
  const [text, setText] = useState('')

  const changeHandler = (val) => {
  
    setText(val);  
    console.log(val);
    
  }

  return ( 
    <View style={styles.input}>
      <TextInput 
       style={{ height: 40, width: 140 , borderColor: 'gray', borderWidth: 2 }}
      placeholder="add item..."
      onChangeText={changeHandler}
      clearButtonMode="always" 
      value={text}
    
      />
      <Button
      title='Enter'
      color='black'
      onPress={() => {submitHandler(text); setText("")}}
    
      />
    </View>
  );
}
export default AddItem;

const styles = StyleSheet.create({
  input: {
    
    
   flexDirection: "column",
    marginTop: 0,
    marginBottom: 1,
    // // paddingHorizontal: 10,
    // paddingVertical: 10,
    // borderBottomWidth:5,
    // borderBottomColor: '#ddd',
    
    backgroundColor: "white",
   
  },
})