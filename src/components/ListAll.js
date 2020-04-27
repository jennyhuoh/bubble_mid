import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { apisAreAvailable } from 'expo';

const ListAll = () => {
    return(
        <View style = {styles.listallbg}>
            <View style = {styles.eventlist}>
                <Image style = {styles.eventbubble} source = {require('../img/img_eventbubble.png')}/>
                <Image style = {styles.eventbubble} source = {require('../img/img_eventbubble.png')}/>
                <Image style = {styles.eventbubble} source = {require('../img/img_eventbubble.png')}/>
            </View>
            <View style = {styles.shadows}>
            <Image style = {styles.bubbleshadow} source = {require('../img/img_bubbleshadow.png')}/>
            <Image style = {styles.bubbleshadow} source = {require('../img/img_bubbleshadow.png')}/>
            <Image style = {styles.bubbleshadow} source = {require('../img/img_bubbleshadow.png')}/>
            </View>
            <View style = {styles.time}>
                <View style = {styles.timebg}><Text style = {styles.times}>2020|04|05</Text></View>
                <View style = {styles.timebg}><Text style = {styles.times}>2020|04|05</Text></View>
                <View style = {styles.timebg}><Text style = {styles.times}>2020|04|05</Text></View>
            </View>
            <Image style = {styles.water} source = {require('../img/img_waters.png')}/>
            <Image style = {styles.imgbubble1} source = {require('../img/img_bubble1.png')}/>
            <Image style = {styles.imgbubble2} source = {require('../img/img_bubble2.png')}/>
            <Image style = {styles.imgbubble3} source = {require('../img/img_bubble3.png')}/>
            <Image style = {styles.imgbubble4} source = {require('../img/img_bubble4.png')}/>
            <Image style = {styles.imgbubble5} source = {require('../img/img_bubble5.png')}/>
            <Image style = {styles.imgnet} source = {require('../img/img_net.png')}/>
        </View>
    );
}

const styles = StyleSheet.create({
    listallbg: {
        backgroundColor: '#E0F3F1',
        height: 600,
    },
    imgbubble1: {
        resizeMode: 'contain',
        width: 180,
        position: 'absolute',
        marginTop: 455,
        marginLeft: 40
    },
    imgbubble2: {
        resizeMode: 'contain',
        width: 180,
        position: 'absolute',
        marginTop: 430,
        marginLeft: 75
    },
    imgbubble3: {
        resizeMode: 'contain',
        width: 180,
        position: 'absolute',
        marginTop: 460,
        marginLeft: 100
    },
    imgbubble4: {
        resizeMode: 'contain',
        width: 180,
        position: 'absolute',
        marginTop: 415,
        marginLeft: 110
    },
    imgbubble5: {
        resizeMode: 'contain',
        width: 180,
        position: 'absolute',
        marginTop: 440,
        marginLeft: 135
    },
    imgnet: {
        resizeMode: 'contain',
        width: 180,
        position: 'absolute',
        marginTop: 480,
        marginLeft: 130
    },
    eventlist: {
        flexDirection: 'row',
        marginLeft: 28,
        marginTop: 40
    },
    eventbubble: {
        marginRight: 10
    },
    shadows: {
        flexDirection: 'row',
        marginLeft: 47,
        marginTop: 5
    },
    bubbleshadow: {
        marginRight: 50
    },
    time: {
        flexDirection: 'row',
        marginLeft: 33,
        marginTop: 20
    },
    times: {
        width: 90,
        marginRight: 20,
        textAlign: 'center',
        paddingTop: 2.5,
        color: '#269C9B'
    },
    timebg: {
        backgroundColor: 'white',
        width: 90,
        height: 23,
        borderRadius: 18,
        marginRight: 20,

    },
    water: {
        position: 'absolute',
        marginTop: 500,
        marginLeft: -3
    }
  });

export default ListAll;