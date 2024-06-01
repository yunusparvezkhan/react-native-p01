import { Text, View, ScrollView, Image, ImageBase } from 'react-native'
import React from 'react'
import { router } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'
import { images } from '../constants/'
import CustomButton from '../components/CustomButton'
import { StatusBar } from 'expo-status-bar'

const App = () => {
    return (
        <SafeAreaView className="h-full bg-primary" >
            <ScrollView contentContainerStyle={{ height: '100%', justifyContent: 'center' }} className="w-full" >
                <View className="w-full items-center min-h-[85vh] px-4" >
                    <Image source={images.logo} className="w-[130px] h-[84]px" resizeMode='contain' />
                    <Text className="text-xl mb-2 text-gray-300 font-semibold">Welcome to YPK's RNP01</Text>
                    <Text className="text-xl text-gray-300">Engineer: Yunus Parvez Khan</Text>
                    <Text className="text-xl mb-8 text-gray-300">Framework: React Native</Text>
                    <Image
                        source={images.cards}
                        className="max-w--[380px] w-full h-[300px]"
                        resizeMode='contain'
                    />
                    <View className="relative mt-5 px-10" >
                        <Text className="text-4xl text-white font-bold text-center" >
                            Discover endless possibilities with{" "}
                            <Text className="text-yellow-500" >
                                Aora
                            </Text>
                        </Text>
                        <Image
                            source={images.path}
                            className="w-[120px] h-[13px] absolute -bottom-3 right-3"
                            resizeMode='contain'
                        />
                    </View>
                    <Text className="text-gray-100 text-sm font-pregular mt-7 text-center">Where creativity meets innovation: embark on a journey of limitless exploration with Aora</Text>
                    <CustomButton
                        title="Sign In"
                        handlePress={() => router.push('/sign-in')}
                        containerStyles="w-full mt-7"
                    />
                </View>
            </ScrollView>
            <StatusBar backgroundColor='#161622' style='light' />
        </SafeAreaView>
    )
}

export default App