import React from 'react';
import { ScrollView, View, TouchableOpacity, Image, Text,StyleSheet } from 'react-native';
// Create an array of objects containing the data for each button. 
//Each object should include an image source, a title, and a target screen name:
const buttonData = [
    { title: 'Traumatique', imageSource: require('.././assets/image7.png'), Screen: 'trauma' },
    { title: 'Gastro/Uro ', imageSource: require('.././assets/image8.png'), Screen: 'gastro' },
    { title: 'Gynécologique ', imageSource: require('.././assets/image9.png'), Screen: 'gyneco' },
    { title: 'Neurologiqueant', imageSource: require('.././assets/image10.png'), Screen: 'neuro' },
    { title: 'Respiratoire ', imageSource: require('.././assets/image11.png'), Screen: 'Respiratoire' },
    { title: 'Cardiaque', imageSource: require('.././assets/image12.png'), Screen: 'cardio' },
    { title: 'Allergique ', imageSource: require('.././assets/image13.png'), Screen: 'allerg' },
    { title: 'Morsure/Piqure ', imageSource: require('.././assets/image14.png'), Screen: 'morsure' },
    { title: 'Corps étranger', imageSource: require('.././assets/image15.png'), Screen: 'corps' },
    { title: 'Psychiatrique ', imageSource: require('.././assets/image16.png'), Screen: 'psy' },
];

// Créez un composant fonctionnel qui affiche la page déroulante et les boutons.
//  À l’intérieur du composant, mappez le tableau buttonData pour créer un bouton pour chaque 
//  objet. Utilisez TouchableOpacity pour créer un bouton cliquable et utilisez onPress prop 
//  pour accéder à l’écran cible à l’aide de navigation.navigate() :
function UrgencePage({ navigation }) {
    return (
        <ScrollView contentContainerStyle={styles.fullcontainer}>

            <View style={styles.choicesContainer}>
                {buttonData.map((button, index) => (
                    <TouchableOpacity
                        key={index}
                        style={styles.Button}
                        onPress={() => navigation.navigate(button.Screen)}
                    >
                        <Image source={button.imageSource} style={styles.image} />
                        <Text style={styles.text}>{button.title}</Text>
                    </TouchableOpacity>
                ))}
            </View>
        </ScrollView>
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
    },
    Button: {
        margin: 5,
        backgroundColor: ' rgba(48, 119, 255, 0.18)',
        borderRadius: 20,
        paddingVertical: 25,
        paddingHorizontal: 12,
        flexDirection: 'row',
        alignItems: 'center',
    },
    image: {
        marginRight: 15,
        width: 37,
        height: 34,
    },
    text: {
        color: 'black',
        fontSize: 20,
        fontWeight: 700,


    },
});

export default UrgencePage;
