import React, { Component } from 'react';

import {
    View,
    Text,
    StatusBar,
    TouchableHighlight,
    ListView,
    RefreshControl,
    StyleSheet,
    ActivityIndicator
} from 'react-native';

import {
    Header, Left, Body, Right,
    Title,
    Button,
    Footer, FooterTab,
    Content,
    Fab,
    Card, CardItem
} from 'native-base';

import Icon from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

var taskArray = [];

export default class Tasks extends Component {

    redirect(routeName){
        this.props.navigation.navigate(routeName);
    }

    constructor(props){
        super(props);
        var dataSource = new ListView.DataSource({rowHasChanged:(r1,r2) => r1 != r2});
        this.state = {
            dataSource: dataSource.cloneWithRows(taskArray),
            isLoading: true
        }
    }

    componentDidMount(){
        this.getTheData((json)=>{
                console.log("json burda" , json);
            taskArray = json;
            this.setState({
                datasource:this.state.dataSource.cloneWithRows(taskArray),
                isLoading:false
            });
            console.log("array", taskArray);
            console.log("data", this.state.dataSource)
        });
    }

    getTheData(callback) {
        var url = "http://doit.unicrow.com/api/v1/tasks/";
        fetch(url, {
			method: 'GET',
			headers: {
				'Authorization': 'Token 1519b244b7a86e71d7a09971ef32e75cfa987ad6',
                'Accept': 'application/json',
                'Content-Type': 'application/json',
			}
        })
            .then(response => response.json())
            .then(json => callback(json))
            .catch(error => console.log(error));
            console.log('burda mısın?');
    }

    _renderRow(row) {
    	return (
            <Card>
                <CardItem>
                    <Body style={{ flexDirection:'row', alignItems:'center' }}>
                        <Text> { row.title } </Text>
                    </Body>
                    <Right>
                        <Icon name='cancel' />
                    </Right>
                </CardItem>
            </Card>
    	)
    }

    render(){
        return(
            <View style={{ backgroundColor:'white', flex:1 }}>
                <View>
                    <Header noShadow style={{ backgroundColor:'white',
                                              borderBottomColor:'blue',
                                              borderBottomWidth:1,
                                              alignItems:'stretch' }}>
                        <StatusBar backgroundColor='blue' />
                        <Left>
                            <TouchableHighlight
                                style={{ backgroundColor:'white' }}>
                                <MaterialCommunityIcons name='bell-ring-outline'
                                                        style={{ color:'blue',
                                                            fontSize:15 }} />
                            </TouchableHighlight>
                        </Left>
                        <Body style={{ alignItems:'center',
                                       justifyContent:'center' }}>
                            <Text style={{ color:'blue',fontSize:15 ,
                                           fontWeight:'bold' }}>
                                GÖREVLER
                            </Text>
                        </Body>
                        <Right>
                            <TouchableHighlight
                                style={{ backgroundColor:'white' }}>
                                <Icon name='more-vert'
                                      style={{ color:'blue', fontSize:15,
                                               fontWeight:'bold' }} />
                            </TouchableHighlight>
                        </Right>
                    </Header>
                </View>
                <Text>{this.state.isLoading}</Text>
                <Content style={{ paddingHorizontal:5 }}>
                  <ListView
                    dataSource={ this.state.dataSource }
                    renderRow={ row => this._renderRow(row) }
                    enableEmptySections={true}
        		  />
                </Content>
                <View>
                    <Fab
                        style={{ backgroundColor: 'blue' }}
                        position="bottomRight"
                        onPress={ this.redirect('Add') }
                    >
                        <MaterialCommunityIcons name='plus' />
                    </Fab>
                </View>
                <Footer style={{ height:49 }}>
                    <FooterTab style={{ backgroundColor:'white',
                                        borderTopColor:'blue',
                                        borderTopWidth:1 }}>
                        <Button>
                            <MaterialCommunityIcons name='bookmark-outline'
                                                    style={{ fontSize:26,
                                                             color:'blue' }}/>
                            <Text style={{ fontSize:10, color:'blue' }}>
                                Görevler
                            </Text>
                        </Button>
                        <Button>
                            <MaterialCommunityIcons name='calendar'
                                                    style={{ fontSize:26 }}/>
                            <Text style={{ fontSize:10 }}>
                                Takvim
                            </Text>
                        </Button>
                        <Button>
                            <MaterialCommunityIcons name='settings'
                                                    style={{ fontSize:26 }}/>
                            <Text style={{ fontSize:10 }}>
                                Ayarlar
                            </Text>
                        </Button>
                    </FooterTab>
                </Footer>
            </View>
        );
    }
}

const styles = StyleSheet.create({
	styleFeed:{
		fontSize:26,
		color:'#50D688'
	},
	other:{
		fontSize:26,
		color:'#9B9B9B'
	},
	container: {
		flex: 1,
		marginTop: 20,
		backgroundColor: '#F5FCFF'
	},
	loading: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		paddingVertical: 10
	},
	row: {
		paddingHorizontal: 10,
		paddingVertical: 15
	}
})
