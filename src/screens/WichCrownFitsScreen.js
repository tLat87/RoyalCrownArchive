import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, Image, ScrollView, TouchableOpacity, Dimensions} from 'react-native';
import Share from 'react-native-share';

const data = [
    {
        img: 'https://s3-alpha-sig.figma.com/img/e94a/6c60/4bd60872b2380a20ca7406df4d484e6b?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=egYKhil7Wl4Xgn-PoH5mZy2Y~Edgy7OtGKoXQaZNI9kx9w61UwqJCRB0CGmRdf0edylKckU70~2B0JGdGT3Bd6wdiBmx2ZAZgnuHyaVaP-bMu4duBqSQYBzbx7ZzMkBEa6rg8iMHXh2UgRq5UNGJgjOi6CWzOrIgBMq1W~7v9I9jM~JgI~ciNr9lhCQz8oBTEv6WIarp0PPGgrZpGbZPtzUC5rkq-2YQFNSWm8l1soO9SinlvD8x1MsmFB9Ty-KctXI5Lrwi9OHcDkK4NKL2DZj6iEk4WQ37gjZ2YVa0g2GY3a5zGzNee2UWTMJsxwt1fQpz~MVjhWIIZfRBqte8eQ__',
        name: 'Crown Counselor',
        character: 'Rational, insightful, strategic. You are able to see the whole picture, anticipate risks and find non-obvious solutions. Your strength lies in your ability to keep a cool head even in crises',
        speech: 'Concise, logical, with examples from history or science',
        example: '"Power is not a tyranny, but a tool. Use it as a healer uses a scalpel: precisely and without unnecessary movements"',
        historical: 'Cardinal Richelieu, architect of French statehood, master of political intrigue and reform'
    },
    {
        img: 'https://s3-alpha-sig.figma.com/img/90c0/aab0/3def98f539f000f2d66bdd9606fedfed?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=VMQ-1XOPNvqVbOb-otZy4CJuhwhCyxnNsWjXqsAAAijlBsO6qDK3K5p24HRcuss9pwmriucabx3tLjN4ZajXFNarjHQ5ZlFiCXrvudxTCb3S~k5CG~QAsBgEY9w6Uu92-a8-RA9rqvdwGAFE9BJ3wUTeRDvTp~siBuF0V6YlyOLP8m1Qc~QnnqMBYhUJTw~pZyg~Ro~lrI~hhMjnugp6g3yWHpdQ5YngreoqZxTIYdepJjregYBfuSW2MlWPOjoi9ctvXos9NyCtEcYk~sQhqdk2BxrE~x8Hy3OSA4Oqh9xEAYkoYcQcUfwkSCatjxz1oTzfN1WGYeLNm~lM~RdZEQ__',
        name: 'Queen without \n' +
            'a throne',
        character: 'Charismatic, ambitious, manipulator. You master the art of influence, able to turn the weaknesses of others into their advantages. Your throne is not gold, but the minds and hearts of others.',
        speech: 'Emotional, metaphorical, with a touch of mystery',
        example: '"A throne is only a decoration. The true crown is fear and admiration in the eyes of those who think they rule you"',
        historical: 'Catherine de Medici, the “black queen” of France, who held power through intrigue, marriage and court games'
    },
    {
        img: 'https://s3-alpha-sig.figma.com/img/53f4/f868/005c3f1656430e24bb195adb6a01c379?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=AjB8Rx7POQRR0MqFKZpToZWXACaoQFwnTgZjEa5coZDHW3cVCzSWo65u1es3oGPPgN4om-N4mO5z-FdX~MxoaldItZAbzzRYqyzgWf-vnA7OjxTPAVHo3hVXAZXb6DFUl9fvKG8UF716aJiMSvH-YwyXXeFZ4vA03csUDwug1wbjM4vb4m2p1xG3DERCQ62xn6wBHkcojwKwdwwMyOlmEMbQ57eBB5QIWZIT0BVDQm1ePCCIz9b2NArJDDj6tWtTSMe8BM~g8ssetiRfPFnZIoqFEzH3vnjgNfh-lCgzeeB-4vwA9vSPbQB7YQMcNbuphEhXnqk5F~4HeXkjNWWvDQ__',
        name: 'Guardian of the dynasty',
        character: 'Conservative, loyal, unyielding. You are a pillar of tradition, a living link between the past and the future. For you the honor of the family and the observance of the foundations is more important than personal ambitions.',
        speech: 'Polite, respectful, with quotations from ancient texts',
        example: '"The roots of a tree are stronger than its branches. Break tradition and the throne will fall with it"',
        historical: 'Confucius is a philosopher whose ideas became the basis of China\'s dynastic ethics for millennia'
    },
    {
        img: 'https://s3-alpha-sig.figma.com/img/9d79/69d2/9691e4af067f7c88351458acf02d7c91?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=M61B8Gw9IdW~nJgWJAmgr3DGAuOcilcQWH618WaxCgNI7BH5nS5oCS6SGd5PJJHTvKynFwpYBk4mUaP6CKxbp9UT-gV35~M0dedJYXScqkGN9jkUHnNlwNJt4nKCv6rh1Ew8sC-0saw9-HcixqzGU63tuDNWofselpp9eRoSWluyt2y3UId5LfUd3Avyl~LRTFOYxvPyXHWrpG2FvGicJ3K7V-lznZGK-CtEmrKEMwCEVdLGyLr2~aS-D92BxslZaMANSMhhWi-mrsxTxfnd2BMRetywi6C84qCC-W1d6hHyd-P6ZGdohoWkpKEWUuTcfdCPp8GY-ZqhYt3V0lxaTA__',
        name: 'Young Challenger',
        character: 'Adventurous, daring, innovative. You defy convention, believe in the power of change, and are willing to take risks for greatness. Your weakness is impatience, but it is also your strength.',
        speech: 'Energetic, direct, challenging and provocative',
        example: '"The throne is not inherited - it is conquered. And if you can\'t, you change the rules of the game"',
        historical: 'Peter the Great was a reformist tsar who turned Russia into an empire through radical transformations'
    },
]


const WichCrownFitsScreen = ({ navigation }) => {
    const [fullItem, setFullItem] = useState(null);

    useEffect(() => {
        const randomIndex = Math.floor(Math.random() * data.length);
        setFullItem(data[randomIndex]);
    }, []);

    const handleShare = async () => {
        if (!fullItem) return;
        const shareOptions = {
            title: 'Share Dynasty',
            message: `👑 ${fullItem.name}\n\nType: ${fullItem.type}\nPeriod: ${fullItem.period}\nCountry: ${fullItem.country}`,
        };

        try {
            await Share.open(shareOptions);
        } catch (error) {
            console.log('Share error:', error);
        }
    };

    if (!fullItem) {
        return (
            <View style={styles.container}>
                <Text style={{ color: 'white' }}>Loading...</Text>
            </View>
        );
    }

    return (
        <ScrollView style={styles.container}>
            <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
                    <Image source={require('../assets/img/Frame1462984530.png')} />
                </TouchableOpacity>
                <TouchableOpacity onPress={handleShare} style={styles.backButton}>
                    <Image source={require('../assets/img/majesticons_share.png')} />
                </TouchableOpacity>
            </View>

            <Image
                source={{uri: fullItem.img}}
                style={styles.image}
            />

            <Text style={styles.title}>{fullItem.name}</Text>

            <View style={styles.infoBlock}>
                <Text style={styles.label}>Character</Text>
                <Text style={styles.text}>{fullItem.character}</Text>
            </View>

            <View style={styles.infoBlock}>
                <Text style={styles.label}>Speech</Text>
                <Text style={styles.text}>{fullItem.speech}</Text>
            </View>


            <View style={styles.infoBlock}>
                <Text style={styles.label}>Example</Text>
                <Text style={styles.text}>
                    {fullItem.example}
                </Text>
            </View>

            <View style={styles.infoBlock}>
                <Text style={styles.label}>Historical</Text>
                <Text style={styles.text}>
                    {fullItem.historical}
                </Text>
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
        letterSpacing: 1,
        fontFamily: 'Aboreto',
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

export default WichCrownFitsScreen
