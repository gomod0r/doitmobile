import React from 'react';
import { StackNavigator, DrawerNavigator } from 'react-navigation';

import Tasks from '../components/tasks';
import Login from '../components/login';
import Add from '../components/add';
import Register from '../components/register';
import Task from '../components/task';

export const LoginStack = StackNavigator({
    Task:{
        screen: Task
    },
    Tasks:{
        screen: Tasks
    }
},
{
    headerMode: 'none'
})
