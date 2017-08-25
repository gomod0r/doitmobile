import React, { Component } from 'react';

import {
    View,
    StatusBar,
    Image,
    Text
} from 'react-native';

import {
    Header, Left, Body, Right,
    Form, Item,
    Input,
    Label,
    Button
} from 'native-base';

import Icon from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons
                    from 'react-native-vector-icons/MaterialCommunityIcons';

export default class ChangePassword extends Component{
    render(){
        const {goBack} = this.props.navigation;
        return(
            <View style={{ backgroundColor:'white', flex:1 }}>
                <Header noShadow style={{ backgroundColor:'white' }}>
                    <StatusBar backgroundColor="#7200da" />
                    <Left>
                        <Icon onPress={() => goBack()}
                              name="keyboard-backspace"
                              size={30}
                              style={{ color:'#7200da' }}/>
                    </Left>
                    <Body>
                        <Image style={{ alignSelf:'flex-end' }} s
                               source={require('../img/doit.png')} />
                    </Body>
                    <Right>
                        <Image source={require('../img/profile.png')}
                               style={{ width:24, height:24,
                                        borderRadius:12 }} />
                    </Right>
                </Header>
                <View>
                    <Form style={{ marginTop:50, paddingHorizontal:32 }}>
                        <Item floatingLabel
                              style={{ marginTop:0, marginLeft: 0,
                                       borderWidth:1,
                                       paddingHorizontal:32,
                                       borderColor:'#7200da'}}>
                            <Label style={{ color:'#9b9b9b', alignSelf:'center',
                                            fontSize:16 }}>
                                Eski Şifre
                            </Label>
                            <Input secureTextEntry={true}/>
                        </Item>
                        <Item floatingLabel
                              style={{marginLeft: 0, borderWidth:1,
                                      marginTop: 4,  borderColor:'#7200da'}}>
                            <Label style={{ color:'#9b9b9b', alignSelf:'center',
                                            fontSize:16 }}>
                                Yeni Şifre
                            </Label>
                            <Input secureTextEntry={true}/>
                        </Item>
                        <Item floatingLabel
                              style={{ marginLeft: 0, borderWidth:1,
                                       marginTop: 4, paddingHorizontal:32,
                                       borderColor:'#7200da'}}>
                            <Label style={{ color:'#9b9b9b', alignSelf:'center',
                                            fontSize:16 }}>
                                Yeni Şifre Tekrar
                            </Label>
                            <Input secureTextEntry={true}/>
                        </Item>
                        <Button
                            full
                            style={{ backgroundColor:'white',
                                     height:44,
                                     borderRadius: 60, marginTop: 65,
                                     borderColor:'#7200da', borderWidth:1 }}>
                            <Text style={{ color:'#7200da',
                                  fontSize: 20 }}>
                                Onayla
                            </Text>
                        </Button>
                    </Form>
                </View>
            </View>
        );
    }
}
