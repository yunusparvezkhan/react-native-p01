import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const index = () => {
    return (
        <View style={styles.container}>
            <Text style={{ color: 'white' }}>Namaste World! 🙏</Text>
            <Link href="/profile" style={{ color: '#4dafff' }}>Go to Profile</Link>
        </View>
    )
}

export default index

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        backgroundColor: '#050505',
    }
})