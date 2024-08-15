import { View, Text, SafeAreaView, FlatList, Image, RefreshControl } from 'react-native'
import React, { useState } from 'react'

import image from "../../assets/images/logo.png"
import SearchField from '../../components/SearchField'
import Trending from '../../components/Trending'
import EmptyState from '../../components/EmptyState'

const Home = () => {
  const [refresh, setrefresh] = useState(false)
  const onRef=async()=>{
    setrefresh(true)
    setrefresh(false)
  }
  return (
    <SafeAreaView className='bg-black h-full '>
      <FlatList 
        data={[]}
        keyExtractor={(item) => item.id.toString()} // Fixed keyExtractor
        renderItem={({item}) => (
          <Text className="text-3xl text-white">{item.id}</Text>
        )}
        ListHeaderComponent={() => (
          <View className="my-6 px-4 space-y-6">
            <View className="justify-between items-start flex-row mb-5">
              <View>
              <Text className=" font-semibold text-xl text-white">Welcome Back</Text>
              <Text className=" font-semibold text-xl text-white">To myApp</Text>
              </View>
              <Image source={image} resizeMode='contain' className='h-10 w-12 ' /> 
            </View>
            <SearchField/>
<View className='w-full flex-1 py-5'>
  <Text className='text-white font-bold text-xl' >
    Latest Video
  </Text>
  <Trending posts={[{id:1},{id:2},{id:3}?? []]} />
</View>
          </View>
          
        )}
        ListEmptyComponent={()=>(
            <EmptyState title='No videos found' subtitle='Upload Videos Asap' />
        )}
        refreshControl={<RefreshControl refreshing={refresh} onRefresh={onRef} />}
      />
    </SafeAreaView>
  )
}

export default Home
