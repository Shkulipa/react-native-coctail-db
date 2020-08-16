import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

import {MainScreen} from "./MainScreen";
import {FilterScreen} from "./FilterScreen";

const Stack = createStackNavigator();

export const AppNavigation = () => {
    return (
        <Stack.Navigator
            initialRouteName="Drinks">
            <Stack.Screen name={'Drinks'}
                          component={MainScreen}/>
            <Stack.Screen name="Filters"
                          component={FilterScreen}/>
        </Stack.Navigator>
    );
}