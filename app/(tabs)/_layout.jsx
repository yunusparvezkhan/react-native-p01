import { View, Text, Image } from 'react-native'
import { Tabs, Redirect } from 'expo-router'
import { icons } from '../../constants'

const TabIcon = ({ icon, color, name, focused }) => {
    console.log(color)
    return (
        <View className="flex flex-col items-center gap-2">
            <Image
                source={icon}
                resizeMode="contain"
                tintColor={color}
                className={`w-6 h-6`}
            />
            <Text className={`${focused ? 'font-psemibold' : 'font-pregular'} text-xs`} style={{ color: color }} >
                {name}
            </Text>
        </View>
    )
}

const TabsLayout = () => {
    return (
        <>
            <Tabs
                screenOptions={{
                    tabBarShowLabel: false,
                    tabBarActiveTintColor: '#ffa001',
                    tabBarInactiveTintColor: '#cdcde0',
                    tabBarStyle: {
                        backgroundColor: '#161622',
                        borderTopWidth: 1,
                        borderTopColor: '#232523',
                        height: 84,
                    }
                }}
            >
                <Tabs.Screen
                    name='home'
                    options={{
                        title: 'Home',
                        headerShown: true,
                        tabBarIcon: ({ color, focused }) => (
                            <TabIcon
                                icon={icons.home}
                                color={color}
                                name="Home"
                                focused={focused}
                            />
                        )
                    }}
                />
                <Tabs.Screen
                    name='bookmark'
                    options={{
                        title: 'Bookmarks',
                        headerShown: true,
                        tabBarIcon: ({ color, focused }) => (
                            <TabIcon
                                icon={icons.bookmark}
                                color={color}
                                name="Bookmarks"
                                focused={focused}
                            />
                        )
                    }}
                />
                <Tabs.Screen
                    name='create'
                    options={{
                        title: 'Create',
                        headerShown: true,
                        tabBarIcon: ({ color, focused }) => (
                            <TabIcon
                                icon={icons.plus}
                                color={color}
                                name="Create"
                                focused={focused}
                            />
                        )
                    }}
                />
                <Tabs.Screen
                    name='profile'
                    options={{
                        title: 'Profile',
                        headerShown: true,
                        tabBarIcon: ({ color, focused }) => (
                            <TabIcon
                                icon={icons.profile}
                                color={color}
                                name="Profile"
                                focused={focused}
                            />
                        )
                    }}
                />
            </Tabs>
        </>
    )
}

export default TabsLayout