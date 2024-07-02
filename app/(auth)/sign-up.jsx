import { View, Text, ScrollView, Image } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

import { images } from '../../constants'
import FormField from '../../components/FormField'
import CustomButton from '../../components/CustomButton'
import { Link, router } from 'expo-router'

const SignUp = () => {
    const [form, setForm] = useState({
        name: '',
        email: '',
        password: '',
    })

    const [isSubmitting, setIsSubmitting] = useState(false);

    const submit = () => {
        router.push('/home')
    }

    return (
        <SafeAreaView className='bg-primary h-full w-full' >
            <ScrollView>
                <View className='w-full justify-center min-h-[85vh] px-4 my-6' >
                    <Image source={images.logo} resizeMode='contain' className='w-[115px] h-[35px]' />
                    <Text className='text-2xl text-gray-100 mt-10 font-semibold' >Sign Up to Aora</Text>
                    <FormField
                        title="Name"
                        placeholder={"Joe Doe"}
                        value={form.name}
                        handleChangeText={(e) => setForm({
                            ...form,
                            name: e
                        })}
                        otherStyles="mt-7"
                        keyboardType="name"
                    />
                    <FormField
                        title="Email"
                        placeholder={"you@example.com"}
                        value={form.email}
                        handleChangeText={(e) => setForm({
                            ...form,
                            email: e
                        })}
                        otherStyles="mt-7"
                        keyboardType="email-address"
                    />
                    <FormField
                        title="Password"
                        placeholder={"Type your password"}
                        value={form.password}
                        handleChangeText={(e) => setForm({
                            ...form,
                            password: e
                        })}
                        otherStyles="mt-7"
                        keyboardType="password"
                    />
                    <CustomButton
                        title="Sign Up"
                        handlePress={submit}
                        containerStyles="w-full mt-7"
                        isLoading={isSubmitting}
                    />
                    <View className='justify-center pt-5 flex-row gap-2' >
                        <Text className='text-lg text-gray-100'>Have an account already?</Text>
                        <Link href='/sign-in' className='text-secondary text-lg' >Sign In</Link>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default SignUp