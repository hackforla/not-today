import React from "react";
import {Button, Text, View} from "react-native";
import {StackNavigationProp} from "@react-navigation/stack";
import {RouteProp} from "@react-navigation/native";

import styles from './style';

type Props = {
    navigation: StackNavigationProp<RootStackParamList, 'Home'>;
    route: RouteProp<RootStackParamList, 'Home'>;
}

const Home = ({ navigation }: Props) => {
    return (
        <View style={styles.container}>
            <Text>Home screen</Text>
            <Button onPress={() => navigation.push('About')} title="Go to About" />
        </View>
    );
}

export default Home;