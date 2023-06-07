import React from 'react';
// import { ScrollView } from 'react-native';

import { ScrollView, View, TouchableOpacity, Image, Text,StyleSheet,ActivityIndicator } from 'react-native';
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
  import { Entypo } from '@expo/vector-icons'; 
function Typeurgence({route, navigation }) {


 const {id} = route.params;
 const {iddd} = route.params;
 const [buttonData, setbuttonData] = React.useState([]);
 const [Data, setData] = React.useState([]);
 const [show, setshow] = React.useState(true);



 
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
        



    storeData = () => {
          fetch('http://192.168.8.113:8000/api/urgences/'+id, {
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
        });


          fetch('http://192.168.8.113:8000/api/urgence/'+id, {
      method: "GET"
  
    })
        .then(response => response.json())
        .then(json => {
          console.log(json);
          setData(json)
          setshow(false)
        })
        .catch(error => {
          console.error(error);
        });
}



    return (
  <View >


<ScrollView style={styles.choicesContainer}>
        {Data.length>0 &&
<>
       <View style={styles.imagecontainer}>   
  
                     <Image style={styles.image} source={{ uri: `${Data[0].logo}` }} />
     
           </View>
           <Text style={styles.title}>{Data[0].nom}</Text></>
} 
            <View style={styles.choicesContainer}>
                {buttonData.map((button, index) => (
                    <TouchableOpacity
                        key={index}
                        style={styles.Button}
                        onPress={() => navigation.navigate("Typedetails",{idtype:button.id,id:button.id,nb:index,idddd:iddd,idu:id,nom:Data[0].nom})}
                    >
                        <Text style={styles.text}>{button.nom}</Text>
                    </TouchableOpacity>
                ))}
             </View>
</ScrollView>

<View style={styles.footer}>
<TouchableOpacity
                        onPress={() => navigation.navigate("Urgences")}
                    >
                 <Entypo name="home" size={28} color="white" />

                 </TouchableOpacity>
                 
                 <TouchableOpacity
                        onPress={() => navigation.navigate("Info",{id:iddd} )}
                    >
       <FontAwesome name="user" size={28} color="white" />
            
            </TouchableOpacity>
               
            <TouchableOpacity
                        onPress={() => navigation.navigate("Boitepatient",{id:iddd} )}
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
        paddingVertical: 10,
        paddingHorizontal: 10,
    },
    imagecontainer: {
     
       display:'flex',
      flexDirection:'row',
        justifyContent: 'center',
        paddingVertical:'5%'
      

    },
    footer: {
      height:'10%',
       backgroundColor:'#1763E8',
       display:'flex',
       flexDirection:'row',
       justifyContent:'space-around',
       alignItems:'center'
     
   },
    title:{
        padding: 15,
       
       textAlign:'center',
       fontFamily:'Montserrat_500Medium' ,
       
        fontSize: 22,
        
    },
    choicesContainer: {
   backgroundColor:'white',
      height:'90%',
      paddingVertical: 5,
      paddingHorizontal: 20,


    },
    image: {
        
        // marginTop: 70,
        width: 130,
        height: 130,
    
    },
    Button: {
        margin: 9,
        backgroundColor: 'rgba(48, 119, 255, 0.18)',
        borderRadius: 26,
        paddingVertical: 25,
        paddingHorizontal: 12,
        flexDirection: 'row',
        alignItems: 'center',
    },
   
   
    text: {
        color: 'black',
        fontSize: 22,
        textAlign:'center',
       fontFamily:'Montserrat_500Medium' ,
        
        width:'100%'

    },
});

export default Typeurgence;
