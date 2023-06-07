import  React from 'react';
import { Text, View, StyleSheet } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from './src/login';
import UrgencePage from './src/urgences.js';
import Typeurgence from './src/typeurgence';
import TypeDeatils from './src/typedetails';
import Info from './src/info';
import Medecinhome from './src/Medecinhome';
import Boitepatient from './src/Boitepatient';
import Message from './src/Message';
const Stack = createStackNavigator();
export default function App() {


  return (
    
<NavigationContainer>
      <Stack.Navigator >
      <Stack.Screen name="Login" component={LoginScreen}
          options={{ title: 'Welcome',headerShown:false }}
        /> 

<Stack.Screen name="Urgences" component={UrgencePage} />
 <Stack.Screen name="Typeurgence" component={Typeurgence} />
  <Stack.Screen name="Typedetails" component={TypeDeatils} /> 
  <Stack.Screen name="Homemedecin" component={Medecinhome} /> 
  <Stack.Screen name="Boitepatient" component={Boitepatient} /> 
  <Stack.Screen name="Message" component={Message} /> 
  {/* <Stack.Screen name="details" component={details} />  */}

  <Stack.Screen name="Info" component={Info} />
      </Stack.Navigator>
    </NavigationContainer>


  )
}

const styles = StyleSheet.create({

});
