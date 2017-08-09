import { AsyncStorage } from 'react-native';

var api = {

    async getToken(accessToken){
        try {
            let token = await AsyncStorage.getItem(accessToken);
            console.log("getToken: " + JSON.parse(token).auth_token);
        } catch (error) {
            console.log("something went wrong gettoken")
        }
    },

    getTasks(){
        var url = "http://doit.unicrow.com/api/v1/tasks/";
        return fetch(url, {
			method: 'GET',
			headers: {
				'Authorization':
                            'Token 48e2d3d4a8ade5cee7d12b9d442eef9657dc062b'
			}
        }).then(response => response.json())
    }
}

module.exports = api;
