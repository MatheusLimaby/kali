import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import HomeScreen from '../Screens/HomeScreen'
import ListaProdutosScreen from '../Screens/ListaProdutosScreen'
import ProdutoScreen from '../Screens/ProdutoScreen'



const Stack = createStackNavigator()

export default function StackRoutes({}) {
  return (
    
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home"
         component={HomeScreen}
          options={{
            title:"Tela_Inicial",
            headerTitleAlign: "center"} }/>

        <Stack.Screen name="ListaProdutos"
         component={ListaProdutosScreen}
          options={{
            title:"Lista de Produtos",
            headerTitleAlign: "center"}}/>
        <Stack.Screen name="Produtos"
         component={ProdutoScreen}
          options={{
            title:"Produto",
            headerTitleAlign: "center"}}/>
      </Stack.Navigator>


  )
}

