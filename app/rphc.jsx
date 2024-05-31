import { Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const Rphc = () => {
    return (
        <View className="flex items-center flex-1 justify-center text-gray-100 bg-gray-900" >
            <View className="items-center m-10" >
                <Text className="text-gray-100 text-6xl text-center mt-4 mb-2" >Rampurhat</Text>
                <Text className="text-gray-100 text-6xl text-center mb-4" >College</Text>
                <Text className="text-gray-100 text-2xl mb-2" >Rampurhat, West Bengal</Text>
                <Text className="text-gray-100 text-3xl" >India 🇮🇳</Text>
            </View>
            <Link href="/home" className='py-3 px-8 bg-gray-800 text-gray-200 text-xl'>Go Back</Link>
        </View>
    )
}

export default Rphc