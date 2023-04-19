import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image,StyleSheet,ScrollView } from 'react-native';

const data = [
  { id: 1, text: 'traumatique', icon: require('.././assets/image 7.png'),screen:'trauma' },
  { id: 2, text: 'Gastro/Uro ', icon: require('.././assets/image 8.png') },
  { id: 3, text: 'Gynécologique ', icon: require('.././assets/image 9.png') },
  { id: 4, text: 'Neurologiqueant', icon: require('.././assets/image 10.png') },
  { id: 5, text: 'Respiratoire ', icon: require('.././assets/image 11.png') },
  { id: 6, text: 'Cardiaque', icon: require('.././assets/image 12.png') },
  { id: 7, text: 'Allergique ', icon: require('.././assets/image 13.png') },
  { id: 8, text: 'Morsure/Piqure ', icon: require('.././assets/image 14.png') },
  { id: 9, text: 'Corps étranger', icon: require('.././assets/image 15.png') },
  { id: 10, text: 'Psychiatrique ', icon: require('.././assets/image 16.png') },
];

const ChoiceButton = ({ item, onPress }) => (
    <ScrollView contentContainerStyle={styles.fullcontainer}>
    <View style={styles.choicesContainer}>
  <TouchableOpacity onPress={onPress} style={styles.Button}>
    <Image source={item.icon} style={styles.image} />
    <Text style={styles.text}>{item.text}</Text>
  </TouchableOpacity>
  </View>
    </ScrollView>
);

const ChoicesPage = (navigation) => {
  const [selectedId, setSelectedId] = useState(null);

  const renderItem = ({ item }) => {
    const isSelected = item.id === selectedId;
    return (
      <ChoiceButton item={item} onPress={() => setSelectedId(item.id)} style={{ backgroundColor: isSelected ? '#eee' : '#fff' }} />
      
    );
  };

  return (
    <View  >
      
      <FlatList
      
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};
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
      width: 24,
       height: 24,
    },
    text: {
      color: 'black',
      fontSize: 20,
     
  
    },
  });

export default ChoicesPage;
