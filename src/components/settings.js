import React, { Component } from 'react';

import {
    View,
    Text,
    StatusBar,
    Image,
		Platform
} from 'react-native';

import {
    Header, Left, Body, Right
} from 'native-base';

import Icon from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons
                    from 'react-native-vector-icons/MaterialCommunityIcons';

export default class Settings extends Component{
    render(){
        const {goBack} = this.props.navigation;
        return(
            <View style={{ backgroundColor:'white', flex:1 }}>
                <Header noShadow style={{ backgroundColor:'white',
							 			  borderBottomColor:'white'}}>
                    <StatusBar backgroundColor="#7200da" />
                    <Left>
                        <Icon onPress={() => goBack()}
                              name="keyboard-backspace" size={30}
                              style={{ color:'#7200da' }}/>
                    </Left>
                    <Body>
                        <Image style={{ alignSelf:(Platform.OS === 'ios') ?
									    'center' : 'flex-end' }}
                               source={require('../img/doit.png')} />
                    </Body>
                    <Right>
                        <Image source={require('../img/profile.png')}
                               style={{ width:24, height:24,
                                        borderRadius:12 }} />
                    </Right>
                </Header>
                <View style={{ flex:1 }}>
                    <View style={{ height:56, justifyContent:'center',
                                   marginTop:30, borderBottomWidth:2,
                                   borderBottomColor:'#f7f7f7' }}>
                        <Text
                            onPress={() =>
                                this.props.navigation.navigate('UserInfo') }
                            style={{ fontSize:20, color:'#7200da',
                                     marginBottom:16, alignSelf:'center' }}>
                            Bilgilerimi Düzenle
                        </Text>
                    </View>
                    <View style={{ height:56, justifyContent:'center',
                                   alignItems:'center', marginTop:14,
                                   borderBottomWidth:2,
                                   borderBottomColor:'#f7f7f7' }}>
                        <Text
                            onPress={() =>
                            this.props.navigation.navigate('ChangePassword') }
                            style={{ fontSize:20, color:'#7200da',
                                     marginBottom:16 }}>
                            Şifremi Değiştir
                        </Text>
                    </View>
                </View>
            </View>
        );
    }
}
