import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

//npm i @react-navigation/native @react-navigation/elements @react-navigation/core @react-navigation/bottom-tabs @react-navigation/stack react-native-gesture-handler react-native-screens
import BottomTabNavigator from "./navigation/BottomTabNavigator";
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
      <NavigationContainer>
        <BottomTabNavigator/>
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
