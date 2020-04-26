import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import {NavigationContainer, DrawerActions} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import SolveProblemStackscreen from './src/screen/SolveProblemStackscreen';
import ListStackscreen from './src/screen/ListStackscreen';
import FriendStackscreen from './src/screen/FriendStackscreen';
import AccountStackscreen from './src/screen/AccountStackscreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions = {{
          activeTintColor: '#269C9B',
          inactiveTintColor: '#676767'
        }}>
      <Tab.Screen name = "List"
        component = {ListStackscreen}
        options = {{
          title: "事件管理"
        }}/>
      <Tab.Screen name = "SolveProblem"
        component = {SolveProblemStackscreen}
        options = {{
          title: "加入煩惱"
        }}/>
      <Tab.Screen name = "Friend"
        component = {FriendStackscreen}
        options = {{
          title: "朋友"
        }}/>
      <Tab.Screen name = "Account"
        component = {AccountStackscreen}
        options = {{
          title: "帳號設定"
        }}/>
      </Tab.Navigator>
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

export default App;