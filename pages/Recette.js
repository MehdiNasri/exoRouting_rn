import { View, Text } from 'react-native';
import React from 'react';
import NavBar from '../components/NavBar';

export const Recette = ({navigation}) => {
  return (
    <View>
        <NavBar navigation={navigation}></NavBar>
      <Text>Page Recette</Text>
    </View>
  );
};

export default Recette;
