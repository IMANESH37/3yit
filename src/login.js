
import React from 'react';
import { ScrollView } from 'react-native';

import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity, Image } from 'react-native';
// import { IMAGENAME } from '././assets/image17';

const LoginScreen = ({ navigation }) => {
    const [Email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    const handleLogin = () => {
        // handle login logic here
        navigation.navigate('Home');
    };

    return (
        <View style={styles.container}>
            <Image
                source={require('.././assets/logo.png')}
                style={styles.logo}
            />
            <Text style={styles.heading}>S'identifier</Text>
            <View style={styles.form}>
                <TextInput
                    style={styles.input}
                    placeholder="Email"
                    placeholderTextColor="rgba(0, 0, 0, 0.59)"
                />
                <TextInput
                    style={styles.input}
                    placeholder="Password"
                    placeholderTextColor="rgba(0, 0, 0, 0.59)"
                    secureTextEntry
                />
                <TouchableOpacity style={styles.button}  onPress={handleLogin}>
                    <Text style={styles.buttonText}>Connexion </Text>
                </TouchableOpacity>
                <Text  style={styles.mdp}>Mot de passe oublié?</Text>
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
        top: 45,
    },
    heading: {
        position: 'absolute',
        width:200,
        height:29,
        left: 154,
        top: 310,
       
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
        height:'10%',
    },
    input: {
        backgroundColor: '#D9D9D9',
        padding: 10,
        borderRadius: 35,
        marginBottom: 17,
    },
    button: {
        backgroundColor: '#3077FE',
        padding: 10,
        borderRadius: 35,
        alignItems: 'center',
        marginBottom: 17,
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
   mdp: {
   
    width: 170,
    height: 280,
    left: 78,
    // top: 800,
    
   
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: 16,
    lineHeight: 25,
    /* identical to box height, or 156% */
    
    textTransform: 'capitalize',
    
    color: '#3077FF',
    },
});

export default LoginScreen;
