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
  Pressable,
  Modal,
  ScrollView,
} from "react-native";
import CountDown from "react-native-countdown-component";

import Header from "./Header";
import DeleteItem from "./deleteItem";
import AddItem from "./addItem";
import { Ionicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { About } from "./About";
import { color } from "react-native-reanimated";
import { MaterialIcons } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";

import { Picker } from "react-native";
import SettingsScreen from "./Settings";
// import Slider from '@react-native-community/slider';

export default function Home({ itemValue }) {
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

  const [clock, setClock] = useState("");
  const [rand, setRand] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [mypick, setMyPick] = useState(0);
  let secTime = [1500, 2700, 3600];

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

  function GetValue() {
    var random = todos[Math.floor(Math.random() * todos.length)]["title"];
    console.log(random);

    alert(random);
    mojo();
    setRand(random);

    setData((prevTodos) => {
      return prevTodos.filter((todo) => todo.title != random);
    });
  }
  function mojo() {
    setTimeout(() => {
      setClock(
        <CountDown
          // until={parseInt(mypick)}
          until={parseInt(mypick)}
          onFinish={() => alert("finished")}
          onPress={() => alert("hello")}
          size={30}
        />
      );
    }, 3000);
  }

  const refreshPage = () => {
    // console.log({label})
    console.log({ itemValue });
    // setTest("hi");
    setClock("");
    // setData(todos);
    setData((prevTodos) => {
      return [...prevTodos];
    });
    setRand(null);
    setMyPick(0);
    //     return [prevTodos.filter((todos) => todo.id != id)
    //   ,...prevTodos]

    // })
  };

  return (
    <View style={styles.container}>
      <Header />

      <Modal
        visible={modalOpen}
        animationType="slide"
        style={{ backgroundColor: "blue" }}
      >
        <View
          style={{
            width: "100%",
            backgroundColor: "#00ffff",
            flex: 1,
            flexDirection: "column",
            alignItems: "center",
            marginTop: 50,
          }}
        >
          {/* <Text>Hello from the modal :)</Text>
          <Text>Settings!</Text> */}
          <MaterialIcons
            name="close"
            size={40}
            style={{ ...styles.modalToggle, ...styles.modalClose }}
            onPress={() => setModalOpen(false)}
          />

          <Picker
            style={{ width: "100%" }}
            selectedValue={mypick}
            onValueChange={(itemValue, itemIndex) => setMyPick(itemValue)}
          >
            <Picker.Item label="Select Value" value={secTime[0]} />
            <Picker.Item label="25min" value={secTime[0]} />
            <Picker.Item label="45min" value={secTime[1]} />
            <Picker.Item label="1hr" value={secTime[2]} />
          </Picker>
          <Text>{mypick}</Text>
        </View>
      </Modal>

      {/* <MaterialIcons 
        name='settings' 
        size={40} 
        style={styles.modalToggle}
        onPress={() => setModalOpen(true)} 
      /> */}

      {clock == "" ? <CountDown size={30} /> : null}
      {/* <MaterialIcons
          name="settings"
          size={34}
          color="black"
          style={styles.modalToggle}
          onPress={() => setModalOpen(true)}
        /> */}
  
        <View style={styles.content}>
          <Text>{clock}</Text>
          <View style={styles.head}>
            <Text style={{ fontSize: 38, color: "red" }}>
              {rand}
              {rand != null ? (
                <Ionicons name="md-checkmark-circle" size={32} color="green" />
              ) : null}
            </Text>
          </View>

          <View style={styles.compass}>
            <View style={styles.refresh}>
              <TouchableHighlight
                style={{
                  height: 40,
                  width: 120,

                  borderRadius: 10,
                  backgroundColor: "tomato",
                  marginLeft: 10,
                  marginRight: 50,
                  marginTop: 1,
                }}
              >
                <Button
                  onPress={() => setModalOpen(true)}
                  title="Settings"
                  color="blue"
                  fontSize="400"
                />
              </TouchableHighlight>
            </View>
            <View style={styles.refresh}>
              <TouchableHighlight
                style={{
                  height: 40,
                  width: 120,

                  borderRadius: 10,
                  backgroundColor: "tomato",
                  marginLeft: 20,
                  marginRight: 50,
                  marginTop: 1,
                }}
              >
                <Button
                  onPress={refreshPage}
                  title="Refresh"
                  color="blue"
                  fontSize="400"
                />
              </TouchableHighlight>
            </View>
            <View style={styles.rando}>
              <TouchableHighlight
                style={{
                  height: 40,
                  width: 120,

                  fontSize: 100,

                  borderRadius: 10,
                  backgroundColor: "tomato",
                  marginLeft: 30,
                  marginRight: 40,
                  marginTop: 1,
                }}
              >
                <Button
                  onPress={GetValue}
                  title="Randomise"
                  color="blue"
                ></Button>
              </TouchableHighlight>
            </View>
          </View>
        </View>
        <SafeAreaView style={{ flex: 1 }}>
          <AddItem submitHandler={sumbitHandler} />
          <FlatList
            style={{ color: "black" }}
            data={todos}
            renderItem={({ item }) => (
              <DeleteItem item={item} pressHandler={pressHandler} />
            )}
            keyExtractor={(item) => item.id}
          />
        </SafeAreaView>
      </View>
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",

    backgroundColor: "#00ffff",
  },

  content: {
    flex: 0.5,
    // backgroundColor: "yellow",
    alignItems: "center",
    marginTop: 1,
    marginBottom: 1,
    justifyContent: "space-evenly",

    // marginVertical: 1,
    // marginHorizontal: 1,
    fontSize: 20,
    fontWeight: "bold",
    color: "black",
  },
  head: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  compass: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-evenly",
    // alignItems: "center",
    marginLeft: 0,
    marginRight: 45,
    margin:0,
  

  },
  refresh: {
    flex: 1,
    marginTop: 1,
    marginBottom: 1,
    marginRight: 1,
    marginLeft: 0,

    marginVertical: 11,
    marginHorizontal: 16,
  },

  rando: {
    flex: 1,

    paddingTop: 1,
    marginBottom: 1,
  },

  list: {
    flex: 1,
    backgroundColor: "white",
    width: 350,
    height: 800,

    marginTop: 1,

    marginBottom: 1,
    marginLeft: 29,
    marginRight: 29,
  },
});
