import React from 'react';
import {Platform} from 'react-native';
import {HeaderButton} from "react-navigation-header-buttons";
import { FontAwesome5 } from '@expo/vector-icons';

export const AppHeaderIcon = (props) => (
    <HeaderButton
        {...props}
        iconSize={24}
        IconComponent={FontAwesome5}/>
)



