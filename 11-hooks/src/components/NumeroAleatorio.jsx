import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Card, Button } from 'react-native-paper'
import { useState } from 'react'

export default function NumeroAleatorio() {
    
    const [numero, setNumero] = useState(0)
    const [lista, setLista] = useState([])



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

        <Card>
        <Card.Content>
            <Card.Title title="Lista de Números" />
            {lista.map((item, index) => (
                <Text key={index}>{item}</Text>
            ))}
        </Card.Content>
        <Card.Actions>
            <Button onPress={() => setLista([...lista, numero])}>Adicionar</Button>
            <Button onPress={() => setLista([])}>Limpar</Button>
        </Card.Actions>
        </Card>
    </View>
  )
}

