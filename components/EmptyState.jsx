import { View, Text } from 'react-native'
import React from 'react'
import EvilIcons from '@expo/vector-icons/EvilIcons';
import CustomBtn from './CustomBtn.jsx'
import {router} from "expo-router"


const EmptyState = ({title,subtitle}) => {
  return (
    <View className='justify-center items-center px-4' >
<EvilIcons name="search" size={94}  color="yellow" className='w-[280px] h-[290px]' />
<Text className=" font-bold text-xl py-3 text-white">{title}</Text>
<Text className=" text-white py-3 font-semibold">{subtitle}</Text>

<CustomBtn title="Create Video" handlePress={()=>router.push('/create')} />
</View>
  )
}

export default EmptyState