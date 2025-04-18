import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    StyleSheet,
    TouchableOpacity,
    ScrollView,
    Image,
    Switch,
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Picker } from '@react-native-picker/picker';
import { launchImageLibrary } from 'react-native-image-picker';
import {addEvent} from '../redux/slices/eventSlice';
import {useDispatch} from 'react-redux';

const CreateEventsScreen = ({ navigation }) => {
    const [eventName, setEventName] = useState('');
    const [region, setRegion] = useState('');
    const [description, setDescription] = useState('');
    const [date, setDate] = useState(new Date());
    const [showDatePicker, setShowDatePicker] = useState(false);
    const [eventType, setEventType] = useState('All');
    const [dynasty, setDynasty] = useState('');
    const [participants, setParticipants] = useState(['']);
    const [isImportant, setIsImportant] = useState(false);
    const [image, setImage] = useState(null);
    const dispatch = useDispatch();

    const addParticipant = () => {
        setParticipants([...participants, '']);
    };

    const updateParticipant = (index, value) => {
        const updated = [...participants];
        updated[index] = value;
        setParticipants(updated);
    };

    const handleImagePick = () => {
        const options = {
            mediaType: 'photo',
            includeBase64: false,
        };

        launchImageLibrary(options, (response) => {
            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.errorCode) {
                console.log('ImagePicker Error: ', response.errorMessage);
            } else {
                const uri = response.assets[0].uri;
                setImage(uri);
            }
        });
    };


    const handleDone = () => {
        const newEvent = {
            eventName,
            region,
            description,
            date: date.toISOString(),
            eventType,
            dynasty,
            participants: participants.filter(p => p.trim() !== ''),
            isImportant,
            image,
        };

        dispatch(addEvent(newEvent));
        navigation.goBack();
    };


    return (
        <ScrollView style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                  <Image source={require('../assets/img/Frame1462984530.png')} />
                </TouchableOpacity>
                <TouchableOpacity onPress={handleDone}>
                    <Text style={styles.done}>DONE</Text>
                </TouchableOpacity>
            </View>

            <Text style={styles.title}>ADD EVENT</Text>

            <TouchableOpacity style={styles.imagePicker} onPress={handleImagePick}>
                {image ? (
                    <Image source={{ uri: image }} style={styles.image} />
                ) : (
                    <Image source={require('../assets/img/material-symbols-light_add-photo-alternate-outline.png')}  />
                )}
            </TouchableOpacity>

            <TextInput
                placeholder="Name of the event"
                placeholderTextColor="#999"
                value={eventName}
                onChangeText={setEventName}
                style={styles.input}
            />

            <TextInput
                placeholder="Country & region"
                placeholderTextColor="#999"
                value={region}
                onChangeText={setRegion}
                style={styles.input}
            />

            <TextInput
                placeholder="Description"
                placeholderTextColor="#999"
                value={description}
                onChangeText={setDescription}
                multiline
                style={[styles.input, { height: 100 }]}
            />

            <TouchableOpacity onPress={() => setShowDatePicker(true)}>
                <Text style={styles.dateText}>Date: {date.toDateString()}</Text>
            </TouchableOpacity>
            {showDatePicker && (
                <DateTimePicker
                    value={date}
                    mode="date"
                    display="spinner"
                    onChange={(event, selectedDate) => {
                        setShowDatePicker(false);
                        if (selectedDate) setDate(selectedDate);
                    }}
                />
            )}

            <View style={styles.pickerContainer}>
                <Picker
                    selectedValue={eventType}
                    onValueChange={(itemValue) => setEventType(itemValue)}
                    dropdownIconColor="#fff"
                    style={styles.picker}
                >
                    <Picker.Item label="All" value="All" />
                    <Picker.Item label="War" value="War" />
                    <Picker.Item label="Coronation" value="Coronation" />
                    <Picker.Item label="Marriage" value="Marriage" />
                    <Picker.Item label="Death" value="Death" />
                </Picker>
            </View>

            <TextInput
                placeholder="Dynasty"
                placeholderTextColor="#999"
                value={dynasty}
                onChangeText={setDynasty}
                style={styles.input}
            />

            {participants.map((participant, index) => (
                <TextInput
                    key={index}
                    placeholder={`Participant ${index + 1}`}
                    placeholderTextColor="#999"
                    value={participant}
                    onChangeText={(text) => updateParticipant(index, text)}
                    style={styles.input}
                />
            ))}

            <TouchableOpacity onPress={addParticipant} style={styles.addBtn}>
                <Text style={styles.addBtnText}>+ Add Participant</Text>
            </TouchableOpacity>

            <View style={styles.checkboxContainer}>
                <Switch
                    value={isImportant}
                    onValueChange={setIsImportant}
                    thumbColor={isImportant ? '#fff' : '#666'}
                    trackColor={{ false: '#999', true: '#444' }}
                />
                <Text style={styles.checkboxLabel}>Important Event</Text>
            </View>

            <View style={{ height: 50 }} />
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#000',
        flex: 1,
        paddingTop: 80,
        padding: 20,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    back: {
        color: '#fff',
        fontSize: 16,
    },
    done: {
        color: '#fff',
        fontSize: 16,
    },
    title: {
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    imagePicker: {
        height: 160,
        width: '100%',
        backgroundColor: '#222',
        borderRadius: 12,
        marginBottom: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        height: 160,
        width: '100%',
        borderRadius: 12,
        resizeMode: 'cover',
    },
    input: {
        backgroundColor: '#111',
        borderRadius: 10,
        padding: 12,
        color: '#fff',
        marginBottom: 16,
    },
    dateText: {
        color: '#fff',
        marginBottom: 16,
    },
    pickerContainer: {
        backgroundColor: '#111',
        borderRadius: 10,
        marginBottom: 16,
    },
    picker: {
        color: '#fff',
    },
    addBtn: {
        marginTop: 10,
        marginBottom: 16,
    },
    addBtnText: {
        color: '#aaa',
    },
    checkboxContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    checkboxLabel: {
        color: '#fff',
        marginLeft: 8,
    },
});

export default CreateEventsScreen;
