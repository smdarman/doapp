import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";

export const About = () => {
  return (
    <ScrollView style={styles.abt}>
      <Text style={styles.baseText}>
        <Text style={styles.titleText}>What is it</Text>
        {"\n"}
        {"\n"}
        Run-do-it is a productivity app that employs Parkinson's Law to prevent
        procrastination and get the job done. Parkinson' law state that work
        fills the time available so by randomising the time and the task chosen,
        it makes the decision making easy and the energy required to choose a
        task. It further starts a random timer if you don't select a timer. You
        can either randomise the time or choose to start a Pomodoro for each
        task if you set up the time e.g. 25min, 45min or 1 hr.
        {"\n"}
        {"\n"}
        <Text style={styles.titleText}>How to use it</Text>
        {"\n"}
        {"\n"}
        -You can use the app by pressing the random button after adding your favourtie to
        do activity or just create a todo list. To use the app straight away without adding item you can
        associate the default item to a task you have in mind e.g. task 1 is
        writing an email and task 2 is fixing a device. Then you begin the timer by
        pressing Random button which selects a random task to start. You may
        choose to set the timer at 25min, 45min or 1hr by through SETTINGS or let
        the app pick a random time.
      </Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "tomato",
  },
  baseText: {
    fontFamily: "Georgia",
    fontSize: 20,
    marginRight: 10,
    marginLeft: 10,
    marginTop:50
  },
  titleText: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
  },
  abt: {
    flex: 1,
 
    fontWeight: "bold",
    backgroundColor: "#00ffff",
  },
});
