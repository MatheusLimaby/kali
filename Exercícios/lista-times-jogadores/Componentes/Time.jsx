import { StyleSheet, Text, View, FlatList } from 'react-native';
import React from 'react';
import Jogador from './Jogador';
import { Card } from 'react-native-paper';

export default function Time(props) {
  const { nome, anoFundacao, mascote, imagem, jogadores } = props;

  return (
    <Card style={{ margin: 15, backgroundColor: '#ffebf2', borderRadius: 12, elevation: 8 }}>
      {/* Card Title */}
      <Card.Title 
        title={nome} 
        titleStyle={{ fontSize: 24, fontWeight: 'bold', color: '#333' }} // Title styling
        subtitle={`Fundação: ${anoFundacao}`}
        subtitleStyle={{ fontSize: 14, color: '#777', marginTop: 5 }} // Subtitle styling
      />

      {/* Card Content */}
      <Card.Content>
        <Text style={{ marginVertical: 10, fontSize: 16, fontWeight: 'bold', color: '#444' }}>
          Mascote do Time: {mascote}
        </Text>
        <Text style={{ marginBottom: 10, fontSize: 16, color: '#666' }}>
          Ano de Fundação: {anoFundacao}
        </Text>
      </Card.Content>

      {/* Card Cover Image */}
      <Card.Cover 
        source={{ uri: imagem }} 
        style={{ height: 200, borderRadius: 8, marginBottom: 15 }} 
      />

      {/* Players List */}
      <Card.Actions style={{ paddingVertical: 10, backgroundColor: '#f7f7f7' }}>
        <FlatList
          horizontal
          data={jogadores}
          renderItem={({ item }) => (
            <Jogador
              nome={item.nome}
              numero={item.numero}
              imagem={item.imagem}
            />
          )}
          keyExtractor={(item) => item.nome}
          showsHorizontalScrollIndicator={false}
        />
      </Card.Actions>
    </Card>
  );
}
