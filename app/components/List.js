import React, { useState } from 'react'
import { View, Text, StyleSheet, Image, ActivityIndicator } from 'react-native';

export const ListItem = ({title, description, image}) => {
    const [isImageLoading, setIsImageLoading] = useState(true);

    const onImageLoadStart = () => {
        setIsImageLoading(true);
    };

    const onImageLoadEnd = () => {
        setIsImageLoading(false);
    };

    return (
        <View style={styles.listItem}>
            <View style={styles.context}>
                <Text style={styles.title}>{title}</Text>
                {image !== "None" && 
                    <Image 
                        style={styles.image} 
                        resizeMode={'cover'} 
                        source={{uri: image}}
                        onLoadStart={onImageLoadStart}
                        onLoadEnd={onImageLoadEnd}/>
                }
                {(isImageLoading & image !== "None") ? 
                    <ActivityIndicator size="large" style={styles.activityIndicator} /> : null
                }
                <Text style={styles.description}>{description}</Text>
            </View>
        </View>
    );
}

export const ListSeparator = props => {
    return (
        <View style={styles.separator}>
        </View>
    );
}

const styles = StyleSheet.create({
    separator: {
        backgroundColor: "#d1d1d1",
        height: 2
    },
    listItem: {
        flex: 1,
        // marginHorizontal: 5,
        backgroundColor: "#fff",
    },
    context: {
        marginHorizontal: 5
    },
    title: {
        flex: 1,
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "justify"
    },
    description: {
        flex: 3,
        marginTop: 10,
        textAlign: "justify",
        marginBottom: 5
    },
    image: {
        width: '100%', 
        height: 200,
        marginTop: 5,
    },
    activityIndicator: {
        width: '100%', 
        height: 200,
        marginTop: 5,
        position: "absolute"
    }
});