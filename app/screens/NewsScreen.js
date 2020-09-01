import React, { useEffect, useState } from 'react'
import { FlatList, StyleSheet, View, TouchableWithoutFeedback } from 'react-native';

import AsyncStorage from "@react-native-community/async-storage"

import { ListItem, ListSeparator } from '../components/List';
import { getApiKey } from '../config/ApiKeys';
import Settings from "../config/Settings"

const NewsScreen = ({navigation}) => {
    const [lastNews, setLastNews] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const updateLastNews = async () => {
        try {
            setIsLoading(true);

            let language_code = await AsyncStorage.getItem(Settings.language_code);
            if (language_code === null)
            {
                language_code = Settings.language_code_default;
                await AsyncStorage.setItem(Settings.language_code, language_code)
            }

            let response = await fetch(
              `https://api.currentsapi.services/v1/latest-news?apiKey=${getApiKey()}&language=${language_code}`
            //"https://run.mocky.io/v3/452073b5-37ed-40cd-aeae-9059b3c514a0"
            );

            // 429 status - "Error: Token limit reached"
            if (response.status != 200)
            {
                // TODO: Print smt
                return;
            }

            let json = await response.json();
            setLastNews(json.news);
          } catch (error) {
            console.error(error);
          }
          finally {
            setIsLoading(false);
          }
    };

    const onItemClick = (url) => {
        navigation.navigate("WebView", {url: url});
    };

    useEffect(() => {
        updateLastNews();
    }, []);

    const renderItem = ({ item }) => (
        <TouchableWithoutFeedback onPress={ () => onItemClick(item.url) }>
            <View>
                <ListItem title={item.title} description={item.description} image={item.image}/>
            </View>
        </TouchableWithoutFeedback>
      );

    return (
        <View style={styles.mainContainer}>
            <FlatList
                data={lastNews}
                renderItem={renderItem}
                ItemSeparatorComponent={ListSeparator}
                onRefresh={updateLastNews}
                refreshing={isLoading}
                keyExtractor={item => item.id}/>
        </View>
    );
};

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1
    }
});

export default NewsScreen;