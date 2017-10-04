import { AsyncStorage } from 'react-native';

const ACCESS_TOKEN = 'auth_token';

export default class Api {
    constructor() {
    }

     static errorHandler(error) {
        console.log("something went wrong store token");
        throw error;
    }

    static async storeToken(accessToken){
        try {
            await AsyncStorage.setItem(ACCESS_TOKEN, accessToken);
            return true;
        } catch (error) {
            this.errorHandler(error);
        }
    };

    static async removeToken(){
        try {
            await AsyncStorage.removeItem(ACCESS_TOKEN);
            return true;
        } catch (error) {
            this.errorHandler(error);
        }
    }

    static async getToken(){
        try {
            let token = await AsyncStorage.getItem(ACCESS_TOKEN);
            return token;
        } catch (error) {
            this.errorHandler(error);
        }
    }

    static async getHeaders(){
        let token = await this.getToken();
        console.log('token geldi mı ?' + token);
        return { 'Authorization': `Token ${token}` }
    }

    static async request(url , options){
        options.headers = await this.getHeaders();
        return fetch(url, options)
        .then(response => response.json())
    }

}
