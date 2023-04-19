import React from 'react';
// import { ScrollView } from 'react-native';

import { ScrollView, View, TouchableOpacity, Image, Text,StyleSheet } from 'react-native';
const buttonData = [
    { title: 'Bras', Screen: 'fracturescreen' },
    { title: 'Jambe ', Screen: 'entorsescreen' },
    { title: 'Cuisse ', Screen: 'coupurescreen' },
];

function Fracture({ navigation }) {
    return (
        <View style={styles.container}>
        {/* <Image
                source={require('../../../assets/image 13.png')}
                style={styles.image}
            /> */}

            <View style={styles.choicesContainer}>
                {buttonData.map((button, index) => (
                    <TouchableOpacity
                        key={index}
                        style={styles.Button}
                        onPress={() => navigation.navigate(button.Screen)}
                    >

                        <Text style={styles.text}>{button.title}</Text>
                    </TouchableOpacity>
                ))}
             </View>
               </View>

    );
}
const styles = StyleSheet.create({
    fullcontainer: {
        flexGrow: 1,
        paddingVertical: 10,
        paddingHorizontal: 10,
    },
    choicesContainer: {
        // flexDirection: 'row',
        // flexWrap: 'wrap',
        justifyContent: 'center',
        paddingVertical: 250,
        paddingHorizontal: 20,

    },
    Button: {
        margin: 9,
        backgroundColor: ' rgba(48, 119, 255, 0.18)',
        borderRadius: 26,
        paddingVertical: 25,
        paddingHorizontal: 12,
        flexDirection: 'row',
        alignItems: 'center',
    },
    image: {
        marginRight: 15,
        width: 60,
        height: 7,
    },
    text: {
        color: 'black',
        fontSize: 22,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontWeight: 700,

    },
});

export default Fracture;
