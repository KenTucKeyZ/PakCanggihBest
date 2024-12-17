import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';
export default function OwnerInfo({pet}) {

  return (
    <View style={styles.container }>
    <View style={{
        display:'flex',
        flexDirection:'row',
        gap:20

    }}>
      <Image source={{uri:pet?.userImage}}
        style={{
            width:50,
            height:50,
            borderRadius:99,
            borderColor:'#000'

        }}
      />
      <View>
        <Text style={{
            fontFamily:'outfit-medium',
            fontSize:17

        }}>{pet?.username}</Text>
        <Text style={{
            fontFamily:'outfit',
            color: '#999'
        }}>Pet Owner</Text>
      </View>
      </View>
      <Ionicons name="send" size={24} color="black" />
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        marginHorizontal:20,
        paddingHorizontal:20,
        display:'flex',
        flexDirection:'row',
        alignItems: 'center',
        gap:20,
        borderWidth: 1,
        borderRadius:15,
        padding:20,
        backgroundColor:'#fff',
        justifyContent:'space-between'
    }
});