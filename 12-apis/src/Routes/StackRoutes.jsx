import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import HomeScreen from '../Screens/HomeScreen'
import UsuarioScreen from '../Screens/UsuarioScren'


const Stack = createStackNavigator()

export default function StackRoutes() {
  return (
    
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home"
         component={HomeScreen}
          options={{
            title:"Lista de Usuários",
            headerTitleAlign: "center"} }/>

        <Stack.Screen name="Usuario"
         component={UsuarioScreen}
          options={{
            title:"Usuário",
            headerTitleAlign: "center"}}/>
      </Stack.Navigator>


  )
}

