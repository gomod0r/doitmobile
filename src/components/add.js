import React, { Component } from 'react';

import {
    View,
    Text,
    Platform,
    StatusBar,
    TouchableOpacity,
    StyleSheet,
    TextInput,
    TouchableHighlight
} from 'react-native';

import {
    Header, Left, Body, Right,
    Title,
    Grid, Row, Col,
    Button
} from 'native-base';

import Icon from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default class Add extends Component {
    render(){
        return(
            <View style={{ backgroundColor:'white', flex:1 }}>
                <Header noShadow
                        style={{paddingLeft:(Platform.OS === 'android') ? 0 : 16,
                                backgroundColor:'white', alignItems:'center',
                                justifyContent:'center',
                                borderBottomColor:'transparent',
                                paddingLeft:0, paddingRight:0 }}>
                    <StatusBar backgroundColor='blue'/>
                    <Left>
                        <TouchableOpacity>
                            <MaterialCommunityIcons name="calendar"
                                                    style={{fontSize:24,
                                                            color: 'blue'}}/>
                        </TouchableOpacity>
                    </Left>
                    <Body style={{ alignItems:'center', justifyContent:'center' }}>
                        <Title style={{ fontSize:12, fontWeight:'bold',
                                        color:'blue' }}>
                            EKLE
                        </Title>
                    </Body>
                    <Right>
                        <TouchableOpacity>
                            <Icon name="done" style={{fontSize:24,
                                                      color: 'blue'}}/>
                        </TouchableOpacity>
                    </Right>
                </Header>

                <Grid>
                    <Col style={{ flex:1, alignItems:'stretch' }}>
                        <TextInput placeholder="Görev Başlığını Yazınız.."
                                   style={{ marginHorizontal:16, marginTop: 0,
                                   marginBottom:8, alignItems:'center' ,
                                   borderBottomColor:'white', fontSize:18,
                                   fontWeight:'300', textAlignVertical:'top',
                                   height:50 }}
       							   underlineColorAndroid='blue'
                                   placeholderTextColor='rgba(51,51,51,0.4)'>
                        </TextInput>
						<TextInput
							multiline={true}
							style={{ marginHorizontal:16, marginTop: 0,
                                     marginBottom:8, alignItems:'center',
                                     borderBottomColor:'white', fontSize:18,
                                     fontWeight:'300', flex:1,
                                     textAlignVertical:'top' }}
							placeholder="Görev Açıklamasını Yazınız.."
							placeholderTextColor='rgba(51,51,51,0.4)'
                            underlineColorAndroid='blue'>
						</TextInput>
					</Col>


				</Grid>

            </View>
        );
    }
}

const styles = StyleSheet.create({
	styleFeed:{
		fontSize:26,
		color:'blue'
	},
	other:{
		fontSize:26,
		color:'#9B9B9B'
	},
	propertiesRow: {
		height:56,
		paddingRight:8,
		alignItems:'center',
		flexDirection:'row',
		borderTopColor:'#d7d7d7',
		borderTopWidth:1,
		paddingLeft: 16,
		flex:1
	},
	propertiesValue: {
		width: 140
	}

})
