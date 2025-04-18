import React from 'react';
import {Image, ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const DynastyCard = ({ image, name, type, period, fullItem }) => {
    const navigation = useNavigation();
    return (
        <TouchableOpacity style={styles.card} onPress={() => {navigation.navigate('PlaceMoreScreen', {fullItem })}}>
            <Image source={{uri: image}} style={styles.image} />
            <View style={styles.textContainer}>
                <Text style={styles.name}>{name}</Text>
                <Text style={styles.meta}>{type}</Text>
            </View>
        </TouchableOpacity>
    );
};


const PlacesScreen = () => {
    const dynasties = [
        { name: 'Versailles', type: 'Bourbons | France', fact: ['2300 rooms, 67 staircases.', 'The Treaty of Versailles (1919) was signed here.'], coordinates: '48.8048, 2.1203', pos: 'https://s3-alpha-sig.figma.com/img/99a6/f9df/8adc30a04be14b309e7d8205e6e28242?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Tf-0SnBBmEg7uL8cDR2D5uKPKJyItPIALVnGH3-yswzYeWUGn9DqDrZtEv9UW5Az7X5Q6FXIzbiinafdFxuZPJhY6lxBPfuZC1yUkYMWqg6Sx8yfwe2GSRZC6tTfXkEgAl2f3xnHjGv3eSSAlw2zZEYj7YROVkHhbwKcR3w~1x6kfLTdX8G9nlk~apXKsFnLI4amS~-tmmE5Oq2ZN7Icq~fm5k2f8ZgAThEsz1MuvJ4G8PmYKdjv8d9cxH4snE6PQH871XEVswtY8bnLeDY2dqEnHeaHnvAehT37~Dm9txhFm0WRAV1NFVBYYGks3omzbqvFizYsHY4AnC1ey9MWuQ__', description : 'Main residence of Louis XIV, symbol of absolutism. Famous for the Hall of Mirrors, the park with fountains and the Orangery.', image: "https://s3-alpha-sig.figma.com/img/db7b/4457/95037587a4c2529ecde5db6ef486b6fe?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=dpkla3TLOwv4IImt0MFhgJgzvSG8rNWymyqiqgZIPeDEYGrlpqFoGTdarEr0AaUVE39gr1C6Xoe2De30N~pMDBLgpXRJbiJX~wCiG5CNj~q0iGleQGbnGyNE9q7Q-BdUw-dNJnVYw4Fpx8a37hlEMxchropUV2kJW6uGoNL0Vc6wS6e-Q9m~TC8WZIXL7qjWgBoEXiNYIk1YbWOYigM0GOtfeF~-nJdohrTq6FJvpsXXZ~sJIOsiVz8cn7XJKllAaw63kXsh~YpmmiC9Y0BclQGBGUs9bUKJD0mVl8rzqTQehV-6yF-ZkxuUlCq~BSrX7Kp36hRJJcNZpZq8Dt1hnA__" },
        { name: 'Windsor Castle', type: 'Windsors | UK',fact: ['Elizabeth II\'s favorite residence.', 'Survived the 1992 fire.'],pos:"https://s3-alpha-sig.figma.com/img/99a6/f9df/8adc30a04be14b309e7d8205e6e28242?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Tf-0SnBBmEg7uL8cDR2D5uKPKJyItPIALVnGH3-yswzYeWUGn9DqDrZtEv9UW5Az7X5Q6FXIzbiinafdFxuZPJhY6lxBPfuZC1yUkYMWqg6Sx8yfwe2GSRZC6tTfXkEgAl2f3xnHjGv3eSSAlw2zZEYj7YROVkHhbwKcR3w~1x6kfLTdX8G9nlk~apXKsFnLI4amS~-tmmE5Oq2ZN7Icq~fm5k2f8ZgAThEsz1MuvJ4G8PmYKdjv8d9cxH4snE6PQH871XEVswtY8bnLeDY2dqEnHeaHnvAehT37~Dm9txhFm0WRAV1NFVBYYGks3omzbqvFizYsHY4AnC1ey9MWuQ__", coordinates: '51.4839, -0.6044',description:"The largest inhabited castle in the world. It hosts the changing of the guard ceremony and weddings of monarchs (e.g. Prince Harry, 2018)", image: 'https://s3-alpha-sig.figma.com/img/2c94/4a37/029a1bcd8d3b07fb687f102c0e6239c7?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=C5kJHD0OvEsW1XXfN~UriCRzlChnvJm6kCEu6-PW39Y-X-A7~jTOIQlX~H6GPPpqgmzoOwiWc45HDkDbeHTEq37FIvXU2pWOEvKg1vvBAf8WZknxclcvCXXBFRmxoR-ECxmAdi1xVga3xZqG8oMl0gf1nUUHSXiiZaTYBkd9NsfSeguRGG8d3Tx2Nc5HS-~bW89ZBC-kewnYOlGBgA6~F0bibQwsymkN1UxoFM~gc4W4xaRXhDVRjiBKPd4JqXQVKxP7Ceutr4p9xIFNfAqwNc-ORGHGFI1PAi40nRodgjLV8DXqfVZohwuVyNQQLb~M9X5dTDZ8-MRXGDG3AvvF7A__' },
        { name: 'Winter Palace', type: 'Russia | Romanovs',fact: ['1500 rooms, 117 staircases.','The storming of the palace in 1917 - the key moment of the revolution.'], pos: 'https://s3-alpha-sig.figma.com/img/99a6/f9df/8adc30a04be14b309e7d8205e6e28242?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Tf-0SnBBmEg7uL8cDR2D5uKPKJyItPIALVnGH3-yswzYeWUGn9DqDrZtEv9UW5Az7X5Q6FXIzbiinafdFxuZPJhY6lxBPfuZC1yUkYMWqg6Sx8yfwe2GSRZC6tTfXkEgAl2f3xnHjGv3eSSAlw2zZEYj7YROVkHhbwKcR3w~1x6kfLTdX8G9nlk~apXKsFnLI4amS~-tmmE5Oq2ZN7Icq~fm5k2f8ZgAThEsz1MuvJ4G8PmYKdjv8d9cxH4snE6PQH871XEVswtY8bnLeDY2dqEnHeaHnvAehT37~Dm9txhFm0WRAV1NFVBYYGks3omzbqvFizYsHY4AnC1ey9MWuQ__', coordinates: '59.9398, 30.3146',description:"Main residence of Russian emperors. Symbol of luxury of the Russian Empire and the events of 1917.", image: 'https://s3-alpha-sig.figma.com/img/b7a4/7333/f2fc030c8f880991fd5e28562a021c27?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=iZ6~y3Q-oS~AF4uTjsS0fvHg2u9AE3FeCkGqtzoty-70gBL00OILWRXdlYsxZFixReK6SIyGBSZnpjsbOHG1EEgEAm8iyeYNmxd-GreRBnYzYNT8mgwArKOfO0J-ScEYwjPZbEzn8gQjouPYXwMF4i9aazatgW5Ezy~QVb71Rxokt9vNsBUjtYfC5cEU5u57TTJRp~70W3OXp78Roj0x0jUz4jnCRBDRREW5zCYmK7R8mF9I6ABL~BXOEZE4MJJYCcwU9TbF-URQVQck3OZGstfBa55Np47eeX6EWLwgoGHCrrXQx1OrHm8ubmxRZMYkhKpVhFMqgK6FnnMY8jPKGQ__' },
        { name: 'Schönbrunn ', type: 'Habsburgs | Austria',fact: ['1441 rooms.','Napoleon lived here during the occupation of Vienna.'], coordinates: '48.1857, 16.3128',description: "Summer residence of Maria Theresa. Famous for the “Hall of Mirrors”, where Mozart played at the age of 6, and the oldest zoo in the world.",pos:"https://s3-alpha-sig.figma.com/img/99a6/f9df/8adc30a04be14b309e7d8205e6e28242?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Tf-0SnBBmEg7uL8cDR2D5uKPKJyItPIALVnGH3-yswzYeWUGn9DqDrZtEv9UW5Az7X5Q6FXIzbiinafdFxuZPJhY6lxBPfuZC1yUkYMWqg6Sx8yfwe2GSRZC6tTfXkEgAl2f3xnHjGv3eSSAlw2zZEYj7YROVkHhbwKcR3w~1x6kfLTdX8G9nlk~apXKsFnLI4amS~-tmmE5Oq2ZN7Icq~fm5k2f8ZgAThEsz1MuvJ4G8PmYKdjv8d9cxH4snE6PQH871XEVswtY8bnLeDY2dqEnHeaHnvAehT37~Dm9txhFm0WRAV1NFVBYYGks3omzbqvFizYsHY4AnC1ey9MWuQ__", image: 'https://s3-alpha-sig.figma.com/img/0f9e/2a4b/3bf8d15f228cfa70b5fc95e49688b94e?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=cCsbHAoY~fIb~t9Y~bY5go408mB6mNY9~HuEjVEFnqWSxCipHpQtB-hCiGDWNDzrYiWbE-8~Z~Hjy026ujLinBcbBlzgNqkbhJJljzJEYn1phfCJGuqOJQ2aW-6oWh8VkbvngeTGcUEYrdTHBAtoHjbMmUG7K0tu4I0TdS84BAmPiNtyIcLDtF9eJNBvba8Cd9Sgr1bYXxWGzPf1~pS3q0qmKVOrDV70UuZAaKXFYOs1Txxxk9saxrZG7mwJsmARFDGSzjREtM1jAsqFGQILNLrVlSL5WMhBBd1kqAcCHuWSvzMjTdvjDBu2gAFTtd9a354SnCCpS8g52XxQjvRWWg__' },
        { name: 'Alhambra', type: 'Nasridas | Spain',fact:['The name translates as “Red Castle”.', 'Inspired Orientalist painters.'],  coordinates: '37.1760, -3.5889',description:"Palace complex of Moorish rulers of Granada. Famous for its Arabic carvings, fountains and Generalife Gardens.",pos:"https://s3-alpha-sig.figma.com/img/99a6/f9df/8adc30a04be14b309e7d8205e6e28242?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Tf-0SnBBmEg7uL8cDR2D5uKPKJyItPIALVnGH3-yswzYeWUGn9DqDrZtEv9UW5Az7X5Q6FXIzbiinafdFxuZPJhY6lxBPfuZC1yUkYMWqg6Sx8yfwe2GSRZC6tTfXkEgAl2f3xnHjGv3eSSAlw2zZEYj7YROVkHhbwKcR3w~1x6kfLTdX8G9nlk~apXKsFnLI4amS~-tmmE5Oq2ZN7Icq~fm5k2f8ZgAThEsz1MuvJ4G8PmYKdjv8d9cxH4snE6PQH871XEVswtY8bnLeDY2dqEnHeaHnvAehT37~Dm9txhFm0WRAV1NFVBYYGks3omzbqvFizYsHY4AnC1ey9MWuQ__", image: 'https://s3-alpha-sig.figma.com/img/dc8a/0aec/ee7371c155e28980ad4929975b111686?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=StR2B6Zf0x97Wd3npNyPGMqJRqh-gM~FvaMsfcn5VoNuRdQsq22HdsnieKsoonqs9pUCa6X7RrLjwMQQjS9b5wtkhwYZfJsbb6xpwHx4QabAP6Q22SQwdHOaYSXvvGoz~CQ3wgG0GIa9LSyR2j3nr0mKrJg4DfucGOtIn1Dgkixsdw0BG9cc0KQI8ODupPtixQ3A9TdOa2rx4MzUxfh4gIAJlgMVFRnsFYvrJAUAIFTXQu9CMmYEZCLq14beFYz~wAKnBksAaK1HHZ1Wqb9QkzwUTfjXKerO8UO0QtAZ-D4kUwPUU~FpbHbYGlxchMFEVaUEmfY405IWGSxuVD0jmw__' },
    ];

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Place</Text>
            <ScrollView showsVerticalScrollIndicator={false}>
                {dynasties.map((dynasty, index) => (
                    <DynastyCard key={index} {...dynasty} fullItem={dynasty} />
                ))}
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
        fontWeight: '700',
        marginBottom: 20,
        fontFamily: 'Aboreto',
        alignSelf: 'flex-start',
        marginLeft: 20,
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
        fontFamily: 'Aboreto',
        fontWeight: '600',
        color: 'white',
        letterSpacing: 1,
    },
    meta: {
        color: 'lightgray',
        marginTop: 4,
    },
});

export default PlacesScreen
