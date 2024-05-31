import { Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const index = () => {
    return (
        <View className="flex flex-col items-center flex-1 justify-center gap-1" >
            <Text className="text-3xl mb-4">Welcome to YPK's RNP01</Text>
            <Text className="text-xl">Engineer: Yunus Parvez Khan</Text>
            <Text className="text-xl mb-4">Framework: React Native</Text>
            <Link href="/home" className='text-xl py-3 px-3 bg-yellow-500 text-gray-600'>Navigate to Home</Link>
        </View>
    )
}

export default index