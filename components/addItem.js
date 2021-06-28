
import React, { useState } from 'react';
import { TextInput, Button, View, StyleSheet, TouchableHighlight } from 'react-native';

function AddItem({submitHandler})  {
  const [text, setText] = useState('')

  const changeHandler = (val) => {
  
    setText(val);  
    console.log(val);
    
  }

  return ( 
    <View style={styles.input}>
      <TextInput 
       style={{ height: 40, width: 250, borderColor: 'gray', borderWidth: 1 }}
      placeholder="add item..."
      onChangeText={changeHandler}
      clearButtonMode="always" 
      value={text}
    
      />
      {/* <Button
      title='Enter'
      color='blue'
      onPress={() => {submitHandler(text); setText("")}}
    
      /> */}
             <TouchableHighlight
                style={{
                  height: 40,
                  width: 120,

                  borderRadius: 10,
                  backgroundColor: "tomato",
                  marginLeft: 10,
                  marginRight: 5,
                  marginTop: 1,
                }}
              >
                <Button
                  onPress={() => {submitHandler(text); setText("")}}
                  title="ADD"
                  color="blue"
                  fontSize="400"
                />
              </TouchableHighlight>
    </View>
  );
}
export default AddItem;

const styles = StyleSheet.create({
  input: {
    
    
   flexDirection: "row",
    marginTop: 1,
    marginBottom: 1,
    marginLeft: 5,
    marginRight: 10,
    alignItems: "flex-start",
     paddingHorizontal: 10,
    paddingVertical: 10,
    borderBottomWidth:5,
    borderBottomColor: '#ddd',
    
    backgroundColor: "white",
   
  },
})