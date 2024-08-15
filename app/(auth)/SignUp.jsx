import { View, Text, ScrollView, Image, Alert } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import img from '../../assets/images/logo.png'
import FormField from '../../components/FormField.jsx'
import CustomBtn from '@/components/CustomBtn'
import { Link, router } from 'expo-router'
import { createUser } from '../../lib/appWrite.js'


const SignUp = () => {
  const [isSubmitting,setIsSubmitting]=useState(false)
  const [form,setForm]=useState({
    username:'',
    email:'',
    password:''
  })

  const submit=async()=>{
    if(!form.username || !form.email || !form.password){
      Alert.alert("Error","Plz fillout the all fields")
    }
setIsSubmitting(true)
try {
  const res=await createUser(form.email,form.password,form.username)
  router.replace('/Home')
} catch (error) {
  Alert.alert('Error',error)
}
finally{
  setIsSubmitting(false)
}
  }

  return (
    <SafeAreaView className='bg-black h-full ' >
      <ScrollView>
<View className='w-full h-full justify-center my-5 px-4 ' >
<Image source={img} resizeMode='contain' className='w-[115px] h-[34px] '  />
<Text className='text-white my-4 px-3 font-semibold text-2xl' >Sign Up To App</Text>

<FormField  
title='Username'
value={form.username}
handleChangeText={(e)=>setForm({...form,username:e})}
keyboardType="text"
/>

<FormField  
title='Email'
value={form.email}
handleChangeText={(e)=>setForm({...form,email:e})}
keyboardType="email-address"
/>
<FormField  
title='password'
value={form.password}
handleChangeText={(e)=>setForm({...form,password:e})}
keyboardType="password"
/>

<CustomBtn title='Sign-Up' style='mt-8' handlePress={submit} />

<View className='justify-center gap-3 flex-row pt-3' >
<Text className='text-yellow-500 font-mono '> have an account?</Text>
<Link href='/SignIn' className='text-white' >Sign-In</Link>
</View>

</View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignUp