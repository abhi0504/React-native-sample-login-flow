// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
// import AccountScreen from './src/screens/Accounts';
import Products from './src/screens/Products';
import LoadingScreen from './src/screens/LoadingScreen'
import Profile from './src/screens/Profile';
import HomeScreen from './src/screens/HomeScreen';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import SignupScreen from './src/screens/Signup';
import SignInScreen from './src/screens/Signin';
import ChooseType from './src/screens/ChooseType';
import ConsumerSignin from './src/screens/consumer/ConsumerSignin';
import ConsumerSignup1 from './src/screens/consumer/ConsumerSignup1';
import ConsumerSignup2 from './src/screens/consumer/ConsumerSignup2';
import SellerSignin from './src/screens/seller/SellerSignin';
import SellerSignUp from './src/screens/seller/SellerSignUp';
import SellerSignUp2 from './src/screens/seller/sellerSignUp2';
import SellerSignUp3 from './src/screens/seller/sellerSignUp3';
import AddProducts from './src/screens/seller/AddProducts';
import NearbyShops from './src/screens/consumer/NearbyShops';
import SellerScreen from './src/screens/seller/SellerScreen';
import sellerOverview from './src/screens/seller/sellerOverview';
import productsScreen from './src/screens/seller/productsScreen';
import OrderDetails from './src/screens/seller/OrderDetails';
import Orders from './src/screens/consumer/Orders';
import ConsumerProfile from './src/screens/consumer/ConsumerProfile';
import { Provider } from 'react-redux';
import store from './src/redux/store';
import Icon2 from 'react-native-vector-icons/Fontisto'
import Icon3 from 'react-native-vector-icons/SimpleLineIcons'
import ShopProducts from './src/screens/consumer/ShopProducts';
import CartIcon from './src/screens/consumer/ConsumerComponents/CartIcon';
import Cart from './src/screens/consumer/Cart';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import CurrentOrders from './src/screens/consumer/CurrentOrder';
import OutForDelivery from './src/screens/consumer/OutForDelivery';
import Delivered from './src/screens/consumer/Delivered';


const OrdersTab = createMaterialTopTabNavigator();

const Stack = createStackNavigator();

const MainStack = createBottomTabNavigator();

const Drawer = createDrawerNavigator();

const ConsumerStack = createBottomTabNavigator();

const SellerStack = createBottomTabNavigator();

const NearbyShopStack = createStackNavigator();

function NearbyShopss() {
  return (
    <NearbyShopStack.Navigator screenOptions={{
      headerShown: false
    }}>
      <NearbyShopStack.Screen name="allShops" component={NearbyShops} />
      <NearbyShopStack.Screen name="ShopProducts" component={ShopProducts} />
    </NearbyShopStack.Navigator>
  )
}

function MyTabs() {
  return (
    <OrdersTab.Navigator tabBarOptions={{
      labelStyle: { fontSize: 12 },
      style: { backgroundColor: '#ff6347' },
      activeTintColor:'#ff6347',
      inactiveTintColor:'white',
      indicatorStyle:{backgroundColor:'white',height:'100%',borderTopLeftRadius:15,borderTopRightRadius:15},
    }}>
      <OrdersTab.Screen options={{ tabBarLabel: 'Orders Placed' }} name="Currentorders" component={CurrentOrders} />
      <OrdersTab.Screen options={{ tabBarLabel: 'Out For Delivery' }} name="OutForDelivery" component={OutForDelivery} />
      <OrdersTab.Screen options={{ tabBarLabel: 'Delivered' }} name="Delivered" component={Delivered} />
    </OrdersTab.Navigator>
  );
}

function Personal() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Main" component={MainStackScreens} />
      <Drawer.Screen name="Profile" component={Profile} />
    </Drawer.Navigator>
  )
}

function SellerStackScreens() {
  return(
    <SellerStack.Navigator tabBarOptions={{
      showLabel:false,
      style:{
        height:57,
        backgroundColor:'white',
        borderTopLeftRadius:19,
        borderTopRightRadius:19
      },
      activeTintColor:'#0ae38c'
    }}>
      <SellerStack.Screen options={{
          tabBarLabel: 'Shops',
          tabBarIcon: ({ color, size }) => (
            <Icon2 name="shopping-store" color={color} size={25} />
          ),
        }} name="shops" component={sellerOverview} />
         <SellerStack.Screen options={{
          tabBarLabel: 'Shops',
          tabBarIcon: ({ color, size }) => (
            <Icon2 name="search" color={color} size={25} />
          ),
        }} name="search" component={productsScreen} />
        <SellerStack.Screen options={{
          tabBarLabel: 'Shops',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="cart-outline" color={color} size={31} />
          ),
        }} name="cart" component={SellerScreen} />
      <SellerStack.Screen
      options={{
        tabBarLabel: 'Orders',
        tabBarIcon: ({ color, size }) => (
          <Icon3 name="bag" color={color} size={size} />
        ),
      }} name="Orders" component={Orders} />
      <SellerStack.Screen options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color, size }) => (
            <Icon2 name="person" color={color} size={size} />
          ),
        }} name="Profile" component={ConsumerProfile} />
      </SellerStack.Navigator>
  )
}



function ConsumerStackScreens() {
  return(
    <ConsumerStack.Navigator tabBarOptions={{
      showLabel:false,
      style:{
        height:57,
        backgroundColor:'white',
        borderTopLeftRadius:19,
        borderTopRightRadius:19
      },
      activeTintColor:'#ff6347'
    }}>
      <ConsumerStack.Screen options={{
          tabBarLabel: 'Shops',
          tabBarIcon: ({ color, size }) => (
            <Icon2 name="shopping-store" color={color} size={25} />
          ),
        }} name="shops" component={NearbyShopss} />
         <ConsumerStack.Screen options={{
          tabBarLabel: 'Shops',
          tabBarIcon: ({ color, size }) => (
            <Icon2 name="search" color={color} size={25} />
          ),
        }} name="search" component={Orders} />
        <ConsumerStack.Screen options={{
          tabBarLabel: 'Shops',
          tabBarIcon: ({ color, size }) => (
            <CartIcon color={color} />
          ),
        }} name="cart" component={Cart} />
      <ConsumerStack.Screen
      options={{
        tabBarLabel: 'Orders',
        tabBarIcon: ({ color, size }) => (
          <Icon3 name="bag" color={color} size={size} />
        ),
      }} name="Orders" component={MyTabs} />
      <ConsumerStack.Screen options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color, size }) => (
            <Icon2 name="person" color={color} size={size} />
          ),
        }} name="Profile" component={ConsumerProfile} />
      </ConsumerStack.Navigator>
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
    <Provider store={store}>
      <NavigationContainer>
      <Stack.Navigator screenOptions={{
    headerShown: false
  }}>
        <Stack.Screen name="Loading" component={LoadingScreen} />
        <Stack.Screen name="ChooseType" component={ChooseType} />
        <Stack.Screen name="ConsumerSignin" component={ConsumerSignin} />
        <Stack.Screen name="ConsumerSignup1" component={ConsumerSignup1} />
        <Stack.Screen name="ConsumerSignup2" component={ConsumerSignup2} />
        <Stack.Screen name="SellerSignin" component={SellerSignin} />
        <Stack.Screen name="SellerSignUp" component={SellerSignUp} />
        <Stack.Screen name="SellerSignUp2" component={SellerSignUp2} />
        <Stack.Screen name="SellerSignUp3" component={SellerSignUp3} />
        <Stack.Screen name="Consumer" component={ConsumerStackScreens} />
        <Stack.Screen name="Seller" component={SellerStackScreens} />
        <Stack.Screen name="AddProducts" component={AddProducts} />
        <Stack.Screen name="OrderDetails" component={OrderDetails} />
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  );
}

export default App;