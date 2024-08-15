import { View, Text } from 'react-native'
import React from 'react'
import { Slot, Stack } from 'expo-router'
import GlobalProvider from '../context/GlobalProvider.js'

const _layout = () => {
  return (
    <GlobalProvider>
      <Stack>
        <Stack.Screen name='index'   options={{ headerShown: false }} />
        <Stack.Screen name='(auth)' options={{ headerShown: false }} />
        <Stack.Screen name='(tabs)' options={{ headerShown: false }} />
      </Stack>
    </GlobalProvider>
  )
}

export default _layout