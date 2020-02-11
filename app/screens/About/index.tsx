import React from "react";
import {Button, Text, View} from "react-native";
import {StackNavigationProp} from "@react-navigation/stack";
import {RouteProp} from "@react-navigation/native";

import styles from './style';

type Props = {
    navigation: StackNavigationProp<RootStackParamList, 'About'>;
    route: RouteProp<RootStackParamList, 'About'>;
}

const About = ({ navigation }: Props) => {
    return (
        <View style={styles.container}>
            <Text>About screen</Text>
            <Button onPress={() => navigation.popToTop()} title="Go to Home" />
        </View>
    );
}

export default About;