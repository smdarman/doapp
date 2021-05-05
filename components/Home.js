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
  ScrollView,
} from "react-native";
import CountDown from "react-native-countdown-component";

import Header from "./Header";
import DeleteItem from "./deleteItem";
import AddItem from "./addItem";
import { Ionicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { About } from "./About";

export default function Home() {
  const [todos, setData] = useState([
    {
      id: "1",
      title: "Trade",
    },
    {
      id: "2",
      title: "CPD",
    },
    {
      id: "3",
      title: "Coding",
    },
    {
      id: "4",
      title: "Excercise",
    },
    {
      id: "5",
      title: "Music",
    },
  ]);
  // console.log(todos[0]['title'])
  // console.log(todos.length)
  //todos.lenght+1

  const [clock, setClock] = useState("");
  const [rand, setRand] = useState("");

  const pressHandler = (id) => {
    setData((prevTodos) => {
      return prevTodos.filter((todo) => todo.id != id);
    });
  };

  const sumbitHandler = (text) => {
    console.log("handler pressed");
    setData((prevTodos) => {
      return [{ title: text, id: Math.random().toString() }, ...prevTodos];
    });
  };

  // const renderItem = ({ item }) => <Item title={item.title} />;

  function GetValue() {
    // var myarray= new Array("item1","item2","item3");
    // var random = myarray[Math.floor(Math.random() * myarray.length)];

    var random = todos[Math.floor(Math.random() * todos.length)]["title"];
    console.log(random);
    // random = 'hello'
    alert(random);
    mojo();
    setRand(random);
    // setData((prevTodos) => {
    // //return [{ title: random }];
    // return [prevTodos.filter((todos) => todos.title == random), ...prevTodos]
    // })
    setData((prevTodos) => {
      return prevTodos.filter((todo) => todo.title != random);
    });
  }
  function mojo() {
    setTimeout(() => {
      setClock(
        <CountDown
          until={1500}
          onFinish={() => alert("finished")}
          onPress={() => alert("hello")}
          size={50}
        />
      );
    }, 3000);
  }

  const refreshPage = () => {
    // console.log({label})
    // setTest("hi");
    setClock("");
    // setData(todos);
    setData((prevTodos) => {
      return [...prevTodos];
    });
    setRand("");
    //     return [prevTodos.filter((todos) => todo.id != id)
    //   ,...prevTodos]

    // })
  };

  // console.log(sumbitHandler)
  return (
    <ScrollView style={styles.container}>
     
      <Header />
      { clock == "" ? <CountDown
      size={50}/> : "" }
        

      

      <View style={styles.content}>
      <Text>{clock}</Text>
      <View style={styles.head}>
        <Text style={{ fontSize: 38, color: "red" }}>
          {" "}
          {rand}{" "}
          {rand != "" ? (
            <Ionicons name="md-checkmark-circle" size={32} color="green" />
          ) : (
            ""
          )}
        </Text>
      </View>
      <View style={styles.compass}>
        <View style={styles.refresh}>
          <TouchableHighlight
            style={{
              height: 40,
              width: 160,

              borderRadius: 10,
              backgroundColor: "tomato",
              marginLeft: 50,
              marginRight: 50,
              marginTop: 1,
            }}
          >
            {/* <Text>{test}</Text> */}
            <Button onPress={refreshPage} title="Refresh" />
          </TouchableHighlight>
        </View>
        <View style={styles.rando}>
          <TouchableHighlight
            style={{
              height: 40,
              width: 160,

              borderRadius: 10,
              backgroundColor: "tomato",
              marginLeft: 50,
              marginRight: 50,
              marginTop: 1,
            }}
          >
            <Button
              onPress={GetValue}
              title="Choose for me"
              color="black"
            ></Button>
          </TouchableHighlight>
        </View>
      </View>

          <AddItem submitHandler={sumbitHandler} />
        <ScrollView style={styles.list}>
        
          <FlatList
            data={todos}
            renderItem={({ item }) => (
              <DeleteItem item={item} pressHandler={pressHandler} />
            )}
            keyExtractor={(item) => item.id}
          />
        </ScrollView>
      
      </View>

    <About />

    
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",

    backgroundColor: "white",
    
   
  },

  content: {
    flex: 1,
    backgroundColor: "#00ffff",
    alignItems: "center",
    marginTop: 1,
    marginBottom: 1,

    marginVertical: 1,
    marginHorizontal: 1,
  },
  list: {
    flex: 1,
    backgroundColor: "white",
    width: 800,
    height: 800,

    marginTop: 1,

    marginBottom: 1,
    marginLeft: 29,
    marginRight: 29,
  },
  refresh: {
    flex: 1,
    marginTop: 1,
    marginBottom: 1,

    marginVertical: 10,
    marginHorizontal: 16,
  },
  head: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center"
  },
  rando: {
    flex: 2,

    paddingTop: 1,
    marginBottom: 1,
  },
  compass: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center"
  },
 
});
