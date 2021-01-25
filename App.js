import { StatusBar } from "expo-status-bar";
import { v4 as uuidv4 } from 'uuid';
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  FlatList,
  SafeAreaView,
  TouchableHighlight,
  TextInput,
  Alert,
} from "react-native";
import CountDown from "react-native-countdown-component";

import Header from "./components/Header";
import DeleteItem from "./components/deleteItem";
import AddItem from "./components/addItem";

export default function App() {
  const [todos, setData] = useState([
    // {
    //   id: "1",
    //   title: "First Item",
    // },
    // {
    //   id: "2",
    //   title: "Second Item",
    // },
    // {
    //   id: "3",
    //   title: "Third Item",
    // },
    // {
    //   id: "4",
    //   title: "Fourth Item",
    // },
  ]);
  // console.log(todos[0]['title'])
  // console.log(todos.length)
  //todos.lenght+1
  

  const [test, setTest] = useState("clock...");

  const pressHandler = (id) => {
    setData((prevTodos) => {
      return prevTodos.filter((todo) => todo.id != id);
    });
  };

  const sumbitHandler = (text) => {
    console.log("handler pressed");
    setData((prevTodos) => {
      return [{ title: text, id: (Math.random()).toString()  }, ...prevTodos];

    });
    
  };

  // const renderItem = ({ item }) => <Item title={item.title} />;

  function GetValue() {
    // var myarray= new Array("item1","item2","item3");
    // var random = myarray[Math.floor(Math.random() * myarray.length)];

    var random = todos[Math.floor(Math.random() * todos.length)]["title"];
    console.log(random);
    // random = 'hello'
    Alert.alert(random);
    mojo();

   setData((prevTodos) => {
    return [{ title: random}];
  });
  
    // () => Alert.alert('Simple Button pressed')
    //id: todos.length + 1
    // document.getElementById("message").innerHTML=random;
  }
  function mojo() {
    setTimeout(() => {
      setTest(
        <CountDown
          until={15}
          onFinish={() => alert("finished")}
          onPress={() => alert("hello")}
          size={20}
        />
      );
    }, 3000);
  }

  const refreshPage = () => {
    // console.log({label})
    setTest("hi");
    setData("");
  };

  // console.log(sumbitHandler)
  return (
   
    <View style={styles.container}>
      <View style={styles.head}>
        <Header />
      </View>
      
      <View style={styles.content}>
        <AddItem submitHandler={sumbitHandler} />
        
      </View>
<View style={styles.refresh}>
      <Text>{test}</Text>
  <Button onPress={refreshPage} title="RESTART" />
</View>
      
       <View styles={styles.list}>
        <FlatList
          data={todos}
          renderItem={({ item }) => (
            <DeleteItem item={item} pressHandler={pressHandler} />
          )}
          keyExtractor={(item) => item.id}
        />
       <View style={styles.rando}>
             <TouchableHighlight
            style={{
              height: 40,
              width: 160,

              borderRadius: 10,
              backgroundColor: "black",
              marginLeft: 50,
              marginRight: 50,
              marginTop: 20,
            }}
          >
            <Button onPress={GetValue} title="Press Me" color="white"></Button>
          </TouchableHighlight>
       </View>
      
        
        
      </View>

      <StatusBar style="auto" />
      

      </View>
    
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    
    marginTop: 100,
    padding: 20,
    flexDirection: "column",
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 100,
  },
 
  content: {
    marginTop: 10,
    // marginHorizontal: 5,
    // marginVertical: 5,
    // backgroundColor: "coral",
  
  },
  list: {
    
    marginTop: 10,
    backgroundColor: "white",
    marginBottom: 100
  },
  refresh: {
    
    marginVertical: 10,
    marginHorizontal: 16,
  },
  head: {
    marginTop: 200,
    paddingTop: 40
  },
  rando: {
    paddingTop: 10,
    marginBottom: 200,
  }
});
