import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {Component} from "react";
import {HomeScreen, HomeScreenNavigator} from "./HomeScreen";
import {EditContentScreen, EditContentScreenNavigator} from "./EditContentScreen";
import {AboutScreen, AboutScreenNavigator} from "./AboutScreen";
import {SettingsScreen, SettingsScreenNavigator} from "./SettingsScreen";

const Drawer = createDrawerNavigator();

class MainDrawerNavigation extends Component {
    render() {
        return (
            <Drawer.Navigator>
                <Drawer.Screen name="Home" component={HomeScreenNavigator}/>
                <Drawer.Screen name="Edit Content" component={EditContentScreenNavigator}/>
                <Drawer.Screen name="Settings" component={SettingsScreenNavigator}/>
                <Drawer.Screen name="About" component={AboutScreenNavigator}/>
            </Drawer.Navigator>
        );
    }
}

export default function App() {
    return (
        <NavigationContainer>
            <MainDrawerNavigation/>
        </NavigationContainer>
    );
}
