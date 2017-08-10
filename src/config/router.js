import React from 'react';
import { StackNavigator, DrawerNavigator } from 'react-navigation';

import Login from '../components/login';
import Add from '../components/add';
import Register from '../components/register';
import Task from '../components/task'

export const LoginStack = StackNavigator({
    Login:{
        screen: Login
    },
    Task:{
        screen: Task
    }
},
{
    headerMode: 'none'
})
