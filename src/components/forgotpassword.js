import React, { Component } from 'react';

import {
	View,
	Text,
	StatusBar,
	Image,
	TextInput
} from 'react-native';

import {
	Header, Left,
	Form, Item, Label, Input,
	Button
} from 'native-base';

import Icon from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons
                    from 'react-native-vector-icons/MaterialCommunityIcons';

export default class ForgotPassword extends Component {
	render(){
		return(
			<View style={{ flex:1, backgroundColor:'white' }}>
				<Header noShadow style={{ borderBottomColor:'white',
			 					 backgroundColor:'white'}}>
					<StatusBar backgroundColor={'#7200da'} />
					<Left>
						<Icon onPress={() => goBack()}
							  name='keyboard-backspace' size={30}
							  style={{ color:'#7200da' }} />
					</Left>
				</Header>
				<View style={{ alignItems:'center' }}>
                    <Image source={require('../img/logo.png')}
                           style={{ width:112, height:87 }} />
                </View>
				<Form style={{ paddingHorizontal:32, marginTop:54 }}>
					<Item floatingLabel
						  style={{ marginTop:0, marginLeft: 0,
								   borderWidth:1,
								   paddingHorizontal:32,
								   borderColor:'#7200da' }}>
						<Label style={{ color:'#9b9b9b', alignSelf:'center',
										fontSize:16 }}>
							E-Posta
						</Label>
						<Input />
					</Item>
					<Button
						full
						style={{ backgroundColor:'white',
								 height:44,
								 borderRadius: 60, marginTop: 65,
								 borderColor:'#7200da', borderWidth:1 }}>
						<Text style={{ color:'#7200da',
							  fontSize: 20 }}>
							Gönder
						</Text>
					</Button>
				</Form>
			</View>
		);
	}
}
