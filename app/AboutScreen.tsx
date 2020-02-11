import {Component, default as React} from "react";
import {Button, Text, View} from "react-native";
import {createStackNavigator} from "@react-navigation/stack";
import {EditContentScreen} from "./EditContentScreen";

const Stack = createStackNavigator();

export class AboutScreenNavigator extends Component {
    render() {
        return (
            <Stack.Navigator>
                <Stack.Screen name="About" component={AboutScreen}/>
            </Stack.Navigator>
        )
    }
}

class AboutScreen extends Component {

    static navigationOptions = {
        title: 'About',
    };

    render() {
        return (
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Text>About</Text>
                <Button title="Open drawer" onPress={() => this.props.navigation.openDrawer()}/>
                <Button title="Toggle drawer" onPress={() => this.props.navigation.toggleDrawer()}/>
            </View>
        );
    }
}

