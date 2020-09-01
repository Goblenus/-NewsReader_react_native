import React from 'react'
import { } from 'react-native';
import WebView from 'react-native-webview';

const WebViewScreen = ({route, navigation}) => {
    const { url } = route.params;

    return (
        <WebView source={{ uri: url }}/>
    );
}

export default WebViewScreen;