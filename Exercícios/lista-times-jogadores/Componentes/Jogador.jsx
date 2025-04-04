import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Avatar, Card } from 'react-native-paper';

export default function Jogador(props) {
  const { nome, numero, imagem } = props;

  return (
    <Card.Title
      style={{
        margin: 10,
        backgroundColor: '#f4f4f4',
        borderRadius: 12,
        paddingVertical: 8,
        flexDirection: 'row',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
      }}
      title={nome}
      titleStyle={{
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
        marginLeft: 10,
      }}
      subtitle={numero}
      subtitleStyle={{
        fontSize: 14,
        color: '#666',
        marginLeft: 10,
      }}
      left={(props) => (
        <Avatar.Image {...props} source={{ uri: imagem }} size={50} style={{ borderRadius: 25 }} />
      )}
    />
  );
}
