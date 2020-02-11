import {Component, default as React} from "react";
import {Button, Text, View} from "react-native";
import {createStackNavigator} from "@react-navigation/stack";

const Stack = createStackNavigator();

export class EditContentScreenNavigator extends Component {
    render() {
        return (
            <Stack.Navigator>
                <Stack.Screen name="Edit Content" component={EditContentScreen}/>
            </Stack.Navigator>
        )
    }
}

class EditContentScreen extends Component {

    render() {
        return (
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Text>Edit Content</Text>
                <Button title="Open drawer" onPress={() => this.props.navigation.openDrawer()}/>
                <Button title="Toggle drawer" onPress={() => this.props.navigation.toggleDrawer()}/>
            </View>
        );
    }
}
