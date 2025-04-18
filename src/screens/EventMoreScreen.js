import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image,
    ScrollView,
    TextInput,
    Alert
} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import {removeEvent} from '../redux/slices/eventSlice';

const EventMoreScreen = () => {
    const navigation = useNavigation();
    const route = useRoute();
    const dispatch = useDispatch();
    const { fullItem } = route.params;

    const {
        eventName,
        region,
        description,
        date,
        eventType,
        dynasty,
        participants,
        isImportant,
        image
    } = fullItem;

    const handleDelete = () => {
        Alert.alert('Delete Event', 'Are you sure you want to delete this event?', [
            { text: 'Cancel', style: 'cancel' },
            {
                text: 'Delete',
                style: 'destructive',
                onPress: () => {
                    dispatch(removeEvent(fullItem.id));
                    navigation.goBack();
                },
            },
        ]);
    };

    return (
        <ScrollView style={styles.container}>
            <View style={styles.headerIcons}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image source={require('../assets/img/Frame1462984530.png')} />
                </TouchableOpacity>
                <TouchableOpacity onPress={handleDelete}>
                    <Image source={require('../assets/img/fluent_delete-32-filled.png')} style={styles.icon} />
                </TouchableOpacity>
            </View>

            {image ? (
                <Image source={{ uri: image }} style={styles.image} />
            ) : (
                <View style={[styles.image, { backgroundColor: '#333' }]} />
            )}

            {isImportant && <Text style={styles.important}>Important Event</Text>}

            <Text style={styles.title}>{eventName}</Text>

            <Text style={styles.label}>Country & region</Text>
            <Text style={styles.text}>{region}</Text>

            <Text style={styles.label}>Date</Text>
            <Text style={styles.text}>{new Date(date).toDateString()}</Text>

            <Text style={styles.label}>Description</Text>
            <Text style={styles.text}>{description}</Text>

            <Text style={styles.label}>Types of events</Text>
            <View style={styles.tag}>
                <Text style={styles.tagText}>{eventType}</Text>
            </View>

            <Text style={styles.label}>Dynasty</Text>
            <Text style={styles.text}>{dynasty}</Text>

            <Text style={styles.label}>Participants</Text>
            {participants.map((p, index) => (
                <TextInput
                    key={index}
                    style={styles.participant}
                    editable={false}
                    value={p}
                    placeholder={`Participant ${index + 1}`}
                    placeholderTextColor="#777"
                />
            ))}

            <View style={{ height: 40 }} />
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#000',
        flex: 1,
        padding: 20,
        paddingTop: 80,
    },
    back: {
        color: '#fff',
        fontSize: 16,
        marginBottom: 10,
    },
    headerIcons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: 12,
        marginBottom: 20,
    },
    icon: {
        width: 26,
        height: 26,
        tintColor: '#fff',
    },
    image: {
        width: '100%',
        height: 300,
        borderRadius: 20,
        marginBottom: 20,
    },
    important: {
        borderColor: '#fff',
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 10,
        paddingVertical: 4,
        color: '#fff',
        alignSelf: 'flex-start',
        marginBottom: 12,
    },
    title: {
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
        fontFamily: 'Aboreto',
    },
    label: {
        color: '#888',
        fontSize: 14,
        marginBottom: 4,
    },
    text: {
        color: '#fff',
        fontSize: 16,
        marginBottom: 16,
    },
    tag: {
        borderColor: '#fff',
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 10,
        paddingVertical: 6,
        alignSelf: 'flex-start',
        marginBottom: 16,
    },
    tagText: {
        color: '#fff',
    },
    participant: {
        backgroundColor: '#111',
        color: '#fff',
        padding: 12,
        borderRadius: 10,
        marginBottom: 12,
    },
});

export default EventMoreScreen;
