import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import Header from '../../components/Home/Header';
import Slider from '../../components/Home/Slider';
import PetListByCategory from '../../components/Home/PetListByCategory';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { Link } from 'expo-router';

export default function Home() {
  return (
    <View style={styles.container}>
      {/* Header */}
      <Header />

      {/* Slider */}
      <Slider />

      {/* Pet List by Category */}
      <PetListByCategory />

      {/* Add New Pet Option */}
      <Link href="/add-new-pet" style={styles.addNewPetContainer}>
        <MaterialCommunityIcons name="dog" size={24} color="#cfb264" />
        <Text style={styles.addNewPetText}>Add New Pet</Text>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    marginTop: 20,
  },
  addNewPetContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    marginTop: 20,
    backgroundColor: '#fffcc7',
    borderWidth: 1,
    borderColor: '#f6e3ba', // Corrected the typo here
    borderRadius: 15,
    borderStyle: 'dashed',
    justifyContent: 'center',
  },
  addNewPetText: {
    fontFamily: 'outfit-medium',
    color: '#cfb264',
    fontSize: 17,
    marginLeft: 8, // Used marginLeft to space the text away from the icon
  },
});
