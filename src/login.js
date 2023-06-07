
import React from 'react';
import { ScrollView } from 'react-native';

import { View, Text, TextInput, Button, StyleSheet, SafeAreaView,TouchableOpacity, Image,ActivityIndicator ,KeyboardAvoidingView,ImageBackground} from 'react-native';
import AwesomeAlert from 'react-native-awesome-alerts';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';

import {
    useFonts,
    Montserrat_100Thin,
    Montserrat_200ExtraLight,
    Montserrat_300Light,
    Montserrat_400Regular,
    Montserrat_500Medium,
    Montserrat_600SemiBold,
    Montserrat_700Bold,
    Montserrat_800ExtraBold,
    Montserrat_900Black,
    Montserrat_100Thin_Italic,
    Montserrat_200ExtraLight_Italic,
    Montserrat_300Light_Italic,
    Montserrat_400Regular_Italic,
    Montserrat_500Medium_Italic,
    Montserrat_600SemiBold_Italic,
    Montserrat_700Bold_Italic,
    Montserrat_800ExtraBold_Italic,
    Montserrat_900Black_Italic,
  } from '@expo-google-fonts/montserrat';

  import AsyncStorage from '@react-native-async-storage/async-storage';





const LoginScreen = ({ navigation }) => {
  
      const [Email, onChangeEmail] = React.useState("f");
  const [Password, onChangepassword] = React.useState("f");
const [show, setshow] = React.useState(false);
  const [showAlert, setshowalert] = React.useState(false);
    let [fontsLoaded] = useFonts({
        Montserrat_100Thin,
        Montserrat_200ExtraLight,
        Montserrat_300Light,
        Montserrat_400Regular,
        Montserrat_500Medium,
        Montserrat_600SemiBold,
        Montserrat_700Bold,
        Montserrat_800ExtraBold,
        Montserrat_900Black,
        Montserrat_100Thin_Italic,
        Montserrat_200ExtraLight_Italic,
        Montserrat_300Light_Italic,
        Montserrat_400Regular_Italic,
        Montserrat_500Medium_Italic,
        Montserrat_600SemiBold_Italic,
        Montserrat_700Bold_Italic,
        Montserrat_800ExtraBold_Italic,
        Montserrat_900Black_Italic,
      });
    

    const handleLogin = () => {
        // handle login logic here
    //  navigation.navigate('urgence');

setshow(true)

fetch('http://192.168.8.113:8000/api/login/'+Email+'/'+Password, {
      method: "GET"
  
    })
        .then(response => response.json())
        .then(json => {
          setshow(false)
          if(json==false){ 
                console.log("walloo");
                setshowalert(true)
          }
      else{
        console.log(json);
     if(json[0].id_p!=null){
navigation.navigate('Urgences',{idd:json[0].id_p});
}
else {
  navigation.navigate('Homemedecin',{idd:json[0].id_me});
}
}
       //   setbuttonData(json)
         // setshow(false)
        })
        .catch(error => {
          console.error(error);
              setshow(false)
        });





        
    };

    return (
      <View style={styles.container}>
      <Image source={require('../assets/logo.png')} style={styles.logo} />
      <Text style={styles.title}>Welcome to the App</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        keyboardType="email-address"
        autoCapitalize="none"
        onChangeText={onChangeEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        autoCapitalize="none"
        onChangeText={onChangepassword}
      />
      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.loginButtonText}>Log In</Text>
      </TouchableOpacity>
    
  { show && (
        <>
          <View
            style={{
              position: 'absolute',
              top: '0%',
              left: '0%',
              width: '286%',
              height: '204%',
              backgroundColor: 'black',
              opacity: 0.5,
            }}></View>
          <ActivityIndicator
            style={{ position: 'absolute', top: '60%', left: '65%' }}
            size="large"
            color="#003EC5"
          />
        </>
      )}
         <AwesomeAlert
          show={showAlert}
          showProgress={false}
          title="Error"
          message="email or password incorrect"
          closeOnTouchOutside={true}
          closeOnHardwareBackPress={false}
          
          showConfirmButton={true}
          cancelText="No, cancel"
          confirmText="try again"
          confirmButtonColor="#DD6B55"
         
          onConfirmPressed={() => {
            setshowalert(false)
          }}
        />


           
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding:scale(50),
 height:'90%',


  },
  logo: {
    width: scale(90),
    height: scale(100),
    marginBottom: 0,
  },
  title: {
    fontSize: scale(25),
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: scale(40),
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    paddingLeft: 10,
  },
  loginButton: {
    width: '100%',
    height: scale(50),
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginTop: 10,
  },
  loginButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },

});

export default LoginScreen;
