import React from 'react';
// import { ScrollView } from 'react-native';

import { ScrollView, View, TouchableOpacity, Image, Text, StyleSheet, ActivityIndicator } from 'react-native';
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
import AwesomeAlert from 'react-native-awesome-alerts';
function Typedetails({ route, navigation }) {



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


  help = () => {


    fetch('http://192.168.8.113:8000/api/demandeurg' + '/' + idddd + '/' + idu + '/' + nom + '/' + idtype, {
      method: "GET"

    })
      .then(response => response.json())
      .then(json => {
        console.log("ok");
        setshowalert(true)
        storeData2()
      })
      .catch(error => {
        console.error(error);
      });



  }
  const { idddd } = route.params;
  const { idtype } = route.params;
  const { id } = route.params;
  const { idu } = route.params;
  const { nb } = route.params;
  const { nom } = route.params;
  const [buttonData, setbuttonData] = React.useState([]);
  const [buttonData2, setbuttonData2] = React.useState([]);
  const [showAlert, setshowalert] = React.useState(false);
  const [Data, setData] = React.useState([]);
  const [show, setshow] = React.useState(true);

  React.useEffect(() => {
    storeData()

    setTimeout(() => { storeData2() }, 2000)


  }, []);




  storeData2 = () => {
    fetch('http://192.168.8.113:8000/api/ifdemande/' + idddd + '/' + buttonData[0].id_urgence + '/' + idtype, {
      method: "GET"

    })
      .then(response => response.json())
      .then(json => {
        console.log(json);
        setbuttonData2(json)
      })
      .catch(error => {
        console.error(error);
      });



  }


  storeData = () => {
    fetch('http://192.168.8.113:8000/api/typeurgence/' + id, {
      method: "GET"

    })
      .then(response => response.json())
      .then(json => {
        // console.log(json);
        setbuttonData(json)
        setshow(false)
      })
      .catch(error => {
        console.error(error);
      });



  }

  return (

    <View style={{ height: '100%', backgroundColor: 'white' }} >
      <View style={{ height: '8%', display: 'flex', flexDirection: 'row', alignItems: 'center', paddingHorizontal: 5, justifyContent: 'flex-end' }}>

        {buttonData2.length == 0 ? (
          <TouchableOpacity onPress={() => help()}>
            <MaterialCommunityIcons name="car-emergency" size={38} color="red" />

          </TouchableOpacity>
        ) : <Text> {buttonData2[0].accepte == null ? (<Text>Demande Envoye</Text>) : <Text style={{ textAlign: 'center', fontSize: 15 }} >En attente {buttonData2[0].accepté}</Text>}</Text>
        }



      </View>
      <ScrollView style={styles.choicesContainer}>

        <Text style={{ textAlign: 'center', fontSize: 25, fontFamily: 'Montserrat_500Medium', marginTop: '3%' }}>{buttonData.length > 0 && buttonData[0].nom}</Text>
        <View style={{
          marginTop: '9%', backgroundColor: '#E5E5E5', paddingVertical: 10,
          paddingHorizontal: 20, shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84
        }}>

          {buttonData.length > 0 &&
            <Text style={{ fontSize: 18, fontFamily: 'Montserrat_500Medium', color: '#171717' }}>{buttonData[0].text}</Text>
          }

        </View>
      </ScrollView>

      <View style={styles.footer}>

        <TouchableOpacity
          onPress={() => navigation.navigate("Urgences")}
        >
          <Entypo name="home" size={28} color="white" />

        </TouchableOpacity>


        <TouchableOpacity
          onPress={() => navigation.navigate("Info", { id: idddd })}
        >
          <FontAwesome name="user" size={28} color="white" />

        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate("Boitepatient", { id: idddd })}
        >
          <FontAwesome5 name="facebook-messenger" size={28} color="white" />
        </TouchableOpacity>
        

        <AntDesign name="logout" size={25} color="white" />

      </View>

      {show && (
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

      <AwesomeAlert
        show={showAlert}
        showProgress={false}
        title="Success"
        message="votre demande est envoyez"
        closeOnTouchOutside={true}
        closeOnHardwareBackPress={false}

        showConfirmButton={true}
        cancelText="No, cancel"
        confirmText="ok"
        confirmButtonColor="#DD6B55"

        onConfirmPressed={() => {
          setshowalert(false)
        }}
      />
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

    height: '82%',
    paddingVertical: 0,
    paddingHorizontal: 8,

  },
  footer: {
    height: '10%',
    backgroundColor: '#1763E8',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'

  },
});

export default Typedetails;
