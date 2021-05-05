import React from "react";

import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from "./components/Home"
import SettingsScreen from "./components/Settings"

import { About } from "./components/About";
import { color } from "react-native-reanimated";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';



const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer >
      <Tab.Navigator tabBarOptions={{style:{backgroundColor: 'coral',  fontWeight: 'bold'}}}>
        <Tab.Screen style={{color: 'red'}} name="HOME" component={Home} options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color="blue" size={30} />
          ),
        }} />
         
        {/* <Tab.Screen name="SETTINGS" component={SettingsScreen} options={{
          tabBarLabel: 'Setting',
          tabBarIcon: ({ color, size }) => (
            <Feather name="settings" size={24} color="black" />
          ),
        }}/> */}
        <Tab.Screen name="About" component={About} options={{
          tabBarLabel: 'About',
          tabBarIcon: ({ color, size }) => (
            <Feather name="info" size={30} color="blue" />
          ),
        }}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}
