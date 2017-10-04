import React, { Component } from 'react';

import {
    View,
    Text,
    StatusBar,
    Image
} from 'react-native';

import {
    Button,
    Icon,
    Item,
    Form,
    Label,
    Input,
	Header, Left, Body, Right
} from 'native-base';

import Api from '../config/api';

import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

export default class Register extends Component{

    constructor(){
        super();

        this.state = {
            email: "",
            firstName: "",
            lastName:"",
            password: "",
            password_confirmation: "",
            errors: [],
            showProgress: false,
        }
    }

    redirect(routeName){
        this.props.navigation.navigate(routeName);
    }

    async onRegisterPressed() {
        this.setState({showProgress: true})
        try {
            let response=await fetch('http://doit.unicrow.com/api/v1/users/', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: this.state.email,
                    first_name: this.state.firstName,
                    last_name:this.state.lastName,
                    password: this.state.password
                })
            });
            let res = await response.text();
            if (response.status >= 200 && response.status < 300) {
                let accessToken = res;
                console.log(accessToken);
                Api.storeToken(accessToken);
                this.redirect('Login');
            } else {
                let error = res;
                throw error;
            }
        } catch(errors) {
            let formErrors = JSON.parse(errors);
            let errorsArray = [];
            for(var key in formErrors) {
                if(formErrors[key].length > 1) {
                    formErrors[key].map(error =>
                        errorsArray.push(`${key} ${error}`));
                } else {
                    errorsArray.push(`${key} ${formErrors[key]}`);
                }
            }
            this.setState({errors: errorsArray})
            this.setState({showProgress: false});
        }
    }

    render(){
		const {goBack} = this.props.navigation;
        return(
            <View style={{ backgroundColor:'white', flex:1 }}>
				<Header noShadow style={{ borderBottomColor:'white',
   			 					          backgroundColor:'white'}}>
   					<StatusBar backgroundColor={'#7200da'} />
   					<Left>
   						<MaterialIcon onPress={() => goBack()}
   							  		  name='keyboard-backspace' size={30}
   							  		  style={{ color:'#7200da' }} />
   					</Left>
                    <Body></Body>
                    <Right></Right>
   				</Header>
                <View style={{ alignItems:'center' }}>
                    <Image source={require('../img/logo.png')}
                           style={{ width:112, height:87 }} />
                </View>
                <View>
                    <Form style={{ marginTop:54, alignItems:'center',
					               paddingHorizontal:32, }}>
                        <Item floatingLabel
                              style={{ marginTop:0, marginLeft: 0,
                                       borderWidth:.5, width:311,
                                       borderColor:'#7200da'}}>
                            <Label style={{ color:'#9b9b9b', alignSelf:'center',
                                            fontSize:16 }}>
                                İsim
                            </Label>
                            <Input keyboardType={'email-address'}
                   onChangeText={ (text)=> this.setState({firstName: text}) }/>
                        </Item>

                        <Item floatingLabel
                              style={{marginLeft: 0, borderWidth:.5,
                                      marginTop: 4,  borderColor:'#7200da'}}>
                            <Label style={{ color:'#9b9b9b', alignSelf:'center',
                                            fontSize:16 }}>
                                Soyisim
                            </Label>
                            <Input
                    onChangeText={ (text)=> this.setState({lastName: text}) }/>
                        </Item>
                        <Item floatingLabel
                              style={{ marginLeft: 0, borderWidth:.5, width:311,
                                       marginTop: 4, paddingHorizontal:32,
                                       borderColor:'#7200da'}}>
                            <Label style={{ color:'#9b9b9b', alignSelf:'center',
                                            fontSize:16 }}>
                                E-Posta Adresi
                            </Label>
                            <Input keyboardType={'email-address'}
                       onChangeText={ (text)=> this.setState({email: text}) }/>
                        </Item>

                        <Item floatingLabel
                              style={{marginLeft: 0, borderWidth:.5,
                                      marginTop: 4,  borderColor:'#7200da'}}>
                            <Label style={{ color:'#9b9b9b', alignSelf:'center',
                                            fontSize:16 }}>
                                Şifre
                            </Label>
                            <Input secureTextEntry={true}
                    onChangeText={ (text)=> this.setState({password: text}) }/>
                        </Item>
                        <Item floatingLabel
                              style={{ marginLeft: 0, borderWidth:.5,
                                      marginTop: 4,  borderColor:'#7200da' }}>
                            <Label style={{ color:'#9b9b9b', alignSelf:'center',
                                            fontSize:16 }}>
                                Şifre Tekrarı
                            </Label>
                            <Input secureTextEntry={true}
       onChangeText={ (text)=> this.setState({password_confirmation: text}) }/>
                        </Item>
                        <Button
                            onPress={ this.onRegisterPressed.bind(this) }
                            full
                            style={{ backgroundColor:'white',
                                     borderRadius: 25, marginTop: 65,
                                     borderColor:'#7200da', borderWidth:1 }}>
                            <Text style={{ color:'#7200da',
                                  fontSize: 20 }}>
                                Tamamla
                            </Text>
                        </Button>
                    </Form>
                </View>
            </View>
        );
    }
}
