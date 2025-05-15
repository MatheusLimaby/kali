
import React from 'react'
import {Ionicons} from '@expo/vector-icons'
import HomeScreen from '../Screens/HomeScreen'
import UserScreen from '../Screens/UserScreen'
import ProfileScreen from '../Screens/ProfileScreen'
import ConfigScreen from '../Screens/ConfigScreen'

import { createDrawerNavigator } from '@react-navigation/drawer'
import { NavigationContainer } from '@react-navigation/native'


const Drawer = createDrawerNavigator()

export default function DrawerRoutes() {
  return (

    <Drawer.Navigator>
        <Drawer.Screen name=''
         component={HomeScreen}
        
             />

        <Drawer.Screen name='ProfileScreen'
         component={ProfileScreen}
         options={{
            title: "Perfil",
             drawerIcon: ({color, size}) => <Ionicons name='person-circle-outline' color={color} size={size}></Ionicons>}}
             />

        <Drawer.Screen name='UserScreen'
         component={UserScreen}
         options={{
            title: "Usuário",
             drawerIcon: ({color, size}) => <Ionicons name='person-outline' color={color} size={size}></Ionicons>}}
             />
        <Drawer.Screen name='ConfigScreen'
         component={ConfigScreen}
         options={{
            title: "Usuário",
             drawerIcon: ({color, size}) => <Ionicons name='settings-outline' color={color} size={size}></Ionicons>}}
             />
    </Drawer.Navigator>

  )
}

