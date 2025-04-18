import React from 'react';
import {View, Text, StyleSheet, Image, ScrollView, TouchableOpacity, Alert} from 'react-native';
import {removeDynasty, saveDynasty} from '../redux/slices/savedSlice';
import {useDispatch, useSelector} from 'react-redux';

const DynastiesMoreScreen = ({ navigation, route }) => {
    const {fullItem} = route.params;
    const dispatch = useDispatch();
    const savedItems = useSelector(state => state.saved.dynasties);

    const handleSave = () => {
        const isSaved = savedItems.some(item => item.name === fullItem.name); // сравнение по уникальному полю

        if (isSaved) {
            dispatch(removeDynasty(fullItem.name)); // или другой уникальный идентификатор
            Alert.alert('Removed', 'Dynasty has been removed from favorites.');
        } else {
            dispatch(saveDynasty(fullItem));
            Alert.alert('Saved', 'Dynasty has been saved successfully!');
        }
    };

    return (
        <ScrollView style={styles.container}>

            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
                    <Image source={require('../assets/img/Frame1462984530.png')} />
                </TouchableOpacity>
                <TouchableOpacity onPress={()=> {handleSave()}} style={styles.backButton}>
                    <Image source={require('../assets/img/fluent_heart-12-regular.png')} />
                </TouchableOpacity>
            </View>

            <Image
                source={fullItem.image}
                style={styles.image}
            />

            <Text style={styles.title}>{fullItem.name}</Text>


            <View style={styles.infoBlock}>
                <Text style={styles.label}>Country</Text>
                <Text style={styles.text}>{fullItem.country}</Text>
            </View>

            <View style={styles.infoBlock}>
                <Text style={styles.label}>Origin</Text>
                <Text style={styles.text}>{fullItem.origin}</Text>
            </View>

            <View style={styles.infoBlock}>
                <Text style={styles.label}>Type</Text>
                <Text style={styles.text}>
                    {fullItem.type}
                </Text>
            </View>
            <View style={styles.infoBlock}>
                <Text style={styles.label}>Period</Text>
                <Text style={styles.text}>
                    {fullItem.period}
                </Text>
            </View>


            <View style={styles.infoBlock}>
                <Text style={styles.label}>Interesting facts</Text>
                <Text style={styles.text}>・ {fullItem.facts[0]}</Text>
                <Text style={styles.text}>・ {fullItem.facts[1]}</Text>
                <Text style={styles.text}>・ {fullItem.facts[2]}</Text>

            </View>

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
        height: 300,
        borderRadius: 20,
        marginBottom: 20,
    },
    title: {
        fontSize: 26,
        color: 'white',
        fontWeight: '600',
        marginBottom: 20,
        fontFamily: 'Aboreto',
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

export default DynastiesMoreScreen
