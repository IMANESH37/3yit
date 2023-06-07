import React from 'react'
import { ScrollView, View, TouchableOpacity, Image, Text, StyleSheet, Button, ActivityIndicator } from 'react-native';



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
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Feather } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
function Medecinhome({ route, navigation }) {
  const [buttonData, setbuttonData] = React.useState([]);
  const [show, setshow] = React.useState(true);

  const { idd } = route.params;
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
    connect()
    console.log(idd)


  }, []);

  connect = async () => {
    return fetch('http://192.168.8.113:8000/api/connect/' + idd, {
      method: "GET"

    })
      .then(response => response.json())
      .then(json => {
        console.log(json);

      })
      .catch(error => {
        console.error(error);

      });


  }

  deconnect = async (id) => {
    return fetch('http://192.168.8.113:8000/api/deconnect/' + id, {
      method: "GET"

    })
      .then(response => response.json())
      .then(json => {
        console.log(json);

      })
      .catch(error => {
        console.error(error);

      });


  }
  accepte = async (id) => {

    return fetch('http://192.168.8.113:8000/api/medaccept/' + id, {
      method: "GET"

    })
      .then(response => response.json())
      .then(json => {
        console.log(json);
        storeData()
      })
      .catch(error => {
        console.error(error);

      });

  }

  refuse = async (id) => {

    return fetch('http://192.168.8.113:8000/api/medrefuse/' + id, {
      method: "GET"

    })
      .then(response => response.json())
      .then(json => {
        console.log(json);
        storeData()
      })
      .catch(error => {
        console.error(error);

      });

  }


  terminer = async (id) => {

    return fetch('http://192.168.8.113:8000/api/terminer/' + id, {
      method: "GET"

    })
      .then(response => response.json())
      .then(json => {
        console.log(json);
        storeData()
      })
      .catch(error => {
        console.error(error);

      });

  }





  storeData = async () => {

    return fetch('http://192.168.8.113:8000/api/medurg/' + idd, {
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
    <View style={{ height: '100%', backgroundColor: 'white' }}>

      <ScrollView style={styles.choicesContainer}>

        {buttonData.map((button, index) => {
          if (button.accepte == "accepter" || button.accepte == "attend") {
            return (
              <View>
                <View key={index} style={styles.Button} >
                  <Image
                    style={{
                      width: 40,
                      height: 40,
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
                    source={{ uri: `${button.img}` }} />
                  <Text style={styles.text}>Patient : {button.nom}</Text>
                  {(button.accepte == "attend") && (
                    <>
                      <Text style={styles.text2}>{button.created_at}</Text>
                    </>)}
                  {/* ------ accepter ---   */}
                  {(button.accepte == "accepter") && (
                    <>
                      <Text style={styles.text2}>L'Urgence : {button.nomurgence} </Text>
                      <Text style={styles.text2}>Le Type : {button.typeof}</Text>
                      <Text style={styles.text2}>{button.created_at}</Text>
                      <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', justifyContent: 'center' }}>
                      <MaterialIcons name="add-call" size={39} color="blue" />
                        <Ionicons name="chatbubble-ellipses-outline" size={39} color="blue"  onPress={() => {
                          if (button.accepte == "accepter") {
                            navigation.navigate("Message", { idm: button.idm, idu: button.idu, idp: button.idp, idpar: idd })
                          }

                        }} />

 
                      </View>


                    </>)}
                  {(button.accepte == "attend") && (
                    <>

                      <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', justifyContent: 'center' }}>
                        <Feather name="x-circle" size={45} color="red" onPress={() => { refuse(button.id) }} />
                        <MaterialIcons name="verified-user" size={45} color="green" onPress={() => { accepte(button.id) }} />
                      </View>
                    </>)}

                </View>
                {(button.accepte == "accepter") && (
                  <>

                    <Button title="Terminer consultation" onPress={() => { terminer(button.id) }} />
                  </>)}

              </View>
            )

            
          }



        })}
      </ScrollView>

      <View style={styles.footer}>

        <Entypo name="home" size={28} color="white" />
        <TouchableOpacity
          onPress={() => navigation.navigate("Info", { id: idd })}
        >
          <FontAwesome name="user" size={28} color="white" />

        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            deconnect(idd)
            navigation.navigate("Login")
          }}
        >
          <AntDesign name="logout" size={25} color="white" />

        </TouchableOpacity>
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
    </View>
  )
}
const styles = StyleSheet.create({
  fullcontainer: {
    flexGrow: 1,
    paddingVertical: 0,
    paddingHorizontal: 50,


  },
  footer: {
    height: '10%',
    backgroundColor: '#1763E8',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'

  },
  choicesContainer: {
    paddingVertical: 5,
    paddingHorizontal: 20,
    height: '90%'

  },
  Button: {
    margin: 5,
    backgroundColor: ' rgba(48, 119, 255, 0.18)',
    borderRadius: 10,
    paddingVertical: 25,
    paddingHorizontal: 12,
    flexDirection: 'column',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84
  },
  image: {
    marginRight: 15,
    width: 37,
    height: 37,
  },
  text: {
    color: 'black',
    fontSize: 17,
    fontFamily: 'Montserrat_500Medium'



  },
  text2: {
    color: 'gray',
    fontSize: 17,
    fontFamily: 'Montserrat_500Medium',
    textAlign: 'center'


  },
});

export default Medecinhome