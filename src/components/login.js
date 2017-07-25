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

const ACCESS_TOKEN = 'auth_token';

export default class Login extends Component{

  redirect(routeName){
    this.props.navigation.navigate(routeName);
  }

    constructor(){
		    super();

		    this.state = {
    			email: "",
    			password: "",
    			error: ""
		    }
	}

	async storeToken(accessToken){
		try {
			await AsyncStorage.setItem(ACCESS_TOKEN, accessToken);
			this.getToken();
		} catch (error) {
			console.log("something went wrong")
		}
	}

	async getToken(){
		try {
			let token = await AsyncStorage.getItem(ACCESS_TOKEN);
			console.log("token is: " + token);
		} catch (error) {
			console.log("something went wrong")
		}
	}

	async removeToken(){
		try {
			await AsyncStorage.removeItem(ACCESS_TOKEN);
			this.getToken();
		} catch (error) {
			console.log("something went wrong")
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
    							       secureTextEntry={true}/>
    						</Item>


    						<Button transparent style={{ paddingHorizontal: 0, alignSelf: 'flex-end', marginTop: 16 }}>
    							<Text
    								style={{ color:'blue' }}>
    								Şifreni mi Unuttun?
    							</Text>
    						</Button>

                <Button
                    onPress={ this.onLoginPressed.bind(this) }
      							style={{ backgroundColor:'blue', borderRadius: 3, marginTop: 24 }}>
    							  <Text style={{ color:'white', fontWeight: '600', fontSize: 15, }}>Giriş Yap</Text>
    					 	</Button>

    					</Form>
                    </View>
            </View>
        );
    }
}
