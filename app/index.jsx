import { View, Text, ImageBackground, StatusBar, ScrollView } from 'react-native';
import React from 'react';
// import bg from '@/assets/images/adaptive-icon.png';
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Link , Redirect, router } from 'expo-router';
import imgae from '../assets/images/logo.png'
import image2 from '../assets/images/cards.png'
import CustomBtn from '../components/CustomBtn'

import { Image } from 'react-native';
import { useRouter } from 'expo-router';
import { useGlobalContext } from '@/context/GlobalProvider';


const Index = () => {
  const router = useRouter();
  const {isLoading,isLoggedIn}=useGlobalContext()
if(!isLoading || isLoggedIn ) return <Redirect href='/Home' />
  return (  
    
    <SafeAreaView className='bg-black h-full'>
{/* <Redirect href='/Home'     /> */}
      <ScrollView  contentContainerStyle={{ height: '100%' }}>
        <View className='w-full h-[86vh] justify-center items-center px-5'>
          <Image
            resizeMode='contain'
            className='w-[120px] h-[89px] rounded'
            source={imgae} 
          />
          <Image
            resizeMode='contain'
            className='max-w-[380px] h-[289px] rounded'
            source={image2} 
          />
          <View className='relative mt-5'>
            <Text className='text-center font-bold text-2xl text-white'>
              Discover Endless possibilities with{' '}
              <Text className='text-yellow-500'>Aora</Text>
            </Text>
            <Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, vel consectetur! Quidem ipsum cupiditate voluptatibus molestiae volupt tis animi rerum debitis.
            </Text>
            <CustomBtn 
              title='Continue Here' 
              handlePress={() => router.push('/SignIn')} 
              isLoading={false}
              style="mt-7"
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default Index;
