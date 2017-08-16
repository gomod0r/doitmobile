import React, { Component } from 'react';

import{
    View,
    Text,
    Image,
    StatusBar,
    TouchableHighlight,
    ListView
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

import Api from '../config/api';

import Icon from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons
                    from 'react-native-vector-icons/MaterialCommunityIcons';

import Card from './card'

var taskArray = [];

export default class Task extends Component {

    constructor(props){
        super(props);
        var dataSource =
                new ListView.DataSource({rowHasChanged:(r1,r2) => r1 != r2});
        this.state = {
            dataSource: dataSource.cloneWithRows(taskArray),
            isLoading: true,
        }
    }

    componentDidMount(){
        this.getTheData((task)=>{
            this.setState({
                dataSource: this.state.dataSource.cloneWithRows(task),
                isLoading: false
            });
        });
    }

    getTheData(callback) {
        var url = "http://doit.unicrow.com/api/v1/tasks/";
        Api.request(url, {
            method: 'GET'
        }).then(callback);
    }

    _renderRow(row) {
    	return (
            <View style={{ paddingHorizontal:16 }}>
                <Card primaryText={ row.title }  />
            </View>
    	)
    }

    render(){
        return(
            <View style={{ backgroundColor:'white', flex:1 }}>
                <Image source={require('../img/header.jpg')}
                       style={{ resizeMode: 'cover', height:230 }}>
                    <Header noShadow style={{ backgroundColor:'transparent',
                                              alignItems:'stretch' }}>
                        <StatusBar
                            translucent
                            animated
                            backgroundColor="rgba(0, 0, 0, 0.20)" />
                        <Left style={{ marginTop:30 }}>
                            <TouchableHighlight
                                style={{ backgroundColor:'transparent',
                                         borderWidth:0 }}>
                                <Icon
                                    name='menu'
                                    style={{ fontSize:30, color:'white' }} />
                            </TouchableHighlight>
                        </Left>
                    </Header>
                    <View style={{ flexGrow:1, alignItems: 'flex-end',
                                   flexDirection:'row', marginLeft:16 }}>
                        <View style={{ marginBottom:16 }}>
                            <View style={{ flexDirection:'row',
                                           alignItems:'center' }}>
                                <Icon name='keyboard-arrow-left'
                                      size={22} style={{ color:'white' }} />
                                <Text style={{ marginHorizontal:11, fontSize:12,
                                               fontWeight:'300', color:'#ffffff'
                                            }}>
                                    6 Ağustos
                                </Text>
                                <Icon name='keyboard-arrow-right'
                                      size={22} style={{ color:'white' }} />
                            </View>
                            <Text style={{ color:'white', fontSize:30,
                                           fontWeight:'500' }}>
                                Bugün
                            </Text>
                            <Text style={{ fontSize:18, fontWeight:'300',
                                           color:'white' }}>
                                7 Ağustos 2017
                            </Text>
                        </View>
                    </View>
                </Image>
                <TouchableHighlight style={{ position:'relative',
                                             alignSelf:'flex-end',
                                             marginRight:20, marginTop:-27,
                                             marginBottom:15, borderRadius:26,
                                             backgroundColor:'#7200da',
                                             width:54, height:54,
                                             alignItems:'center',
                                             justifyContent:'center' }}>
                    <Icon name='add' style={{ color:'white', fontSize:30 }} />
                </TouchableHighlight>
                <Content style={{ backgroundColor:'white',
                                  paddingHorizontal:12, marginBottom:15 }}>
                    <ListView
                        dataSource={ this.state.dataSource }
                        renderRow={ row => this._renderRow(row) }
                        enableEmptySections={true}
        		    />
                </Content>
            </View>
        );
    }
}
