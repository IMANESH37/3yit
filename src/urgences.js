import React from 'react';
import { ScrollView, View, TouchableOpacity, Image, Text,StyleSheet ,ActivityIndicator} from 'react-native';




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
  import { AntDesign } from '@expo/vector-icons';
  import { FontAwesome } from '@expo/vector-icons';
  import { FontAwesome5 } from '@expo/vector-icons';
  import Shadow from 'react-native-shadow';
  import { Entypo } from '@expo/vector-icons'; 
  import AsyncStorage from '@react-native-async-storage/async-storage';

// Créez un composant fonctionnel qui affiche la page déroulante et les boutons.
//  À l’intérieur du composant, mappez le tableau buttonData pour créer un bouton pour chaque 
//  objet. Utilisez TouchableOpacity pour créer un bouton cliquable et utilisez onPress prop 
//  pour accéder à l’écran cible à l’aide de navigation.navigate() :
function UrgencePage({route, navigation }) {

    const [buttonData, setbuttonData] = React.useState([]);
    const [show, setshow] = React.useState(true);
 
    const {idd} = route.params;
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




 React.useEffect(() => {
        storeData()
     
     
   
          
          },[]);
        

       

          
      






    storeData = async() => {

     return  fetch('http://192.168.8.113:8000/api/urgences', {
      method: "GET"
  
    })
        .then(response => response.json())
        .then(json => {
          console.log(json);
          setbuttonData(json)
          setshow(false)
        })
        .catch(error => {
          console.error(error);
        setshow(false)
        });




        





}







    return (
        <View style={{height:'100%',backgroundColor:'white'}}>

            <ScrollView style={styles.choicesContainer}>
                {buttonData.map((button, index) => (
                
               <TouchableOpacity
                        key={index}
                        style={styles.Button}
                        onPress={() => navigation.navigate("Typeurgence",{id:button.id,iddd:idd })}
                    >
  
                        <Image  style={styles.image} source={{ uri: `${button.logo}` }} />
                        <Text style={styles.text}>{button.nom}</Text>
                    </TouchableOpacity>
            
                ))}
            </ScrollView>
            
            <View style={styles.footer}>
                 
            <Entypo name="home" size={28} color="white" />
            <TouchableOpacity
                        onPress={() => navigation.navigate("Info",{id:idd} )}
                    >
         <FontAwesome name="user" size={28} color="white" />
            
            </TouchableOpacity>

            <TouchableOpacity
                        onPress={() => navigation.navigate("Boitepatient",{id:idd} )}
                    >  
            <FontAwesome5 name="facebook-messenger" size={28} color="white" />
            </TouchableOpacity>
            <TouchableOpacity
                        onPress={() =>{ 
                          navigation.navigate("Login")}}
                    >
            <AntDesign name="logout" size={25} color="white" />
            
            </TouchableOpacity>
            </View>

            { show && (
        <>
          <View
            style={{
              position: 'absolute',
              top: '0%',
              left: '0%',
              width: '106%',
              height: '104%',
              backgroundColor: 'black',
              opacity: 0.5,
            }}></View>
          <ActivityIndicator
            style={{ position: 'absolute', top: '45%', left: '47%' }}
            size="large"
            color="#003EC5"
          />
        </>
      )}
        </View>
    );
}
const styles = StyleSheet.create({
    fullcontainer: {
        flexGrow: 1,
        paddingVertical: 0,
        paddingHorizontal: 50,
      
      
    },
    footer: {
     height:'10%',
      backgroundColor:'#1763E8',
      display:'flex',
      flexDirection:'row',
      justifyContent:'space-around',
      alignItems:'center'
    
  },
    choicesContainer: {
      paddingVertical: 5,
      paddingHorizontal: 20,
       height:'90%'
    
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
        height: 37,
    },
    text: {
        color: 'black',
        fontSize: 20,
        fontFamily:'Montserrat_500Medium' 
     


    },
});

export default UrgencePage;
