import React from 'react';
import { StackNavigator, DrawerNavigator } from 'react-navigation';

import Login from '../pages/login';
import Register from '../pages/register';
import ForgotPassword from '../pages/forgot-password';
import TaskList from '../pages/task-list';
import Drawer from '../pages/drawer';
import Add from '../pages/add';
import TaskDetail from '../pages/task-detail';
import Settings from '../pages/settings';
import UserInfo from '../pages/user-info';
import ChangePassword from '../pages/change-password';
import EmptyTask from '../pages/empty-task';

export const LoginStack = StackNavigator({
    Login:{
        screen: Login
    },
    Register:{
        screen: Register
    },
	ForgotPassword:{
		screen: ForgotPassword
	}
},
{
    headerMode: 'none'
});

export const TaskStack = StackNavigator({
    Task:{
        screen: TaskList
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
