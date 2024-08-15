import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const CustomBtn = ({ handlePress, isLoading, title,style }) => {
  return (
    <>
      <TouchableOpacity 
        onPress={handlePress} 
        activeOpacity={0.7} 
        className={`bg-yellow-600 rounded-xl px-5  justify-center items-center ${style} min-h-[51px] ${isLoading ? 'opacity-60' : ''}`} 
        disabled={isLoading} 
      >
        <Text className='font-bold text-white text-2xl'>{title}</Text>
      </TouchableOpacity>
    </>
  )
}

export default CustomBtn;
