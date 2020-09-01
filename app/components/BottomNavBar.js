import React from 'react'
import { View, Text, StyleSheet, TouchableWithoutFeedback} from 'react-native';

import Colors from "../config/Colors"
import Screens from "../config/Screens"

const BottomNavBar = ({setScreen}) => {
    const onNewsClick = () => {
        setScreen(Screens.news);
    };
    const onSettingsClick = () => {
        setScreen(Screens.settings);
    };

    return (
        <View style={styles.container}>
            <TouchableWithoutFeedback onPress={onNewsClick} style={styles.buttons}>
                <View style={styles.buttons}><Text>News</Text></View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback style={styles.buttons} onPress={onSettingsClick}>
                <View  style={styles.buttons}><Text>Settings</Text></View>
            </TouchableWithoutFeedback>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: 50,
        width: "100%",
        backgroundColor: "#fff",
        justifyContent: "space-around",
        flexDirection: "row",
        alignItems: "center"
    },
    buttons: {
        flex: 1,
        height: "100%",
        alignItems: "center",
        justifyContent: "center"
    }
});

export default BottomNavBar;