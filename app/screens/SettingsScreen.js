import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet} from 'react-native';

import {Picker} from '@react-native-community/picker';
import AsyncStorage from "@react-native-community/async-storage"

import Languages from "../config/Languages"
import Settings from "../config/Settings"

const SettingsScreen = () => {
    const [currentLanguageCode, setCurrentLanguageCode] = useState(Settings.language_code_default);

    const getLanguageItems = () => {
        return Object.keys(Languages).map((key) => {
            return (<Picker.Item label={Languages[key]} value={key} key={key}/>)
        });
    };

    const getCurrentLanguageCode = async () => {
        let language_code = await AsyncStorage.getItem(Settings.language_code);
        if (language_code === null)
        {
            language_code = Settings.language_code_default;
            await AsyncStorage.setItem(Settings.language_code, language_code)
        }

        setCurrentLanguageCode(language_code);
    }

    const onLanguageSelect = async (itemValue, itemIndex) => {
        setCurrentLanguageCode(itemValue);
        await AsyncStorage.setItem(Settings.language_code, itemValue);
    };

    useEffect(() => {
        getCurrentLanguageCode();
    }, []);

    return (
        <View style={styles.container}>
            <View style={styles.setting}>
                <View style={styles.settingTextView}>
                    <Text style={styles.settingText}>Language</Text>
                </View>
                <View style={styles.settingValueView}>
                    <Picker 
                        selectedValue={currentLanguageCode}
                        style={{height: "100%", width: "100%"}}
                        onValueChange={onLanguageSelect}>
                        {getLanguageItems()}
                    </Picker>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    setting: {
        height: 40,
        alignItems: "center",
        flexDirection: "row",
        marginHorizontal: 5
    },
    settingTextView: {
        flex: 1,
        alignContent: "flex-start",
        alignItems: "flex-start",
    },
    settingText: {
        fontSize: 24,
    },
    settingValueView: {
        flex: 1,
        alignContent: "flex-end",
        alignItems: "center",
    }
});

export default SettingsScreen;