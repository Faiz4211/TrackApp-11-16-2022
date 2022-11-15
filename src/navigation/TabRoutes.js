import * as React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as screens from '../screens/index';
import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

export default function TabRoutes() {
    return (
        <Tab.Navigator screenOptions={{ headerShown: false }} initialRouteName={'TrackCreate'}>

            <Tab.Screen name='TrackList' component={screens.TrackListScreen}

                options={{
                    tabBarIcon: ({ focused }) => {

                        return <Icon
                            style={{
                                tintColor: focused ? 'blue' : 'black'
                            }}
                            name='md-list' size={30} color='#000000' />
                    }
                }}
            />

            <Tab.Screen name='TrackCreate' component={screens.CreateTrackScreen}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return <Icon
                            style={{
                                tintColor: focused ? 'blue' : 'black'
                            }}
                            name='md-create' size={30} color='#000000' />
                    }
                }}

            />

            <Tab.Screen name='Account' component={screens.AccountScreen}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return <Image
                            style={{
                                height: 30,
                                width: 30,
                                tintColor: focused ? 'blue' : 'black'
                            }}
                            source={require('../assets/images/account.png')} />
                    }
                }}
            />
        </Tab.Navigator>
    );
}