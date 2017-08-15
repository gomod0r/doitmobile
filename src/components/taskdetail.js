import React, { Component } from 'react';

import {
    View,
    Text,
    StatusBar,
    TouchableWithoutFeedback
} from 'react-native';

import {
    Header, Left,
    Card
} from 'native-base';

import Icon from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default class TaskDetail extends Component {
    render(){
        return(
            <View style={{ flex:1, backgroundColor:'white' }}>
                <Header noShadow style={{ backgroundColor:'white' }}>
                    <StatusBar backgroundColor="#7200da" />
                    <Left>
                        <Icon name='arrow-back' size={20} style={{ color:'#7200da' }} />
                    </Left>
                </Header>
                <Text style={{ marginTop:18, marginLeft:16, color:'#fb684b', fontSize:30, fontWeight:'500' }}> Görev Adı </Text>
                <View style={{ height:189, paddingHorizontal:16, marginTop:25 }}>
                    <Card style={{ borderRadius:7 }}>
                        <View style={{ borderBottomWidth:1, borderBottomColor:'#d8d8d8', height:94 }}>
                            <View style={{ flexDirection:'row', marginTop:15, marginLeft:16 }}>
                                <Icon name="date-range" size={25} style={{ color:'#7200da' }} />
                                <Text style={{ marginLeft:16, fontSize:18, color:'#9b9b9b' }}>Tarih Seç</Text>
                            </View>
                            <View style={{ flexDirection:'row', marginTop:15, marginLeft:16 }}>
                                <MaterialCommunityIcons name="clock" size={25} style={{ color:'#7200da' }} />
                                <Text style={{ marginLeft:16, fontSize:18, color:'#9b9b9b' }}>Saat Seç</Text>
                            </View>
                        </View>
                        <View style={{ marginTop:16, marginLeft:16 }}>
                            <Text style={{ fontSize:18, color:'#9b9b9b' }}>Not Ekle</Text>
                            <View style={{ flexDirection:'row', justifyContent:'flex-end', marginRight:16, alignItems:'flex-end' }}>
                                <TouchableWithoutFeedback hitSlop={{ top:20 }}>
                                    <MaterialCommunityIcons name="pencil" style={{ fontSize:15, color:'#2e70be' }}/>
                                </TouchableWithoutFeedback>
                                <TouchableWithoutFeedback hitSlop={{ top:20 }}>
                                    <MaterialCommunityIcons name="delete" style={{ fontSize:15, color:'#d0011b' }}/>
                                </TouchableWithoutFeedback>
                            </View>
                        </View>
                    </Card>
                </View>
            </View>
        );
    }
}
