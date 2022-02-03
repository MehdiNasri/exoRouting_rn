import { View, Text } from 'react-native';
import React from 'react';
import NavBar from '../components/NavBar';

export const MonCompte = ({navigation}) => {
  return (
    <View>
        <NavBar navigation={navigation}></NavBar>
      <Text>Page Mon compte</Text>
    </View>
  );
};

export default MonCompte;
