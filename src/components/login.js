import React, { Component } from 'react';

import {
    View,
    Text,
    Platform,
    StatusBar,
    TouchableHighlight,
    AsyncStorage
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

import Api from '../config/api'

const ACCESS_TOKEN = 'auth_token';

export default class Login extends Component{

    redirect(routeName, accessToken){
        this.props.navigation.navigate(routeName);
    }

    constructor(){
        super();

        this.state = {
    		email: "",
    		password: "",
    		error: "",
            token:""
        }
	}

	async storeToken(accessToken){
		try {
			await AsyncStorage.setItem(ACCESS_TOKEN, accessToken);
			Api.getToken(ACCESS_TOKEN);
		} catch (error) {
			console.log("something went wrong store token")
		}
	}

	async removeToken(){
		try {
			await AsyncStorage.removeItem(ACCESS_TOKEN);
			Api.getToken(ACCESS_TOKEN);
		} catch (error) {
			console.log("something went wrong remove token")
		}
	}

	async onLoginPressed(){
		try {
			let response = await fetch('http://doit.unicrow.com/api-auth/login/',{
				method: 'POST',
				headers: {
					'Accept': 'application/json',
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					  email: this.state.email,
			          password: this.state.password,
				})
			});
			let res = await response.text();
			if(response.status >= 200 && response.status < 300) {
				this.setState({ error: "" });
				let accessToken = res;
				this.storeToken(accessToken);
				console.log("res token: " + accessToken);
                this.setState({ token: accessToken })
				this.redirect('Tasks');
			}
			else {
				let error = res;
				throw error;
			}
		}catch(error){
			this.removeToken();
			this.setState({ error: error });
			console.log("error" + error);
		}
	}
    render(){
        return(

            <View style={{ backgroundColor:'white', flex:1, alignItems:'center' }}>
                <StatusBar backgroundColor='#7200da' />
                <View>
                    <Text style={{ fontFamily:'SFProDisplay', paddingTop:50, fontSize:72, fontWeight:'900', color:'#fb684b' }}> doit </Text>
                </View>
                <View>
                    <Form style={{ marginTop:84 }}>

                        <Item floatingLabel style={{marginLeft: 0, borderWidth:.5, width:311, paddingHorizontal:32, borderColor:'#7200da'}}>
                            <Label style={{ color:'#9b9b9b', alignSelf:'center', fontSize:16 }}>E-Posta Adresi</Label>
                            <Input onChangeText={ (text) =>
                                            this.setState({ email: text }) }
                                   keyboardType={'email-address'}/>
                        </Item>

                        <Item floatingLabel style={{marginLeft: 0, borderWidth:.5, marginTop: 12,  borderColor:'#7200da'}}>
                            <Label style={{ color:'#9b9b9b', alignSelf:'center', fontSize:16 }}>Şifre</Label>
                            <Input onChangeText={ (text) =>
                                            this.setState({ password: text }) }
                                   secureTextEntry={true}/>
                        </Item>


                        <Button transparent style={{ paddingHorizontal: 0, alignSelf: 'flex-end', marginTop: 10 }}>
                            <Text
                                style={{ color:'#9b9b9b', fontSize:13 }}>
                                Şifremi unuttum
                            </Text>
                        </Button>
                        <Button
                            full
                            onPress={ this.onLoginPressed.bind(this) }
                            style={{ backgroundColor:'white', borderRadius: 25, marginTop: 160, borderColor:'#7200da', borderWidth:1 }}>
                            <Text style={{ color:'#7200da', fontWeight: '600', fontSize: 15, }}>Giriş Yap</Text>
                        </Button>

                    </Form>
                </View>
            </View>
        );
    }
}
