import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {WebView} from 'react-native-webview';

export default function App() {
    return (
        <SafeAreaView style={styles.container}>
            <WebView
                source={{uri: 'https://goat-and-ram.vercel.app'}}
                style={styles.webview}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    webview: {
        flex: 1,
    },
});