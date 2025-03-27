import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'

export default function JavaScriptComponente() {

    const nome = "Matheus"
    const idade = 25

    function CalcularMaiorIdade() {
        if (idade >= 18) {
            return <Text style = {styles.texto}>Você é maior de idade</Text>
        } else {
            return <Text style = {styles.texto}>Você é menor de idade</Text>
        }
    }

    function alerta() {
       alert("Atenção! Você é menor de idade");
    }

  return (
    <View style={styles.container}>
      <Text style = {styles.texto}>JavaScriptComponente</Text>
      <Text style = {styles.texto}>Nome: {nome}</Text>
      <Text style = {styles.texto}>idade: {idade}</Text>
      <Text style = {styles.texto}>idade + 10: {idade + 10}</Text>
        <CalcularMaiorIdade/>
        <Button title='Clique aqui' onPress = {alerta}>Clique aqui</Button>

    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'orange',
        borderWidth: 5,
        padding: 10,
        margin: 10,
        alignItems: 'center',
        borderRadius: 10,
        
    },
    texto: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'purple',
        
    },
    
})