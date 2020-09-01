import React, { useState } from 'react'
import { View, StyleSheet} from 'react-native';

import NewsScreen from './NewsScreen';
import BottomNavBar from '../components/BottomNavBar';
import SettingsScreen from './SettingsScreen';
import Screens from "../config/Screens"

const MainScreen = ({ navigation }) => {
    const [screen, setScreen] = useState(Screens.news);

    return (
        <View style={styles.container}>
            {screen == Screens.news? <NewsScreen navigation={navigation}/> : null}
            {screen == Screens.settings? <SettingsScreen/> : null}
            <BottomNavBar setScreen={setScreen}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "flex-end",
    }
});

export default MainScreen;