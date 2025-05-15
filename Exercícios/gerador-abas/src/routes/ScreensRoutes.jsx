
import React from 'react'
import {Ionicons} from '@expo/vector-icons'
import JogoDoBichoScreen from '../Screens/JogoDoBichoScreen'
import MegaSenaScreen from '../Screens/MegaSenaScreen'

import { createDrawerNavigator } from '@react-navigation/drawer'
import { NavigationContainer } from '@react-navigation/native'


const Drawer = createDrawerNavigator()

export default function DrawerRoutes() {
  return (

    <Drawer.Navigator>
        <Drawer.Screen name='JogoDoBichoScreen'
         component={JogoDoBichoScreen}

             />

        <Drawer.Screen name='MegaSenaScreen'
         component={MegaSenaScreen}
         
           
             />

    </Drawer.Navigator>

  )
}

