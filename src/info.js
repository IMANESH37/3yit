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
  import { MaterialCommunityIcons } from '@expo/vector-icons';
  import AsyncStorage from '@react-native-async-storage/async-storage';

  function Info({route, navigation }) {



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

     
      const {id} = route.params;
 
 const [buttonData, setbuttonData] = React.useState([]);
 const [Data, setData] = React.useState([]);
 const [show, setshow] = React.useState(false);


 storeData = async() => {
setshow(true)
  return fetch('http://192.168.8.113:8000/api/user/'+id, {
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


 

        React.useEffect(() => {
          storeData()
  
          
            },[]);
          

    return (
    
    <View style={{flex: 1,backgroundColor:'white'}}>   


<ScrollView style={{backgroundColor:'#1763E8',
       display:'flex',
      
      paddingHorizontal:10,paddingVertical:0,backgroundColor:'white'}}>   

{ (buttonData.length>0&&buttonData[0].img ) && <Image 
 style={{
  width: 70,
  height: 70,
  marginLeft:'38%',
  marginTop:'3%',
  borderRadius: 100,
  backgroundColor: 'white',
  shadowColor: '#000',
  shadowOffset: {
    width: 0,
    height: 5,
  },
  shadowOpacity: 0.3,
  shadowRadius: 5.46,
}}
source={{ uri: `${buttonData[0].img}` }} /> } 
       <View style={{backgroundColor:'rgba(48, 119, 255, 0.18)',marginTop:'4%',borderRadius:35,height:'14%',display:'flex',justifyContent:'center',alignItems:'center'}}>
             <Text style={{fontFamily:'Montserrat_500Medium',fontSize:21}}>Cin :{ buttonData.length>0&& buttonData[0].cin} </Text>
         
       </View>

       <View style={{backgroundColor:'rgba(48, 119, 255, 0.18)',marginTop:'8%',borderRadius:35,height:'14%',display:'flex',justifyContent:'center',alignItems:'center'}}>
             <Text style={{fontFamily:'Montserrat_500Medium',fontSize:21}}>Nom : {buttonData.length>0&& buttonData[0].nom}</Text>
         
       </View>

       <View style={{backgroundColor:'rgba(48, 119, 255, 0.18)',marginTop:'8%',borderRadius:35,height:'14%',display:'flex',justifyContent:'center',alignItems:'center'}}>
             <Text style={{ffontFamily:'Montserrat_500Medium',fontSize:21}}>Email : {buttonData.length>0&& buttonData[0].email}</Text>
         
       </View>

       {(buttonData.length>0&&buttonData[0].sex) &&
       <View style={{backgroundColor:'rgba(48, 119, 255, 0.18)',marginTop:'8%',borderRadius:35,height:'14%',display:'flex',justifyContent:'center',alignItems:'center'}}>
             <Text style={{fontSize:25,fontFamily:'Montserrat_500Medium',fontSize:21}}>Sex : { buttonData.length>0&&buttonData[0].sex}</Text>
         
       </View>
      }
 {(buttonData.length>0&&buttonData[0].age) &&
       <View style={{backgroundColor:'rgba(48, 119, 255, 0.18)',marginTop:'8%',borderRadius:35,height:'14%',display:'flex',justifyContent:'center',alignItems:'center'}}>
             <Text style={{fontSize:25,fontFamily:'Montserrat_500Medium',fontSize:21}}>Age : {buttonData.length>0&& buttonData[0].age}</Text>
         
       </View>
  }

       <View style={{backgroundColor:'rgba(48, 119, 255, 0.18)',marginTop:'8%',borderRadius:35,height:'14%',display:'flex',justifyContent:'center',alignItems:'center'}}>
             <Text style={{fontSize:25,fontFamily:'Montserrat_500Medium',fontSize:21}}>tel : 0{buttonData.length>0&& buttonData[0].tel}</Text>
         
       </View>

</ScrollView>



<View style={styles.footer}>
<TouchableOpacity
                        onPress={() => navigation.navigate("Urgences")}
                    >
                 <Entypo name="home" size={28} color="white" />

                 </TouchableOpacity>
                 
                 <TouchableOpacity
                        onPress={() => navigation.navigate("Info",{id:idd} )}
                    >
  <FontAwesome name="user" size={28} color="white" />
            
            </TouchableOpacity>

                 <FontAwesome5 name="facebook-messenger" size={28} color="white" />
                 
                 <AntDesign name="logout" size={25} color="white" />
                 
                 
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
        paddingVertical: 20,
        paddingHorizontal: 20,
    },
    choicesContainer: {
    
      height:'82%',
      paddingVertical: 0,
      paddingHorizontal: 8,

    },
    footer: {
      height:'10%',
       backgroundColor:'#1763E8',
       display:'flex',
       flexDirection:'row',
       justifyContent:'space-around',
       alignItems:'center'
     
   },
});

export default Info;
