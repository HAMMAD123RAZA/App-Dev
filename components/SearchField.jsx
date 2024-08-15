import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import EvilIcons from '@expo/vector-icons/EvilIcons';



const SearchField = ({title,value,keyboardType,handleChangeText,placeholder}) => {
  return (
    <View className='space-y-2' >
      <Text className='text-base text-gray-100 font-bold ' >{title}</Text>
      <View className='border-2 w-full h-16 rounded-2xl px-4  bg-gray-700' >
    <TextInput required className='text-base text-white flex-1 font-bold' 
    value={value}
    placeholder='Search For Videos'
    onChangeText={handleChangeText}
    />

      </View>

<TouchableOpacity>
<EvilIcons name="search" size={24} color="white"  />
</TouchableOpacity>
    </View>
  )
}

export default SearchField