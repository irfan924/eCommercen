import React from 'react'

import {
  StyleSheet,
  View,
  Text,
  StatusBar
} from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native';
import Tabs from './src/components/Tabs';
import CategoryDetails from './src/screens/CategoryDetails';
import ProductDeatils from './src/screens/ProductDeatils';
import AllCategories from './src/screens/AllCategories';
import ProfileDetail from './src/screens/ProfileDetail';
import ChangeName from './src/screens/ChangeName';
import Gender from './src/screens/Gender';
import DOB from './src/screens/DOB';


const Stack = createStackNavigator();

const App = () => {


  return (

    <NavigationContainer>

      <StatusBar backgroundColor={'#40BFFF'} />


      <Stack.Navigator
        screenOptions={{ headerShown: false }}
      >

        <Stack.Screen
          name='Tab'
          component={Tabs}
        />

        <Stack.Screen
          name='CategoryDetails'
          component={CategoryDetails}
        />

        <Stack.Screen
          name='ProductDeatils'
          component={ProductDeatils}
        />

        <Stack.Screen
          name='AllCategories'
          component={AllCategories}
        />

        <Stack.Screen
          name='ProfileDetail'
          component={ProfileDetail}
        />

        <Stack.Screen
          name='ChangeName'
          component={ChangeName}
        />

        <Stack.Screen
          name='Gender'
          component={Gender}
        />


      </Stack.Navigator>


    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})