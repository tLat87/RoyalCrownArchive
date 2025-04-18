import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity, ScrollView} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';

const DynastyCard = ({ image, name, type, period,fullItem }) => {
    const navigation = useNavigation();
    return (
        <TouchableOpacity style={styles.card} onPress={() => {navigation.navigate('DynastiesMoreScreen', {fullItem})}}>
            <Image source={image} style={styles.image2} />
            <View style={styles.textContainer}>
                <Text style={styles.name}>{name}</Text>
                <Text style={styles.meta}>{type} | {period}</Text>
            </View>
        </TouchableOpacity>
    );
};

const FavoritesScreen = ({ navigation }) => {
    const savedDynasties = useSelector(state => state.saved.dynasties);

    return (
        <View style={styles.container}>
            {/* Назад */}
            <TouchableOpacity onPress={() => navigation.goBack()} style={styles.back}>
                <Image source={require('../assets/img/Frame1462984530.png')} />
            </TouchableOpacity>
            {/* Заголовок */}
            <Text style={styles.title}>FAVORITES</Text>

            {/* Иллюстрация */}
            <Image
                source={require('../assets/img/Img.png')} // путь к иллюстрации
                style={styles.image}
                resizeMode="contain"
            />

            {/* Текст */}
            {savedDynasties.length === 0 ? (
                <>
                    <Text style={styles.message}>YOU DON'T HAVE ELECTED{'\n'}ROYALTY YET</Text>
                </>
            ) : (
                <ScrollView showsVerticalScrollIndicator={false}>
                    {savedDynasties.map((item, index) => (
                        <DynastyCard key={index} {...item} fullItem={item} />
                    ))}
                </ScrollView>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        paddingHorizontal: 24,
        paddingTop: 40,
        alignItems: 'center',
    },
    back: {
        position: 'absolute',
        top: 70,
        left: 20,
        flexDirection: 'row',
        alignItems: 'center',
    },
    backText: {
        color: '#fff',
        marginLeft: 4,
        fontSize: 14,
    },
    title: {
        color: '#fff',
        fontFamily: 'Aboreto',
        fontSize: 28,
        letterSpacing: 1,
        marginTop: 50,
        marginBottom: 30,
    },
    image: {
        width: 300,
        height: 250,
        marginBottom: 30,
    },
    message: {
        color: '#fff',
        textAlign: 'center',
        fontFamily: 'Aboreto',
        fontSize: 16,
        letterSpacing: 1,
        lineHeight: 24,
    },




    card: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 12,
        // paddingHorizontal: 20,
    },
    image2: {
        width: 80,
        height: 80,
        borderRadius: 12,
        marginRight: 20,
    },
    textContainer: {
        flexShrink: 1,
    },
    name: {
        fontSize: 18,
        fontWeight: '600',
        fontFamily: 'Aboreto',
        color: 'white',
        letterSpacing: 1,
    },
    meta: {
        color: 'lightgray',
        marginTop: 4,
    },
});

export default FavoritesScreen;
