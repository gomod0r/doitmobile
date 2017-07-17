import React, { Component } from 'react';

import {
    View,
    Text,
    StatusBar,
    TouchableHighlight
} from 'react-native';

import {
    Header, Left, Body, Right,
    Title,
    Button,
    Footer, FooterTab,
    Content,
    Fab
} from 'native-base';

import Icon from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default class Tasks extends Component {
    render(){
        return(
            <View style={{ backgroundColor:'white', flex:1 }}>
                <View>
                    <Header noShadow style={{ backgroundColor:'white', borderBottomColor:'blue', borderBottomWidth:1, alignItems:'stretch' }}>
                        <StatusBar backgroundColor='blue' />
                        <Left>
                            <TouchableHighlight style={{ backgroundColor:'white' }}>
                                <MaterialCommunityIcons name='bell-ring-outline' style={{ color:'blue', fontSize:15 }} />
                            </TouchableHighlight>
                        </Left>
                        <Body style={{ alignItems:'center', justifyContent:'center' }}>
                            <Text style={{ color:'blue',fontSize:15 ,fontWeight:'bold' }}> GÖREVLER </Text>
                        </Body>
                        <Right>
                            <TouchableHighlight style={{ backgroundColor:'white' }}>
                                <Icon name='more-vert' style={{ color:'blue', fontSize:15, fontWeight:'bold' }} />
                            </TouchableHighlight>
                        </Right>
                    </Header>
                </View>
                <Content>
                </Content>
                <View>
                    <Fab
                        style={{ backgroundColor: 'blue' }}
                        position="bottomRight"
                    >
                        <MaterialCommunityIcons name='plus' />
                    </Fab>
                </View>
                <Footer style={{ height:49 }}>
                    <FooterTab style={{ backgroundColor:'white', borderTopColor:'blue', borderTopWidth:1 }}>
                        <Button>
                            <MaterialCommunityIcons name='bookmark-outline' style={{ fontSize:26, color:'blue' }}/>
                            <Text style={{ fontSize:10, color:'blue' }}>Görevler</Text>
                        </Button>
                        <Button>
                            <MaterialCommunityIcons name='calendar' style={{ fontSize:26 }}/>
                            <Text style={{ fontSize:10 }}>Takvim</Text>
                        </Button>
                        <Button>
                            <MaterialCommunityIcons name='settings' style={{ fontSize:26 }}/>
                            <Text style={{ fontSize:10 }}>Ayarlar</Text>
                        </Button>
                    </FooterTab>
                </Footer>
            </View>
        );
    }
}
