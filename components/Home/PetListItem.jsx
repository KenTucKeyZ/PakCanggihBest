import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import {useRouter} from 'expo-router'
import MarkFav from '../MarkFav';

export default function PetListItem({pet}) {
    const router=useRouter();
  return (
    <TouchableOpacity 
    onPress={()=>router.push({
        pathname:'/pet-details',
        params:pet
    })}
     style={{
        padding:10,
        marginRight:15,
        backgroundColor:'#fff',
        borderRadius:10
    }}>

      <View style={{
        position:'absolute',
        zIndex:10,
        right:10,
        top:10
      }}>
        <MarkFav pet={pet} color={'#fff'}/>
      </View>
      <Image source={{uri:pet?.imageUrl}}
        style={{
            width:150,
            height:135,
            objectFit:'cover',
            borderRadius:10

        }}
      />

      <Text style={{
        fontFamily:'outfit-medium',
        fontSize:17
      }}>{pet.name}</Text>

      <View style={{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
      }}>
        <Text style={{
            color:'#f76'
        }}>{pet?.breed}</Text>
        <Text style={{
            fontFamily:'outfit',
            color:'#fff',
            backgroundColor:'#0ff000',
            paddingHorizontal:7,
            fontSize:11,
            borderRadius:10

        }}>{pet.age} Yrs</Text>
      </View>
    </TouchableOpacity>
  )
}