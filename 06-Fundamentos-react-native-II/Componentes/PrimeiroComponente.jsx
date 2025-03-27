import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'

export default function PrimeiroComponente() {
  return (

        <View style={styles.container}>
            <Text style={styles.texto}>Primeiro Componente</Text>
         </View>

  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'yellow',
        borderWidth: 5,
        borderRadius: 10,
        margin: 10,
        
       
    },
    texto: {
        fontSize: 20,
        fontWeight: 'bold',
        padding: 10,
        margin: 10,
        alignItems: 'center',

        color: 'blue',

    }
})
