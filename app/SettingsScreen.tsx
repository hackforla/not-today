import {Component, default as React} from "react";
import {Button, Text, View} from "react-native";
import {createStackNavigator} from "@react-navigation/stack";

const Stack = createStackNavigator();

export class SettingsScreenNavigator extends Component {
    render() {
        return (
            <Stack.Navigator>
                <Stack.Screen name="Settings" component={SettingsScreen}/>
            </Stack.Navigator>
        )
    }
}

class SettingsScreen extends Component {

    static navigationOptions = {
        title: 'Settings',
    };

    render() {
        return (
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Text>Settings</Text>
                <Button title="Open drawer" onPress={() => this.props.navigation.openDrawer()}/>
                <Button title="Toggle drawer" onPress={() => this.props.navigation.toggleDrawer()}/>
            </View>
        );
    }
}
