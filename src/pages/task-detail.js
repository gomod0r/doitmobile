import React, { Component } from 'react';

import {
    View,
    Text,
    StatusBar,
    TouchableHighlight,
    TouchableWithoutFeedback,
    TextInput
} from 'react-native';

import {
    Header, Left, Body, Right,
    Card,
    Button
} from 'native-base';

import Icon from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons
                    from 'react-native-vector-icons/MaterialCommunityIcons';

export default class TaskDetail extends Component {
    render(){
        const {goBack} = this.props.navigation;
        return(
            <View style={{ flex:1, backgroundColor:'white' }}>
                <Header noShadow style={{ backgroundColor:'white' }}>
                    <StatusBar backgroundColor="#7200da" />
                    <Left>
                        <Icon onPress={() => goBack()}
                              name='keyboard-backspace' size={30}
                              style={{ color:'#7200da' }} />
                    </Left>
                    <Body></Body>
                    <Right></Right>
                </Header>
                <View style={{ paddingLeft:16, marginTop:18,
                               flexDirection:'row', alignItems:'center' }}>
                    <View style={{ flexDirection:'column', flex:1 }}>
                        <Text style={{ color:'#fb684b', fontSize:30,
                                       fontWeight:'500' }}> Görev Adı </Text>
                        <View style={{ width:209, height:1,
                                       backgroundColor:'#fb684b',
                                       marginTop:10 }} />
                    </View>
                    <View style={{ flex:1 }}>
                        <Button numberOfLines={3}
                                style={{ borderRadius:4, borderWidth:1,
                                         borderColor:'#fb684b', width:32,
                                         height:32, backgroundColor:'white',
                                         alignSelf:'flex-end', marginRight:16
                                      }}>
                        </Button>
                    </View>
                </View>
                <TextInput underlineColorAndroid='white'
                           placeholder='Description'
                           style={{ height:47, marginHorizontal:16,
                                    borderWidth:1, borderColor:'#f3f3f3',
                                    marginTop:16, borderRadius:3 }} />
                <View style={{ height:189, paddingHorizontal:16,
                               marginTop:20 }}>
                    <Card style={{ borderRadius:7 }}>
                        <View style={{ borderBottomWidth:1,
                                       borderBottomColor:'#d8d8d8', height:94,
                                       flexDirection:'row' }}>
                            <View style={{ flexDirection:'column', flex:1 }}>
                                <View style={{ flexDirection:'row',
                                               marginTop:15, marginLeft:16 }}>
                                    <Icon name="date-range"
                                          size={25}
                                          style={{ color:'#7200da' }} />
                                    <Text style={{ marginLeft:16,
                                                   fontSize:18,
                                                   color:'#9b9b9b' }}>
                                        Tarih Seç
                                    </Text>
                                </View>
                                <View style={{ flexDirection:'row',
                                               marginTop:15, marginLeft:16 }}>
                                    <MaterialCommunityIcons name="clock"
                                                            size={25}
                                                            style={{
                                                                color:'#7200da'
                                                                  }} />
                                    <Text style={{ marginLeft:16, fontSize:18,
                                                   color:'#9b9b9b' }}>
                                        Saat Seç
                                    </Text>
                                </View>
                            </View>
                            <View style={{ justifyContent:'center',
                                           alignItems:'flex-end', flex:1,
                                           marginRight:16 }}>
                                <TouchableHighlight
                                    style={{ width:32,
                                             alignItems:'center',
                                             justifyContent:'center',
                                             borderRadius:16, height:32,
                                             borderWidth:1,
                                             borderColor:'#d8d8d8' }}>
                                    <Icon size={20}
                                          name='notifications-active'
                                          style={{ color:'#75d701' }}/>
                                </TouchableHighlight>
                            </View>
                        </View>
                        <View style={{ flex:1, marginTop:16, marginLeft:16,
                                       flexDirection:'row' }}>
                            <Text style={{ fontSize:18, color:'#9b9b9b',
                                           flex:1 }}>
                                Not Ekle
                            </Text>
                            <View style={{ flexDirection:'row',
                                           justifyContent:'flex-end', flex:1,
                                           marginRight:16,
                                           alignItems:'flex-end',
                                           marginBottom:16 }}>
                                <TouchableWithoutFeedback hitSlop={{ top:20 }}>
                                    <MaterialCommunityIcons
                                        name="pencil"
                                        style={{ fontSize:15,
                                                 color:'#2e70be' }}/>
                                </TouchableWithoutFeedback>
                                <TouchableWithoutFeedback hitSlop={{ top:20 }}>
                                    <MaterialCommunityIcons
                                        name="delete"
                                        style={{ fontSize:15,
                                                 color:'#d0011b' }}/>
                                </TouchableWithoutFeedback>
                            </View>
                        </View>
                    </Card>
                </View>
                <TouchableHighlight
                    style={{ marginTop:40, width:54, height:54, borderRadius:27,
                             alignSelf:'center', backgroundColor:'#7200da',
                             alignItems:'center', justifyContent:'center' }}>
                    <Icon name='add' style={{ color:'white' }} size={30} />
                </TouchableHighlight>
            </View>
        );
    }
}
