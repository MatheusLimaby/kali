import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'
import { Card } from 'react-native-paper'

export default function EscudoScreens() {
  const times = [
    {
      nome: "Flamengo",
      escudo: "https://i.pinimg.com/236x/16/db/d2/16dbd20fd582e025dc54cc3fbd1839c9.jpg",
      fundacao: "15 de novembro de 1895",
      estadio: "Maracanã",
      mascote: "Urubu",
      cores: ["Vermelho", "Preto"]
    }
  ]

  return (
    <View>
      <FlatList
        data={times}   
        renderItem={({ item }) => (
          <Card>
            <Card.Cover source={{ uri: item.escudo }} />
            <Card.Content>
              <Text>{item.nome}</Text>
              <Text>Fundação: {item.fundacao}</Text>
              <Text>Estádio: {item.estadio}</Text>
              <Text>Mascote: {item.mascote}</Text>
              <Text>Cores: {item.cores.join(', ')}</Text>
            </Card.Content>
          </Card>
        )}
      />
    </View>
  )
}

