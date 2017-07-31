import React from 'react';
import { StackNavigator } from 'react-navigation';

import Tasks from '../components/tasks';
import Login from '../components/login';
import Add from '../components/add';

export const LoginStack = StackNavigator({
    Add:{
        screen: Add
    },
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
