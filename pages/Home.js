import { View, Text } from 'react-native';
import React from 'react';
import NavBar from '../components/NavBar';

export const Home = ({route,navigation}) => {
    const {nom} = route.params || "";
  return (
    <View>
        <NavBar navigation={navigation}></NavBar>
        <Text>Composant Home</Text>
        <Text>le nom est : {nom}</Text>
    </View>
  );
};

export default Home;
