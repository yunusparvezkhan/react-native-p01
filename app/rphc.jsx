import { Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const Rphc = () => {
    return (
        <View className="flex items-center flex-1 justify-center text-gray-100 bg-gray-900" >
            <View className="items-center m-10" >
                <Text className="text-gray-100 text-8xl" >RPHC</Text>
                <Text className="text-gray-100 text-2xl" >Rampurhat, West Bengal</Text>
            </View>
            <Link href="/" className='py-3 px-8 bg-gray-800 text-gray-200 text-xl'>Go Back</Link>
        </View>
    )
}

export default Rphc