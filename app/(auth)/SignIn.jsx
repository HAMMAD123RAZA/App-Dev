import { View, Text, ScrollView, Image, Alert } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import img from '../../assets/images/logo.png';
import FormField from '../../components/FormField.jsx';
import CustomBtn from '@/components/CustomBtn';
import { Signin } from '../../lib/appWrite.js';
import { router,Link } from 'expo-router';

const SignIn = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [form, setForm] = useState({
        email: '',        password: '',
    });

    const submit = async () => {
        if (!form.email || !form.password) {
            Alert.alert("Error", "Please fill out all fields");
            return;
        }
        setIsSubmitting(true);
        try {
            const res = await Signin(form.email, form.password);
            router.replace('/Home');
        } catch (error) {
            Alert.alert('Error', error.message);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <SafeAreaView className="bg-black h-full">
            <ScrollView>
                <View className="w-full h-full justify-center my-5 px-4">
                    <Image source={img} resizeMode="contain" className="w-[115px] h-[34px]" />
                    <Text className="text-white my-4 px-3 font-semibold text-2xl">Login To App</Text>
                    <FormField
                        title="Email"
                        value={form.email}
                        handleChangeText={(e) => setForm({ ...form, email: e })}
                        keyboardType="email-address"
                    />
                    <FormField
                        title="Password"
                        value={form.password}
                        handleChangeText={(e) => setForm({ ...form, password: e })}
                        keyboardType="default"
                        secureTextEntry
                    />
                    <CustomBtn title="Sign-In" style="mt-8" handlePress={submit} />
                    <View className="justify-center gap-3 flex-row pt-3">
                        <Text className="text-yellow-500 font-mono">Don't have an account?</Text>
                        <Link href="/SignUp" className="text-white">Sign-Up</Link>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default SignIn;
