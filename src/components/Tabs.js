import React from 'react'
import {
    StyleSheet,
    Text,
    View
} from 'react-native'


import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Icon from 'react-native-vector-icons/Ionicons'


import Home from '../screens/Home';
import Explore from '../screens/Explore';
import Cart from '../screens/Cart';
import Account from '../screens/Account';
import Offers from '../screens/Offers';


const Tab = createBottomTabNavigator();

const Tabs = () => {
    return (
        <Tab.Navigator screenOptions={{
            headerShown: false,
            tabBarStyle: {
                backgroundColor: '#FFF',
                height: 56,
            },

        }}>

            <Tab.Screen name='Home' component={Home}
                options={{
                    tabBarShowLabel: false,
                    tabBarIcon: ({ focused }) => (
                        <View style={styles.view}>

                            <Icon name='home-outline'
                                size={24}
                                color={focused ? '#40BFFF' : '#9098B1'}
                            />
                            <Text style={{
                                ...styles.text,
                                color: focused ? '#40BFFF' : '#9098B1'
                            }}>
                                Home
                            </Text>
                        </View>
                    )
                }}
            />
            
            <Tab.Screen name='Explore' component={Explore}
                options={{
                    tabBarShowLabel: false,
                    tabBarIcon: ({ focused }) => (
                        <View style={styles.view}>

                            <Icon name='search-outline'
                                size={24}
                                color={focused ? '#40BFFF' : '#9098B1'}
                            />
                            <Text style={{
                                ...styles.text,
                                color: focused ? '#40BFFF' : '#9098B1'
                            }}>
                                Explore
                            </Text>
                        </View>
                    )
                }}
            />

            <Tab.Screen name='Cart' component={Cart}
                options={{
                    tabBarShowLabel: false,
                    tabBarIcon: ({ focused }) => (
                        <View style={styles.view}>

                            <Icon name='cart-outline'
                                size={24}
                                color={focused ? '#40BFFF' : '#9098B1'}
                            />
                            <Text style={{
                                ...styles.text,
                                color: focused ? '#40BFFF' : '#9098B1'
                            }}>
                                Cart
                            </Text>
                        </View>
                    )
                }}
            />

            <Tab.Screen name='Offers' component={Offers}
                options={{
                    tabBarShowLabel: false,
                    tabBarIcon: ({ focused }) => (
                        <View style={styles.view}>

                            <Icon name='pricetag-outline'
                                size={24}
                                color={focused ? '#40BFFF' : '#9098B1'}
                            />
                            <Text style={{
                                ...styles.text,
                                color: focused ? '#40BFFF' : '#9098B1'
                            }}>
                                Offers
                            </Text>
                        </View>
                    )
                }}
            />

            <Tab.Screen name='Account' component={Account}
                options={{
                    tabBarShowLabel: false,
                    tabBarIcon: ({ focused }) => (
                        <View style={styles.view}>

                            <Icon name='person-outline'
                                size={24}
                                color={focused ? '#40BFFF' : '#9098B1'}
                            />
                            <Text style={{
                                ...styles.text,
                                color: focused ? '#40BFFF' : '#9098B1'
                            }}>
                                Account
                            </Text>
                        </View>
                    )
                }}
            />
   

        </Tab.Navigator>
    )
}

export default Tabs

const styles = StyleSheet.create({
    view: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 10,
        fontFamily: 'Poppins-Bold',
    }
})