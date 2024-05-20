import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from '../Screens/Home';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import Profile from '../Screens/Profile';
import Search from '../Screens/Search';
import { CoordinatesProvider } from '../Context/CoordinatesContext';

export default function TabNavigation() {
    const Tab = createBottomTabNavigator();
  return (
    <CoordinatesProvider>
        <Tab.Navigator screenOptions={{
            headerShown: false,
        }}>
            {<Tab.Screen name="Home" component={Home}
            options={{
                tabBarLabel: 'Home',
                tabBarIcon: ({color, size}) => (
                    <Ionicons name="home" color={color} size={size} />
                ),
            }}/>}
            <Tab.Screen name="Search" component={Search}
            options={{
                tabBarLabel: 'Search',
                tabBarIcon: ({color, size}) => (
                    <AntDesign name="search1" color={color} size={size} />
                ),
            }}/> 
            <Tab.Screen name="Profile" component={Profile} 
            options={{
                tabBarLabel: 'Profile',
                tabBarIcon: ({color, size}) => (
                    <FontAwesome name="user-circle" color={color} size={size} />
                ),
            }}/>
        </Tab.Navigator>
    </CoordinatesProvider>
  )
}