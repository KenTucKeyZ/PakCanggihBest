import { View, Text } from 'react-native'
import React from 'react'
import {Tabs} from 'expo-router'
import Ionicons from '@expo/vector-icons/Ionicons';
export default function TabLayout() {
  return (
    <Tabs screenOptions={{tabBarActiveTintColor:'#f0f'}}
    >
        <Tabs.Screen name = 'home'
            options={{title:'Home',
            headerShown:false,
            tabBarIcon:({color})=><Ionicons name="home" size={24} color={color} />
            }}
        />
        <Tabs.Screen name = 'favorite'
             options={{title:'Favorite',
            headerShown:false,
            tabBarIcon:({color})=><Ionicons name="heart-sharp" size={24} color={color} />
            }}
        />
        <Tabs.Screen name = 'inbox'
             options={{title:'Inbox',
            headerShown:false,
            tabBarIcon:({color})=><Ionicons name="mail" size={24} color={color} />
            }}
        />
        <Tabs.Screen name = 'profile'
             options={{title:'Profile',
            headerShown:false,
            tabBarIcon:({color})=><Ionicons name="paw" size={24} color={color} />
            }}
        />
    </Tabs>
  )
}