
import React from 'react'
import {Ionicons} from '@expo/vector-icons'
import EscudoScreens from './Screens/EscudoScreens'
import JogadoresScreens from './Screens/JogadoresScreens'
import TitulosScreens from './Screens/TitulosScreens'

import { createDrawerNavigator } from '@react-navigation/drawer'
import { NavigationContainer } from '@react-navigation/native'


const Drawer = createDrawerNavigator()

export default function DrawerRoutes() {
  return (

    <Drawer.Navigator>
        <Drawer.Screen name='EscudoScreen'
         component={EscudoScreens}
          options={{
            title: "Escudos",
             drawerIcon: ({color, size}) => <Ionicons name='shield' color={color} size={size}></Ionicons>}}
             />

        <Drawer.Screen name='JogadoresScreen'
         component={JogadoresScreens}
         options={{
            title: "Jogadores",
             drawerIcon: ({color, size}) => <Ionicons name='person-circle-outline' color={color} size={size}></Ionicons>}}
             />

        <Drawer.Screen name='TitulosScreen'
         component={TitulosScreens}
         options={{
            title: "Titulos",
             drawerIcon: ({color, size}) => <Ionicons name='trophy' color={color} size={size}></Ionicons>}}
             />

    </Drawer.Navigator>

  )
}

