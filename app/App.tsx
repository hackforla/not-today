import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {default as Home} from "./screens/Home";
import {default as About} from "./screens/About";

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