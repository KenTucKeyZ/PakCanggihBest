import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useEffect } from 'react'
import { useLocalSearchParams, useNavigation } from 'expo-router'
import PetInfo from '../../components/PetDetails/Petinfo';
import PetSubInfo from '../../components/PetDetails/PetSubInfo';
import AboutPet from '../../components/PetDetails/AboutPet';
import OwnerInfo from '../../components/PetDetails/OwnerInfo';

export default function PetDetails() {
    const pet=useLocalSearchParams();
    const navigation=useNavigation();

    useEffect(()=>{
        navigation.setOptions({
            headerTransparent:true, 
            headerTitle:''
        })
    },[])
    return (
      <View>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }} showsVerticalScrollIndicator={false}>
        {/**PET INFO */}
        <PetInfo pet={pet} />
        {/**PET sub info */}
        <PetSubInfo pet={pet} />
        {/**About */}
        <AboutPet pet={pet} />
        {/**Owner details */}
        <OwnerInfo pet={pet}/>
        <View style={{
          height:70
        }}>

        </View>
        
      </ScrollView>
      {/**Adopt me button */}
      <View style={styles?.bottomCOntainer}>
        <TouchableOpacity style={styles.adoptBtn}>
          <Text style={{
            textAlign:'center',
            fontFamily:'outift-medium',
            fontSize:20
          }}>adopt me</Text>
        </TouchableOpacity>
        </View>
      </View>
    );
}

const styles = StyleSheet.create({
  adoptBtn:{
    padding:15,
    backgroundColor:'#acf777'
  },
  bottomCOntainer:{
    position: 'absolute',
    width:'100%',
    bottom:0
  }
});