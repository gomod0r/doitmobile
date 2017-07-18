import React, { Component } from 'react';

import {
    View,
    Text,
    Platform,
    StatusBar,
    TouchableHighlight
} from 'react-native';

import {
    Header, Left, Right, Body,
    Title,
    Form, Item,
    Label,
    Input,
    Button,
    Content,
    Fab,
    Footer, FooterTab
} from 'native-base';

import Icon from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { StackNavigator } from 'react-navigation';

export default class Login extends Component{

    render(){
        return(
            <View style={{ backgroundColor:'white', flex:1 }}>
                <Header noShadow style={{ paddingLeft:(Platform.OS === 'android') ? 0 : 16,
                                          backgroundColor:'transparent',
                                          borderBottomColor:'transparent',
                                        }} >
                    <Left></Left>
                    <Body>
                        <Title style={{ fontSize:12, fontWeight:'bold', color:'blue' }} > GİRİŞ YAP </Title>
                    </Body>
                    <Right></Right>
                </Header>
                <View style={{ backgroundColor:'white', flex:1 }}>
                    <Text style={{ paddingLeft:20,paddingTop:50, fontSize:11, fontWeight:'bold', color:'blue', backgroundColor:'transparent', marginBottom:8 }}> Hoşgeldiniz! </Text>
                    <Text style={{ paddingLeft:20,paddingTop:25, fontSize:26, lineHeight:31, fontWeight:'300', backgroundColor:'transparent', color:'blue' }}> Lütfen Giriş Yapınız </Text>
                    <Form style={{ paddingHorizontal:25 }}>
                            <Item floatingLabel style={{marginLeft: 0, borderWidth:.5}}>
    							<Label style={{ color:'#999' }}>Kullanıcı Adı veya E-Posta</Label>
    							<Input onChangeText={ (text) => this.setState({ email: text }) }
    								   keyboardType={'email-address'}/>
    						</Item>

    						<Item floatingLabel style={{marginLeft: 0, borderWidth:.5, marginTop: 12}}>
    							<Label style={{ color:'#999' }}>Şifre</Label>
    							<Input onChangeText={ (text) => this.setState({ password: text }) }
    							       secureTextEntrçy={true}/>
    						</Item>


    						<Button transparent style={{ paddingHorizontal: 0, alignSelf: 'flex-end', marginTop: 16 }}>
    							<Text
    								style={{ color:'blue' }}>
    								Şifreni mi Unuttun?
    							</Text>
    						</Button>

                            <Button
                                onPress={() => navigate('Tasks')}
    							style={{ backgroundColor:'blue', borderRadius: 3, marginTop: 24 }}>
    							<Text style={{ color:'white', fontWeight: '600', fontSize: 15, }}>Giriş Yap</Text>
    					 	</Button>

    					</Form>
                    </View>
            </View>
        );
    }
}
