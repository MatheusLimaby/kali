import { StyleSheet, Text, View, List, Image } from 'react-native'
import React from 'react'

export default function Atleta(props) {

    const {nome, idade, numero, imagem} = props
  return (
    <View style={styles.container}>
      <Text style = {styles.texto}>Atleta</Text>
      <Text style = {styles.texto}>Nome:{nome}</Text>
      <Text style = {styles.texto}>Idade:{idade}</Text>
      <Text style = {styles.texto}>Numero:{numero}</Text>

        <Image source={{uri: imagem}} style={{width: 200, height: 200, borderRadius: 30}} /> 
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'yellow',
        borderWidth: 5,
        borderRadius: 30,
        margin: 10,
        alignItems: 'center',
        padding: 10,
    },

    texto: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'blue',
    }

})