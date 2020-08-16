import React from 'react';
import {NavigationContainer} from "@react-navigation/native";
import {AppNavigation} from "./src/AppNavigation";
import {Provider} from 'react-redux';
import store from './src/store';


export default function App() {
    return (
        <Provider store={store}>
            <NavigationContainer>
                <AppNavigation/>
            </NavigationContainer>
        </Provider>
    );
}