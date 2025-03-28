import { StyleSheet, Text, View, List, Image } from 'react-native'
import React from 'react'

export default function Serie(props) {

    const {nome, ano, diretor, temporadas, capa} = props
  return (
    <View style={styles.container}>
      <Text style = {styles.titulo}>Série</Text>
      <Text style = {styles.texto}>Nome:{nome}</Text>
      <Text style = {styles.texto}>Ano:{ano}</Text>
      <Text style = {styles.texto}>Diretor:{diretor}</Text>
      <Text style = {styles.texto}>Temporadas:{temporadas}</Text>
      <Image source={{uri: capa}} style={{width: 200, height: 200, borderRadius: 30}} /> 
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
        width: '90%', 
    },

    titulo: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'green', 
        marginBottom: 10,
    },

    texto: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'blue',
        marginBottom: 5,
    },

});