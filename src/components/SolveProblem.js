import React, {Component}from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';
import { apisAreAvailable } from 'expo';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { TouchableOpacity, TextInput } from 'react-native-gesture-handler';

const Stacksolve = createStackNavigator();

function SolveProblem_1 ({navigation : {navigate}}) {
    return(
        <View style = {styles.solvebg}>
            <View style = {styles.robotarea}>
                <Image style = {styles.chatface} source = {require('../img/img_chatface.png')}/>
                <Image style = {styles.chatbox} source = {require('../img/img_chatbox.png')}/>
            </View>
            <View style = {styles.robotsay1box}><Text style = {styles.robotsay1}>哈囉！最近有哪些事情讓你煩惱呢？</Text></View>   
            <TouchableOpacity
                onPress = {() => navigate('SolveProblem_2')}>
                <View style = {styles.startanswerbg}><Text style = {styles.startanswer}>開始回答</Text></View>
                
            </TouchableOpacity>
        </View> 
    );
}

function SolveProblem_2 ({navigation, route}) {
    return(
        <View>
            <View style = {styles.solvebg}>
                <View style = {styles.robotarea}>
                    <Image style = {styles.chatface} source = {require('../img/img_chatface.png')}/>
                    <Image style = {styles.chatbox} source = {require('../img/img_chatbox.png')}/>
                </View>
                </View>
            <View style = {styles.robotsay1box}><Text style = {styles.robotsay1}>哈囉！最近有哪些事情讓你煩惱呢？</Text></View> 
            <View style = {styles.q1}>
                <View style = {styles.q1box}>
                    <View style = {styles.q1titlebg}><Text style = {styles.q1title}>最近感到煩悶的事情？</Text></View>
                <View style = {styles.anssec1}>
                    <Text style = {styles.num1}>1.</Text>
                    <TextInput
                          style={{ 
                              height: 40,
                              width: 200, 
                              borderColor: '#378D8F', 
                              borderBottomWidth: 1,
                               }}
                            placeholder = '輸入事件'
                            placeholderTextColor = 'gray'
                            clearTextOnFocus = {true}
                      />
                </View>
            <TouchableOpacity
                onPress = {() => navigation.goBack()}>
                    <Text>back</Text>
            </TouchableOpacity>
                
                </View>            
            </View> 
        </View>
    );
}

const SolveProblem = () => {
    return(
        <NavigationContainer independent = {true}>
            <Stacksolve.Navigator initialRouteName = "SolveProblem_1">
                <Stacksolve.Screen 
                    name = "SolveProblem_1" 
                    component = {SolveProblem_1}
                    options = {() => ({
                        headerShown: false,
                    })}
                
                      />
                <Stacksolve.Screen 
                    name = "SolveProblem_2" 
                    component = {SolveProblem_2}
                    options = {() => ({
                        headerShown: false 
                      })}/>
            </Stacksolve.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    solvebg: {
        backgroundColor: '#E0F3F1',
        height: 650
    },
    robotarea: {
        flexDirection: 'row',
        marginTop: 40,
    },
    chatface: {
        marginLeft: 20
    },
    chatbox: {
        width: 230,
        resizeMode: 'contain'  
    },
    robotsay1box: {
        width: 180,
        position: 'absolute',
        marginTop: 65,
        marginLeft: 103
    },
    robotsay1: {
        lineHeight: 20,
        fontSize: 14,
        color: '#393939'
    },
    startanswerbg: {
        backgroundColor: '#378D8F',
        width: 85,
        height: 35,
        borderRadius: 20,
        marginLeft: 270,
        marginTop: 460,
        shadowOffset: {width: 1, height:1},
        shadowColor: 'black',
        shadowOpacity: 0.5
    },
    startanswer: {
        color: 'white',
        paddingLeft: 14,
        paddingTop: 9
    },
    q1: {
        backgroundColor: 'rgba(0,0,0,0.5)',
        position: 'absolute',
        width: 375,
        height: 650
    },
    q1title: {
        color: 'white',
        textAlign: 'center',
        marginTop: 25
    },
    q1titlebg: {
        backgroundColor: '#378D8F',
        height: 65
    },
    q1box: {
        backgroundColor: '#FAFAFA',
        width: 300,
        height: 420,
        marginLeft: 37.5,
        marginTop: 130
    },
    anssec1: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 45,
        marginLeft: 40
    },
    num1: {
        color: '#378D8F'
    }
  });

export default SolveProblem;