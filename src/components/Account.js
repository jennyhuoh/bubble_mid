import React from 'react';
import { StyleSheet, Text, View, Image, Button, Alert } from 'react-native';
import { apisAreAvailable } from 'expo';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { TouchableOpacity, TouchableHighlight } from 'react-native-gesture-handler';

const Stackaccount = createStackNavigator();


const Account = () => {
    return(
        <View style = {styles.accountbg}>
<<<<<<< HEAD
<<<<<<< Updated upstream
         <Image style = {styles.bgphoto} source = {require('../img/img_bgphoto.png')}/>  
             <View style = {styles.info}>
             <View style = {styles.id}>
                 <View style = {styles.images}>
                 <Image style = {styles.photocircle} source = {require('../img/img_bubble_new.png')}/>
                 <Image style = {styles.selfphoto} source = {require('../img/img_selfphoto.png')}/>
                 </View>
                 <View>
                     <Text style = {styles.idname}>Sherry Yang</Text>
                 </View>
             </View>
            
         </View>
=======
=======
>>>>>>> huoh
            <Image style = {styles.bgphoto} source = {require('../img/img_bgphoto.png')}/>  
            <View style = {styles.info}>
                <View style = {styles.id}>
                    <View style = {styles.images}>
                        <Image style = {styles.photocircle} source = {require('../img/img_selfimgcircle.png')}/>
                        <Image style = {styles.selfphoto} source = {require('../img/img_selfphoto.png')}/>
                    </View>
                    <View>
                        <Text style = {styles.idname}>Sherry Yang</Text>
                    </View>
                </View>
                <View style = {styles.touchshadow}>
                <TouchableHighlight 
                    onPress = {()=>alert('隱藏分享的名單')}
                    underlayColor = '#B8CFE1'
                    style = {styles.touch}>
                    <View style = {styles.accountbtn}>
                        <Image style = {styles.accounticon} source = {require('../img/icon_unvisible.png')}/>
                        <View><Text style = {styles.accountword}>隱藏分享的名單</Text></View>   
                        <Image style = {styles.accountright} source = {require('../img/btn_right.png')}/>
                    </View>
                </TouchableHighlight> 

                </View>
                <TouchableHighlight 
                    onPress = {()=>alert('儲存的事件')}
                    underlayColor = '#B8CFE1'>
                    <View style = {styles.accountbtn2}>
                        <Image style = {styles.accounticon} source = {require('../img/icon_saved.png')}/>
                        <View><Text style = {styles.accountword}>儲存的事件</Text></View>   
                        <Image style = {styles.accountright2} source = {require('../img/btn_right.png')}/>
                    </View>
                </TouchableHighlight>  
                <TouchableHighlight 
                    onPress = {()=>alert('設定')}
                    underlayColor = '#B8CFE1'>
                    <View style = {styles.accountbtn}>
                        <Image style = {styles.accounticon} source = {require('../img/icon_settings.png')}/>
                        <View><Text style = {styles.accountword}>設定</Text></View>   
                        <Image style = {styles.accountright3} source = {require('../img/btn_right.png')}/>
                    </View>
                </TouchableHighlight>           
            </View>
<<<<<<< HEAD
>>>>>>> Stashed changes
=======
>>>>>>> huoh
        </View>
    );
}
const styles = StyleSheet.create({
    accountbg: {
        backgroundColor: '#DEF1EF',
        height: 730
    },
    bgphoto: {
        resizeMode: 'contain',
        height: 285,
        width: 375,
        marginLeft: 0
    },
    info: {
        width: 350,
        height: 430,
        backgroundColor: '#fff',
        marginLeft: 12,
        shadowOffset: {width: 2, height: 3},
        shadowColor: 'black',
        shadowOpacity: 0.3
    },
    id: {
        flexDirection: 'row'
    },
    photocircle: {
        marginLeft: 15,
        marginTop: 20
    },
    selfphoto: {
        position: 'absolute',
<<<<<<< HEAD
<<<<<<< Updated upstream
        width:100,
        height:100,
        marginLeft: 14,
        marginTop: 17
=======
=======
>>>>>>> huoh
        marginLeft: 28,
        marginTop: 32,
        resizeMode: 'contain',
        width: 50,
        height: 50
<<<<<<< HEAD
>>>>>>> Stashed changes
=======
>>>>>>> huoh
    },
    idname: {
        color: '#269192',
        fontWeight: '500',
        fontSize: 18,
        marginTop: 45,
        marginLeft: 20
    },
    accountbtn: {
        flexDirection: 'row',
        paddingTop: 10,
        paddingBottom: 10,
        borderTopColor: 'rgba(0,0,0,0.2)',
        borderTopWidth: 0.5,
        borderBottomColor: 'rgba(0,0,0,0.2)',
        borderBottomWidth: 0.5,
    },
    accountbtn2: {
        flexDirection: 'row',
        paddingTop: 10,
        paddingBottom: 10,
    },
    accounticon: {
        marginLeft: 10
    },
    accountword: {
        marginTop: 17,
        color: '#393939'
    },
    accountright: {
        marginLeft: 140
    },
    accountright2: {
        marginLeft: 168
    },
    accountright3: {
        marginLeft: 210
    },
    touch: {
        marginTop: 25,
    },
  });
export default Account;