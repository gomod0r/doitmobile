import React from 'react';
import { StackNavigator } from 'react-navigation';

import Tasks from '../components/tasks';

export const TaskStack = StackNavigator({
    Tasks:{
        screen: Tasks
    }
});
