import { StyleSheet, Text, View, FlatList, Image } from 'react-native';
import React from 'react';
import { Card } from 'react-native-paper';

export default function TitulosScreens() {
    const titulos = [
        {
        nome: "Campeonato Brasileiro",
        anos: [1980, 1982, 1983, 1992, 2009, 2019, 2020]
        },
        {
        nome: "Copa Libertadores da América",
        anos: [1981, 2019, 2022]
        },
        {
        nome: "Copa do Brasil",
        anos: [1990, 2006, 2013, 2022, 2024]
        },
        {
        nome: "Supercopa do Brasil",
        anos: [2020, 2021, 2025]
        }
        ];

  return (
    <View>
      <FlatList
        data={titulos}
        keyExtractor={(item) => item.nome}
        renderItem={({ item }) => (
          <Card>
            <Card.Content>
              <Text>Nome:{item.nome}</Text>
              <Text>Anos: {item.anos.join(", ")}</Text>
            </Card.Content>
          </Card>
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({})