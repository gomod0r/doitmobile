import React from 'react';
import { StackNavigator } from 'react-navigation';

import Tasks from '../components/tasks';
import Login from '../components/login';

export const LoginStack = StackNavigator({
    Login:{
        screen: Login
    },
    Tasks:{
        screen: Tasks
    }
},
{
    headerMode: 'none'
})
