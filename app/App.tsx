import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from "./screens/Home";
import About from "./screens/About";

const RootStack = createStackNavigator<RootStackParamList>();

const App = () => {
    return (
        <NavigationContainer>
            <RootStack.Navigator initialRouteName="Home">
                <RootStack.Screen name="Home" component={Home}/>
                <RootStack.Screen name="About" component={About}/>
            </RootStack.Navigator>
        </NavigationContainer>
    );
}

export default App;