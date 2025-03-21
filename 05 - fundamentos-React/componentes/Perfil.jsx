import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Perfil(props) {
    console.log(props)
  return (
    <View>
      <Text>Perfil</Text>
      <Text>Nome: {props.nome}</Text>
      <Text>Idade: {props.idade}</Text>
      <Text>ensino: {props.escolaridade}</Text>
    </View>
  )
}

const styles = StyleSheet.create({})