import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';

const PlaceMoreScreen = ({ navigation, route }) => {
    const {fullItem} = route.params;
    return (
        <ScrollView style={styles.container}>
            <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
                <Image source={require('../assets/img/Frame1462984530.png')} />
            </TouchableOpacity>

            <Image
                source={fullItem.image}
                style={styles.image}
            />

            <Text style={styles.title}>{fullItem.name}</Text>

            <View style={styles.infoBlock}>
                <Text style={styles.label}>Coordinates</Text>
                <Text style={styles.text}>{fullItem.coordinates}</Text>
            </View>

            <View style={styles.infoBlock}>
                <Text style={styles.label}>Country | Dynasty</Text>
                <Text style={styles.text}>{fullItem.type}</Text>
            </View>


            <View style={styles.infoBlock}>
                <Text style={styles.label}>Description</Text>
                <Text style={styles.text}>
                    {fullItem.description}
                </Text>
            </View>


            <View style={styles.infoBlock}>
                <Text style={styles.label}>Interesting facts</Text>
                    <Text style={styles.text}>・ {fullItem.fact[0]}</Text>
                <Text style={styles.text}>・ {fullItem.fact[1]}</Text>

            </View>

            <Text style={styles.label}>Map</Text>
            <Image
                source={{uri: fullItem.pos}}
                style={styles.map}
                resizeMode="cover"
            />
            <View style={{marginBottom: 50}}/>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#000',
        flex: 1,
        padding: 20,
        paddingTop: 70,
    },
    backButton: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 12,
    },
    backText: {
        color: 'white',
        marginLeft: 6,
        fontSize: 16,
    },
    image: {
        width: '100%',
        height: 200,
        borderRadius: 20,
        marginBottom: 20,
    },
    title: {
        fontSize: 26,
        fontFamily: 'Aboreto',
        color: 'white',
        fontWeight: '600',
        marginBottom: 20,
        letterSpacing: 1,
    },
    infoBlock: {
        marginBottom: 16,
    },
    label: {
        color: '#999',
        fontSize: 13,
        marginBottom: 4,
    },
    text: {
        color: '#fff',
        fontSize: 15,
        lineHeight: 20,
    },
    map: {
        width: '100%',
        height: 180,
        marginTop: 10,
        borderRadius: 12,
    },
});

export default PlaceMoreScreen;
