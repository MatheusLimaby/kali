
import React from 'react'
import JogoDoBichoScreen from '../Screens/JogoDoBichoScreen'
import MegaSenaScreen from '../Screens/MegaSenaScreen'
import {Ionicons} from '@expo/vector-icons'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { NavigationContainer } from '@react-navigation/native'


const Drawer = createDrawerNavigator()

export default function DrawerRoutes() {
  return (

    <Drawer.Navigator>
        <Drawer.Screen name='JogoDoBichoScreen'
         component={JogoDoBichoScreen}
            options={{
            drawerIcon: ({color, size}) => <Ionicons name='bug-outline'
             color={color} size={size}></Ionicons>}}

             />

        <Drawer.Screen name='MegaSenaScreen'
         component={MegaSenaScreen}
         options={{
            drawerIcon: ({color, size}) => <Ionicons name='cash-outline'
             color={color} size={size}></Ionicons>}}
         
           
             />

    </Drawer.Navigator>

  )
}

