import React from 'react';
import { StackNavigator, DrawerNavigator } from 'react-navigation';

import Login from '../components/login';
import Add from '../components/add';
import Register from '../components/register';
import Task from '../components/task';
import TaskDetail from '../components/taskdetail';

export const LoginStack = StackNavigator({
    Task:{
        screen: Task
    },
    Login:{
        screen: Login
    },
    TaskDetail:{
        screen: TaskDetail
    },
},
{
    headerMode: 'none'
})
