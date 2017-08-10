import React, { Component } from 'react';

import{
    View,
    Text,
    Image,
    StatusBar,
    TouchableHighlight
} from 'react-native';

import {
    Container,
    Body,Right,
    Header, Left,
    Drawer,
    SideBar,
    Button
} from 'native-base';

import Icon from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Card from './card'

export default class Task extends Component {
    render(){
        return(
            <View style={{ backgroundColor:'white', flex:1 }}>
                <Image source={require('../img/header.jpg')} style={{ marginBottom:42, resizeMode: 'cover', height:230 }}>
                    <Header noShadow style={{ backgroundColor:'transparent',
                                              alignItems:'stretch' }}>
                        <StatusBar translucent animated backgroundColor="rgba(0, 0, 0, 0.20)" />
                        <Left style={{ marginTop:30 }}>
                            <TouchableHighlight style={{ backgroundColor:'transparent', borderWidth:0 }}>
                                <Icon name='menu' style={{ fontSize:30, color:'white' }} />
                            </TouchableHighlight>
                        </Left>
                    </Header>
                </Image>
                <View style={{ backgroundColor:'white', paddingHorizontal:12, marginBottom:15 }}>
                    <Card primaryText="Research In Advertising" secondaryText="As soon as Computerized Tomography or
                            CT scans became accessible in the 1970s, " />
                </View>
            </View>
        );
    }
}
