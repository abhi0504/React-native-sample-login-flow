// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import AccountScreen from './src/screens/Accounts';
import Products from './src/screens/Products';
import LoadingScreen from './src/screens/LoadingScreen'
import Profile from './src/screens/Profile';
import HomeScreen from './src/screens/HomeScreen';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import SignupScreen from './src/screens/Signup';
import SignInScreen from './src/screens/Signin';
import ChooseType from './src/screens/ChooseType';
import ConsumerSignin from './src/screens/ConsumerSignin';

const Stack = createStackNavigator();

const MainStack = createBottomTabNavigator();

const Drawer = createDrawerNavigator();

function Personal() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Main" component={MainStackScreens} />
      <Drawer.Screen name="Profile" component={Profile} />
    </Drawer.Navigator>
  )
}

function MainStackScreens() {
  return (
    <MainStack.Navigator>
      <MainStack.Screen options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }} name="Home" component={HomeScreen} />
      <MainStack.Screen
      options={{
        tabBarLabel: 'Accounts',
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="bank" color={color} size={size} />
        ),
      }} name="Accounts" component={AccountScreen} />
      <MainStack.Screen options={{
          tabBarLabel: 'Products',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="shopping-music" color={color} size={size} />
          ),
        }} name="Products" component={Products} />
    </MainStack.Navigator>
  )
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
    headerShown: false
  }}>
        <Stack.Screen name="Loading" component={LoadingScreen} />
        <Stack.Screen name="Signin" component={SignInScreen} />
        <Stack.Screen name="Signup" component={SignupScreen} />
        <Stack.Screen  name="MainNav" component={Personal} />
        <Stack.Screen name="ChooseType" component={ChooseType} />
        <Stack.Screen name="ConsumerSignin" component={ConsumerSignin} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;