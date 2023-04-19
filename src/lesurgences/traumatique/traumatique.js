import React from 'react';
// import { ScrollView } from 'react-native';

import { ScrollView, View, TouchableOpacity, Image, Text,StyleSheet } from 'react-native';
const buttonData = [
    { title: 'Fracture', Screen: 'fracturescreen' },
    { title: 'Entorse ', Screen: 'entorsescreen' },
    { title: 'Coupure/plaie ', Screen: 'coupurescreen' },
];

function Traumatique({ navigation }) {
    return (
        <View style={styles.fullcontainer}>
        <View style={styles.imagecontainer}>    
        <Image
                source={require('../../../assets/image7.png')}
                style={styles.image}
            />
            <Text style={styles.title}>Traumatique</Text>
            </View>

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
   imagecontainer: {
        // flexDirection: 'row',
        // flexWrap: 'wrap',
        justifyContent: 'center',
        paddingVertical: 25,
        paddingHorizontal: 2,

    },
    title:{
        padding: 15,
        fontStyle: 'normal',
       
        fontSize: 22,
        lineHeight: 25,
        /* or 114% */
        color: '#000000',
        textTransform: 'capitalize',
        
       
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontWeight: 700,
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
        borderRadius: 23,
        paddingVertical: 20,
        paddingHorizontal: 12,
        flexDirection: 'row',
        alignItems: 'center',
    },
    image: {
        position: 'absolute',
        // marginTop: 70,
        width: 84,
        height: 89,
        left: 116,
        top: 90,
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

export default Traumatique;
