
import React from 'react';
// import { ScrollView } from 'react-native';

import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';


const  HomeScreen = ({ navigation }) => {
    const next = () => {
        navigation.navigate('urgence');
    };

    return (
        <View style={styles.container}>
            <Image
                source={require('.././assets/logo.png')}
                style={styles.logo}
            />
            <Text style={styles.heading}>Veuillez choisir votre cas</Text>
            <View style={styles.form}>

                <TouchableOpacity style={styles.button1} onPress={next}>
                    <Text style={styles.buttonText1}>Cas d'urgence </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button2} >
                    <Text style={styles.buttonText2}>Visiteur </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        position: 'absolute',
        marginTop: 0,
        width: 199,
        height: 225,
        left: 80,
        right:0,
        top: 70,

    },
    heading: {
        padding: 15,
        fontStyle: 'normal',
        fontWeight: 400,
        fontSize: 22,
        lineHeight: 25,
        /* or 114% */
        color: '#000000',
        textTransform: 'capitalize',
        marginBottom: 20,
    },
    form: {
        width: '80%',
    },
    input: {
        backgroundColor: '#D9D9D9',
        padding: 10,
        borderRadius: 35,
        marginBottom: 10,
    },
    button1: {
        position:'absolute',
        boxsizing: 'border-box',
        backgroundColor: '#F21C1C',
        padding: 10,
        marginTop: 26,
        borderRadius: 32,
        alignItems: 'center',
        marginBottom: 29,
        width:300,
        height:45,
        top:10,
        
    },
    button2: {
        position:'absolute',
        boxsizing: 'border-box',
        backgroundColor: '#40FE30',
        padding: 10,
        marginTop: 26,
        borderRadius: 32,
        alignItems: 'center',
        width:300,
        height:45,
       top:80,
       
       
        
    },
    buttonText1: {
        color: '#FFFFFF',
        fontWeight: 'bold',
        
        
    },
    buttonText2: {
        color: '#000000',
        fontWeight: 'bold',
    },
});

export default HomeScreen;
