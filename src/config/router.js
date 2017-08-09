import React from 'react';
import { StackNavigator, DrawerNavigator } from 'react-navigation';

import Tasks from '../components/tasks';
import Login from '../components/login';
import Add from '../components/add';
import Register from '../components/register';
import Task from '../components/task';

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
