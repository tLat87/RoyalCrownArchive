import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, Switch, TouchableOpacity, ScrollView, Alert } from 'react-native';

const SettingsScreen = ({ navigation }) => {
    const [isDarkMode, setIsDarkMode] = useState(true);

    const showWIPAlert = () => {
        Alert.alert('In Development', 'This feature is still in development.');
    };

    const toggleSwitch = () => {
        setIsDarkMode(prev => !prev);
        showWIPAlert();
    };

    return (
        <ScrollView style={styles.container}>
            <Text style={styles.header}>SETTINGS</Text>

            <Image
                source={require('../assets/img/Img.png')}
                style={styles.image}
                resizeMode="contain"
            />

            <View style={styles.item}>
                <Text style={styles.label}>Interface theme</Text>
                <Switch
                    trackColor={{ false: '#ccc', true: '#C7B08F' }}
                    thumbColor={isDarkMode ? '#fff' : '#fff'}
                    ios_backgroundColor="#ccc"
                    onValueChange={toggleSwitch}
                    value={isDarkMode}
                />
            </View>

            <TouchableOpacity style={styles.item} onPress={showWIPAlert}>
                <Text style={styles.label}>Terms of use</Text>
                <Text style={styles.arrow}>›</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.item} onPress={showWIPAlert}>
                <Text style={styles.label}>Privacy policy</Text>
                <Text style={styles.arrow}>›</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.item} onPress={showWIPAlert}>
                <Text style={styles.label}>About Developer</Text>
                <Text style={styles.arrow}>›</Text>
            </TouchableOpacity>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#000',
        flex: 1,
        paddingHorizontal: 20,
        paddingTop: 60,
    },
    header: {
        color: '#fff',
        fontSize: 24,
        letterSpacing: 1,
        fontFamily: 'Aboreto',
        fontWeight: '600',
        marginBottom: 30,
    },
    image: {
        width: '100%',
        height: 180,
        marginBottom: 30,
    },
    item: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderColor: '#222',
        borderBottomWidth: 1,
        paddingVertical: 18,
    },
    label: {
        color: '#fff',
        fontSize: 16,
    },
    arrow: {
        color: '#fff',
        fontSize: 22,
        fontWeight: '300',
    },
});

export default SettingsScreen;
