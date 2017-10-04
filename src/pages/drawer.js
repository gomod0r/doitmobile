import React, { Component } from 'react';

import{
    View,
    Text,
    Image,
    StatusBar
} from 'react-native';

import{

} from 'native-base';

import Icon from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons
                    from 'react-native-vector-icons/MaterialCommunityIcons';

export default class Drawer extends Component{
    render(){
        return(
            <View style={{ flex:1, backgroundColor:'white' }}>
                <View style={{ marginTop:37, height:180, alignItems:'center',
                               borderBottomWidth:2,
                               borderBottomColor:'#d8d8d8' }}>
                    <Image source={require('../img/profile.png')}
                           style={{ width:114, height:114,
                                    borderRadius:57 }} />
                    <Text style={{ marginTop:23, fontSize:25,
                                   color:'#000000' }}>
                        Hakan Şahin
                    </Text>
                </View>
                <View style={{ flex:1, alignItems:'center', marginTop:30 }}>
                    <View style={{ flexDirection:'row', alignItems:'center' }}>
                        <Icon name='settings' size={30}
                              style={{ color:'#7200da' }} />
                        <Text onPress={()=>
                                this.props.navigation.navigate('Settings')}
                              style={{ color:'#000000', fontSize:25,
                                     marginLeft:10 }}>
                            Ayarlar
                        </Text>
                    </View>
                </View>
                <View style={{ flexDirection:'row', alignItems:'center',
                               alignSelf:'center', marginBottom:39 }}>
                    <Icon name='exit-to-app' size={25}
                          style={{ color:'#d0011b' }} />
                    <Text style={{ color:'#d0011b', fontSize:25,
                                     marginLeft:10 }}>
                        Çıkış
                    </Text>
                </View>
            </View>
        );
    }
}
