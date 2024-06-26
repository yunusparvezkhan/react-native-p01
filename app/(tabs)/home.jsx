import { View, Text } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const Home = () => {
    return (
        <View className="flex flex-row items-center flex-1 justify-center text-gray-100 bg-gray-900 gap-4" >
            <Link href="/snhu" className='py-16 w-32 bg-gray-800 text-gray-200 text-center text-2xl'>SNHU</Link>
            <Link href="/rphc" className='py-16 w-32 bg-gray-800 text-gray-200 text-center text-2xl'>RPHC</Link>
        </View>
    )
}

export default Home