import { View, Text, Image, Pressable } from 'react-native'
import React, { useCallback } from 'react'
import { Link } from 'expo-router'
import { useOAuth } from '@clerk/clerk-expo'
import * as Linking from 'expo-linking'
import * as WebBrowser from 'expo-web-browser'
export const useWarmUpBrowser = () => {
  React.useEffect(() => {
    // Warm up the android browser to improve UX
    // https://docs.expo.dev/guides/authentication/#improving-user-experience
    void WebBrowser.warmUpAsync()
    return () => {
      void WebBrowser.coolDownAsync()
    }
  }, [])
}

WebBrowser.maybeCompleteAuthSession()


export default function LoginScreen() {

  useWarmUpBrowser();
  const { startOAuthFlow } = useOAuth({ strategy: 'oauth_google' });
  const onPress = useCallback(async () => {
    try {
      const { createdSessionId, signIn, signUp, setActive } = await startOAuthFlow({
        redirectUrl: Linking.createURL('/(tabs)/home', { scheme: 'myapp' }),
      })

      if (createdSessionId) {
      } else {
        // Use signIn or signUp for next steps such as MFA
      }
    } catch (err) {
      console.error('OAuth error', err)
    }
  }, [])

  return (
    <View style={{
      backgroundColor:'#fff',
      height:'100%'
    }}>
      <Image source={require('./../../assets/images/login.png')}
        style={{
          width:'100%',
          height:450
        }}
      />
      <View style={{
        padding:20,
        display:'flex',
        alignItems:'center'
      }}>
        <Text
        style={{
        fontFamily:'outfit-bold',
        fontSize:30,
        textAlign:'center'

      }}>Ready to make new friends?</Text>
      <Text style={{
        fontFamily:'outfit',
        fontSize:17,
        textAlign:'center',
        color:'#777'
      }}>Let's adopt the pet which you like and make their life happy</Text>

      <View style={{
        marginTop:40,
        marginBottom:50,
      }}>
      <Pressable
      onPress={onPress}
        style={{
          padding:14,
          backgroundColor:'#f09',
          width: 200,
          borderRadius:20
        }}>
        <Text
        style={{
          fontFamily:'outfit-medium',
          fontSize:20,
          textAlign:'center'
        }}>Get started</Text>
      </Pressable>
      </View>
      </View>
    </View>
  )
}