import { View, Text, Image } from 'react-native'
import { Tabs, Redirect } from 'expo-router'
import { icons } from '../../constants'

const TabIcon = ({ icon }) => {
    return (
        <View>
            <Image
                source={icon}
            />
        </View>
    )
}

const TabsLayout = () => {
    return (
        <>
            <Tabs>
                <Tabs.Screen
                    name='home'
                    options={{
                        title: 'Home',
                        headerShown: false,
                        tabBarIcon: ((color, focused) => (
                            <TabIcon
                                icon={icons.home}
                            />
                        ))
                    }}
                />
            </Tabs>
        </>
    )
}

export default TabsLayout