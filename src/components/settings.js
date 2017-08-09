import React, { Component } from 'react';

import {
    View,
    Text
} from 'react-native';

import {

} from 'native-base';

export default class Settings extends Component {
    render(){
        return(
            <View style={{ alignItems:'center', justifyContent:'center' }}>
                <Text>Burası Settings Sayfası</Text>
            </View>
        );
    }
}
