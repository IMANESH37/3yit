import React from 'react';
// import { ScrollView } from 'react-native';

import { ScrollView, View, TouchableOpacity, Image, Text,StyleSheet } from 'react-native';
const buttonData = [
    { title: 'Choc anaphylactique', Screen: '' },
 
   
];

function Allerg({ navigation }) {
    return (
        <View style={styles.container}>
       <View style={styles.imagecontainer}>    
        <Image
                source={require('../../../assets/image13.png')}
                style={styles.image}
            />
            <Text style={styles.title}>Allergique</Text>
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
    image: {
        position: 'absolute',
        // marginTop: 70,
        width: 95,
        height: 100,
        left: 129,
        top: 90,
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
   
   
    text: {
        color: 'black',
        fontSize: 22,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontWeight: 700,

    },
});

export default Allerg;
