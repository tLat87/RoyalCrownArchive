import React from 'react';
import {Image, ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import EventMoreScreen from './EventMoreScreen';

const DynastyCard = ({fullItem }) => {
    const navigation = useNavigation();
    return (
        <TouchableOpacity style={styles.card} onPress={() => {navigation.navigate('EventMoreScreen', {fullItem})}}>
            <Image source={{uri: fullItem.image}} style={styles.image} />
            <View style={styles.textContainer}>
                <Text style={styles.name}>{fullItem.eventName}</Text>
                <Text style={styles.meta}>{fullItem.region}</Text>
            </View>
        </TouchableOpacity>
    );
};


const EventsScreen = ({navigation}) => {
    const events = useSelector(state => state.events.events);


    return (
        <View style={styles.container}>
            <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
                <Text style={styles.header}>Royal events</Text>
                {/*<TouchableOpacity onPress={() => navigation.navigate('')}>*/}
                {/*    <Image source={require('../assets/img/lets-icons_filter.png')} />*/}
                {/*</TouchableOpacity>*/}
            </View>

            <ScrollView showsVerticalScrollIndicator={false}>
                {events.map((dynasty, index) => (
                    <DynastyCard key={index} {...dynasty} fullItem={dynasty}/>
                ))}
                <TouchableOpacity onPress={() => navigation.navigate('CreateEventsScreen')} style={{alignItems: 'center'}}>
                    <Image source={require('../assets/img/tabler_plus.png')} />
                </TouchableOpacity>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        paddingTop: 60,
    },
    header: {
        color: 'white',
        fontSize: 24,
        fontFamily: 'Aboreto',
        fontWeight: '700',
        alignSelf: 'center',
        marginBottom: 20,
        letterSpacing: 1,
    },


    card: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 12,
        paddingHorizontal: 20,
    },
    image: {
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

export default EventsScreen;
