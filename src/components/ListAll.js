import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { apisAreAvailable } from 'expo';

const ListAll = () => {
    return(
        <View style = {styles.listallbg}>
            <Image style = {styles.imgbubble} source = {require('../img/img_bubbles.png')}/>
        </View>
    );
}

const styles = StyleSheet.create({
    listallbg: {
        backgroundColor: '#E0F3F1',
        height: 600,
    },
    imgbubble: {
        resizeMode: 'contain',
        width: 180,
        position: 'absolute',
        marginTop: 350,
        marginLeft: 100
    }
  });

export default ListAll;