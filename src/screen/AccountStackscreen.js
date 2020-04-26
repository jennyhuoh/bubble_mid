import React from "react";
import { StyleSheet, Image, TouchableOpacity, View, Text} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Account from '../components/Account';
import { createStackNavigator, DrawerActions } from '@react-navigation/stack';

const Stack = createStackNavigator();

function AccountStackscreen({navigation}) {
    return(
        <Stack.Navigator>
        <Stack.Screen
          name = "Account"
          component = {Account}
          options = {() => ({
            title: '帳號設定',
            headerTintColor: '#269192',   
          })}/>
      </Stack.Navigator>
    );
}

export default AccountStackscreen;