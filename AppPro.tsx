import React from 'react';
import { StyleSheet, Text, View, useColorScheme } from 'react-native';

const AppPro = (): JSX.Element => {
    const isDarkMode = useColorScheme() === "dark";

    return (
        <React.Fragment>
            <View style={styles.container}>
                <Text style={isDarkMode ? styles.darkText : styles.whiteText}>Hello world from app pro {String(isDarkMode)}</Text>
            </View>
        </React.Fragment>
    );
};

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    whiteText: {
        color: '#FFFFFF',
        backgroundColor: '#393939'
    },
    darkText: {
        color: '#000000',
        backgroundColor: '#d1d1d1'

    }
})

export default AppPro;
