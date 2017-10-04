import React, { Component } from 'react';

import{
    View,
    Text,
    Image,
    StatusBar,
    TouchableHighlight,
    ListView,
    TextInput,
    TouchableWithoutFeedback,
		Platform
} from 'react-native';

import {
    Container,
    Body,Right,
    Header, Left,
    Drawer,
    SideBar,
    Button,
    Content,
    Col, Row
} from 'native-base';

import Icon from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons
                    from 'react-native-vector-icons/MaterialCommunityIcons';

export default class EmptyTask extends Component{
    render(){
        return(
            <View style={{ backgroundColor:'white', flex:1 }}>
                <Image source={require('../img/header.jpg')}
                       style={{ resizeMode: 'cover', height:230 }}>
                    <Header noShadow style={{ backgroundColor:'transparent',
                                              alignItems:'stretch',
											  borderBottomColor:'transparent'
                                           }}>
                        <StatusBar
                            translucent
                            animated
                            backgroundColor="rgba(0, 0, 0, 0.20)" />
                        <Left style={{ marginTop:(Platform.OS === 'ios') ?
									   0 : 30 }}>
                            <TouchableHighlight
                                onPress={
                                ()=>{
                                this.props.navigation.navigate('DrawerOpen');}}
                                style={{ backgroundColor:'transparent',
                                         borderWidth:0 }}>
                                <Icon
                                    name='menu'
                                    style={{ fontSize:30, color:'white' }} />
                            </TouchableHighlight>
                        </Left>
                        <Body></Body>
                        <Right></Right>
                    </Header>
                    <View style={{ flexGrow:1, alignItems: 'flex-end',
                                   flexDirection:'row',
							       backgroundColor:'transparent' }}>
                        <View style={{ marginBottom:16, marginLeft:16 }}>
                            <Text style={{ color:'white', fontSize:30,
                                           fontWeight:'500' }}>
                                Bugün
                            </Text>
                            <View style={{ flexDirection:'row',
                                           alignItems:'center' }}>
                                <Text style={{ fontSize:18, fontWeight:'300',
                                               color:'white' }}>
                                    7 Ağustos 2017
                                </Text>
                                <Icon name='keyboard-arrow-down'
                                      style={{ fontSize:20, color:'white',
                                               marginLeft:5 }}/>
                            </View>
                        </View>
                    </View>
                </Image>
				<View style={{ flex:1 }}>
	                <TouchableHighlight style={{ position:'relative',
	                                             alignSelf:'flex-end',
	                                             marginRight:20, marginTop:-27,
	                                             marginBottom:15,
												 borderRadius:26,
	                                             backgroundColor:'#7200da',
	                                             width:54, height:54,
	                                             alignItems:'center',
	                                             justifyContent:'center' }}
	                                    onPress={
	                                ()=>this.props.navigation.navigate('Add')}>
	                    <Icon name='add' style={{ color:'white',
												  fontSize:30 }} />
	                </TouchableHighlight>
	                <View style={{ backgroundColor:'white', alignItems:'center',
	                               marginTop:30 }}>
	                    <Image source={require('../img/school-material.png')} />
	                    <Text style={{ fontSize:24, fontWeight:'500',
	                                   color:'#4a4a4a' }}>
	                        Yapılacaklar Listen Boş
	                    </Text>
	                    <Text style={{ fontSize:18, color:'#4a4a4a',
	                                   marginTop:15 }}>
	                        Neden hemen bir tane eklemiyorsun?
	                    </Text>
	                </View>
				</View>
            </View>
        );
    }
}
