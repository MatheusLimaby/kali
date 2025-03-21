import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function JavaSecriptComponents() {
    const nome = "Matheus"
    const idade = 19

    function exibirNome() {
        return nome
    }

    function exibirIdade() {
        return idade
    }
  return (
    <View>
      <Text>JavaSecriptComponents</Text>
      <Text>nome: {exibirNome()}</Text>
      <Text>idade: {exibirIdade()}</Text>
    </View>
  )
}

const styles = StyleSheet.create({})