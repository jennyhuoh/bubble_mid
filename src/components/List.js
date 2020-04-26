import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { apisAreAvailable } from 'expo';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import ListAll from './ListAll';
import ListNotyet from './ListNotyet';

const UpTab = createMaterialTopTabNavigator();


const List = () => {
    return(
        <UpTab.Navigator
            tabBarOptions = {{
                activeTintColor: '#269192',
                inactiveTintColor: '#676767',
                indicatorStyle: {
                    backgroundColor: '#e0f3f1',
                    height: 50,
                    width: 190,
                    borderRadius: 7,
                    shadowOffset: {height: 1},
                    shadowColor: "black",
                    shadowOpacity: 0.2,

                },
            }}>
            <UpTab.Screen name = "所有事件"
                component = {ListAll}/>
            <UpTab.Screen name = "未解決事件"
                component = {ListNotyet}/>
        </UpTab.Navigator>
    );
}

export default List;