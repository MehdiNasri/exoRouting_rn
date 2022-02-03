import { View, Text, TouchableOpacity, Pressable, StyleSheet, Button } from 'react-native';
import React from 'react';

export const NavBar = ({navigation}) => {
    const handleHome = () =>{
        navigation.navigate("Home",{ nom :"Mehdi"})
    }
    const handleMonCompte = () =>{
        navigation.navigate("MonCompte")
    }
    const handleRecette = () =>{
        navigation.navigate("Recette")
    }
    const handleBack=()=>{
        navigation.goBack();
    }
   
  return (
    <View>
      <Text>Ma NavBar</Text>
      <Pressable 
      style={({pressed}) => ({backgroundColor: pressed? "red" :"green"}) } 
      onPress={handleHome}
      >
          <Text>page Home</Text>
      </Pressable>
      <Pressable 
      style={({pressed}) => ({backgroundColor: pressed? "red" :"green"}) } 
      onPress={handleMonCompte}
      >
          <Text>page MonCompte</Text>
      </Pressable>
      <Pressable 
      style={({pressed}) => ({backgroundColor: pressed? "red" :"green"}) } 
      onPress={handleRecette}
      >
          <Text>page Recette</Text>
      </Pressable>
      <Button title='retour' onPress={handleBack}></Button>
    </View>
  );
};

export default NavBar;
