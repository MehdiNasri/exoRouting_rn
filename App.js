import { View, Text } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './pages/Home';
import Recette from './pages/Recette';
import MonCompte from './pages/MonCompte';

const Stack = createNativeStackNavigator();

export const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name='Home' component={Home}/>
        <Stack.Screen name='MonCompte' component={MonCompte}/>
        <Stack.Screen name='Recette' component={Recette}/>
      </Stack.Navigator> 
    </NavigationContainer>
  );
};

export default App;
