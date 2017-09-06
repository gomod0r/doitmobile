import React from 'react';
import { StackNavigator, DrawerNavigator } from 'react-navigation';

import Login from '../components/login';
import Register from '../components/register';
import Task from '../components/task';
import TaskDetail from '../components/taskdetail';
import Settings from '../components/settings';
import ChangePassword from '../components/changepassword';
import UserInfo from '../components/userinfo';
import Drawer from '../components/drawer';
import Add from '../components/add';
import EmptyTask from '../components/emptytask'

export const LoginStack = StackNavigator({
    Login:{
        screen: Login
    },
    Register:{
        screen: Register
    }
},
{
    headerMode: 'none'
});

export const TaskStack = StackNavigator({
    Task:{
        screen: EmptyTask
    },
    Add:{
        screen: Add
    },
    TaskDetail:{
        screen: TaskDetail
    }
},
{
    headerMode: 'none'
});

export const DrawerMenu = DrawerNavigator({
    Task:{
        screen: TaskStack
    },
    Settings:{
        screen: Settings
    }
},
{
    drawerWidth:300,
    drawerPosition:'left',
    contentComponent: props => <Drawer {...props} />
}
);

export const Main = StackNavigator({
    Login:{
        screen: LoginStack
    },
    DrawerMenu:{
        screen: DrawerMenu
    },
    UserInfo:{
        screen: UserInfo
    },
    ChangePassword:{
        screen: ChangePassword
    }
},
{
    headerMode: 'none'
});
