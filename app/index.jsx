import { View, Text } from 'react-native';
import React from 'react';
import { Redirect } from 'expo-router';
import { useUser } from '@clerk/clerk-expo';

export default function Index() {
  const { user, isLoaded } = useUser(); // Ensure we check if user data is loaded

  // Show a loading state while waiting for the user to load
  if (!isLoaded) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Loading...</Text>
      </View>
    );
  }

  // Redirect based on authentication status
  if (user) {
    return <Redirect href={'/(tabs)/home'} />;
  }

  return <Redirect href={'/login'} />;
}
