import React from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import { apisAreAvailable } from 'expo';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stackaccount = createStackNavigator();


const Account = () => {
    return(
        <View style = {styles.accountbg}>
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
        </View>
    );
}
const styles = StyleSheet.create({
    bgphoto:{
       resizeMode: 'contain',
       width:375,
       height:272,
       paddingTop:150,
       marginLeft:0,
    },
    accountbg: {
        backgroundColor: '#DEF1EF',
        height: 730
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
        resizeMode: 'contain',
        width:130,
        height:130,
        marginLeft: 0,
        marginTop: 2,
    },
    selfphoto: {
        position: 'absolute',
        width:100,
        height:100,
        marginLeft: 14,
        marginTop: 17
    },
    idname: {
        color: '#269192',
        fontWeight: '500',
        fontSize: 18,
        marginTop: 45,
        marginLeft: 20
    }
  });
export default Account;