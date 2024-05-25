import { Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const index = () => {
    return (
        <View className="flex items-center flex-1 justify-center text-gray-100 bg-gray-900" >
            <View className="m-4 items-center" >
                <Text className="text-gray-100 text-8xl" >SNHU</Text>
                <Text className="text-gray-100 text-2xl" >Manchester, New Hempshire</Text>
            </View>
            <Link href="/profile" style={{ color: '#4dafff' }}>Go to Profile</Link>
        </View>
    )
}

export default index