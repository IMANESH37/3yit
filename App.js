import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './src/login';
import HomeScreen from './src/home';
// import ChoicesPage from './src/test';
import UrgencePage from './src/la page des urgences';
import Traumatique from './src/lesurgences/traumatique/traumatique';
import Fracture from './src/lesurgences/traumatique/types/fracture/fracture';
import Entorse from './src/lesurgences/traumatique/types/entorse/entorse';
import Coupure from './src/lesurgences/traumatique/types/coupure/coupure';
import Respiratoire from './src/lesurgences/respiratoire/respiratoire';
import Crise from './src/lesurgences/respiratoire/soustypes/crise'; 
import Intoxication from './src/lesurgences/respiratoire/soustypes/crise'; 
import Arrêtrespiratoire from './src/lesurgences/respiratoire/soustypes/crise'; 
import Gastro from './src/lesurgences/gastro/gatsro';
import Gyneco from './src/lesurgences/gyneco/gyneco';
import Neuro from './src/lesurgences/neuro/neuro';
import Cardio from './src/lesurgences/cardiaque/cardiaque';
import Allerg from './src/lesurgences/allergique/allergique';
import Morsure from './src/lesurgences/morsure/morsure';
import Corps from './src/lesurgences/corpsetranger/corps';
import Psy from './src/lesurgences/psychiatrique/psy';
// import Urgence from './src/urgence';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator >
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />

         {/* la page des urgences */}
         <Stack.Screen name="urgence" component={UrgencePage} />

         {/* Traumatique et ses types  */}
        <Stack.Screen name="trauma" component={Traumatique} />
        <Stack.Screen name="fracturescreen" component={Fracture} />
        <Stack.Screen name="entorsescreen" component={Entorse} />
        <Stack.Screen name="coupurescreen" component={Coupure} />
        {/* Respiratoire et ses types */}
        <Stack.Screen name="Respiratoire" component={Respiratoire} />
        <Stack.Screen name="crise" component={Crise} />
        <Stack.Screen name="Arrêt respiratoire" component={Arrêtrespiratoire} />
        <Stack.Screen name="intoxication" component={Intoxication} />
       {/* Gastro Uro et ses types  */}
      <Stack.Screen name="gastro" component={Gastro} /> 
       {/* <Stack.Screen name="DouleurAbdo" component={DouleurAbdo} />
        <Stack.Screen name="Retention" component={Retention} />
        <Stack.Screen name="Testicouille " component={Testicouille} /> */}
        {/* gyneco et ses types */}
        <Stack.Screen name="gyneco" component={Gyneco} /> 
{/* Neurologiqueant et ses types  */}
<Stack.Screen name="neuro" component={Neuro} /> 
{/* Cardiaque */}

<Stack.Screen name="cardio" component={Cardio} /> 

<Stack.Screen name="allerg" component={Allerg} /> 
<Stack.Screen name="morsure" component={Morsure} /> 
<Stack.Screen name="corps" component={Corps} /> 

<Stack.Screen name="psy" component={Psy} /> 


      </Stack.Navigator>
    </NavigationContainer>
  );
};

