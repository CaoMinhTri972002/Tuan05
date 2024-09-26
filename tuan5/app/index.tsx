import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Screen1 from './Screen1'
import Screen2 from './Screen2'
import { NavigationContainer } from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function index() {
  return (
 
      <Stack.Navigator initialRouteName="Screen2">
        <Stack.Screen name="Screen1" component={Screen1} />
        <Stack.Screen name="Screen2" component={Screen2} />
      </Stack.Navigator>

       
  )
}

