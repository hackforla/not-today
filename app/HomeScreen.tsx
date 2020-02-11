import {Component, default as React} from "react";
import {Button, Text, View} from "react-native";
import {createStackNavigator} from "@react-navigation/stack";

const Stack = createStackNavigator();

export class HomeScreenNavigator extends Component {
    render() {
        return (
            <Stack.Navigator>
                <Stack.Screen name="Home" component={HomeScreen}/>
            </Stack.Navigator>
        )
    }
}

class HomeScreen extends Component {

    render() {
        return (
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Text>Home</Text>
                <Button title="Open drawer" onPress={() => this.props.navigation.openDrawer()}/>
                <Button title="Toggle drawer" onPress={() => this.props.navigation.toggleDrawer()}/>
            </View>
        );
    }
}
