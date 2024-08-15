import { View, Text, TextInput } from 'react-native'
import React from 'react'

const FormField = ({title,value,keyboardType,handleChangeText,placeholder}) => {
  return (
    <View className='space-y-2' >
      <Text className='text-base text-gray-100 font-bold ' >{title}</Text>
      <View className='border-2 w-full h-16 rounded-2xl px-4  bg-gray-700' >
    <TextInput required className='text-base text-white flex-1 font-bold' 
    value={value}
    placeholder={placeholder}
    onChangeText={handleChangeText}
    />

      </View>

    </View>
  )
}

export default FormField