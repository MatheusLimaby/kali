import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Card, Button } from 'react-native-paper'
import { useState } from 'react'

export default function NumeroAleatorio() {
    
    const [numero, setNumero] = useState(0)


  return (
    <View>
        <Card>
            <Card.Content>
                <Card.Title title="Componente Numero Aleatorio" />
                <Text>Numero: {numero}</Text>
            </Card.Content>
            <Card.Actions>
                <Button onPress={() => setNumero(Math.floor(Math.random() * 100))}>Gerar</Button>
            </Card.Actions>
        </Card>
    </View>
  )
}

