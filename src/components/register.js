import React, { Component } from 'react';

import {
    View,
    Text,
    StatusBar
} from 'react-native';

import {
    Button,
    Icon,
    Item,
    Form,
    Label,
    Input
} from 'native-base';

export default class Register extends Component{
    render(){
        return(
            <View style={{ backgroundColor:'white', flex:1, alignItems:'center' }}>
                <StatusBar backgroundColor='#7200da' />
                <View>
                    <Text style={{ fontFamily:'SFProDisplay', paddingTop:50, fontSize:72, fontWeight:'900', color:'#fb684b' }}> doit </Text>
                </View>
                <View>
                    <Form style={{ marginTop:59 }}>
                        <Item floatingLabel style={{ marginTop:0, marginLeft: 0, borderWidth:.5, width:311, paddingHorizontal:32, borderColor:'#7200da'}}>
                            <Label style={{ color:'#9b9b9b', alignSelf:'center', fontSize:16 }}>İsim</Label>
                            <Input keyboardType={'email-address'}/>
                        </Item>

                        <Item floatingLabel style={{marginLeft: 0, borderWidth:.5, marginTop: 4,  borderColor:'#7200da'}}>
                            <Label style={{ color:'#9b9b9b', alignSelf:'center', fontSize:16 }}>Soyisim</Label>
                            <Input secureTextEntry={true}/>
                        </Item>
                        <Item floatingLabel style={{marginLeft: 0, borderWidth:.5, width:311, marginTop: 4, paddingHorizontal:32, borderColor:'#7200da'}}>
                            <Label style={{ color:'#9b9b9b', alignSelf:'center', fontSize:16 }}>E-Posta Adresi</Label>
                            <Input keyboardType={'email-address'}/>
                        </Item>

                        <Item floatingLabel style={{marginLeft: 0, borderWidth:.5, marginTop: 4,  borderColor:'#7200da'}}>
                            <Label style={{ color:'#9b9b9b', alignSelf:'center', fontSize:16 }}>Şifre</Label>
                            <Input secureTextEntry={true}/>
                        </Item>
                        <Item floatingLabel style={{marginLeft: 0, borderWidth:.5, marginTop: 4,  borderColor:'#7200da'}}>
                            <Label style={{ color:'#9b9b9b', alignSelf:'center', fontSize:16 }}>Şifre Tekrarı</Label>
                            <Input secureTextEntry={true}/>
                        </Item>
                        <Button
                            full
                            style={{ backgroundColor:'#7200da', borderRadius: 25, marginTop: 65, borderColor:'#7200da', borderWidth:1 }}>
                            <Text style={{ color:'white', fontWeight: '600', fontSize: 15, }}>Tamamla</Text>
                        </Button>

                    </Form>
                </View>
            </View>
        );
    }
}
