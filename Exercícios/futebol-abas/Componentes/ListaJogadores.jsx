// no arquivo: ListaJogadores.js

import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Card } from 'react-native-paper';

export default function Jogador({ nome, numero, imagem }) {
  return (
    <Card style={styles.card} mode="elevated">
      <View style={styles.container}>
        <Image source={{ uri: imagem }} style={styles.imagem} />
        <View style={styles.info}>
          <Text style={styles.nome}>{nome}</Text>
          <Text style={styles.numero}>Camisa {numero}</Text>
        </View>
      </View>
    </Card>
  );
}

const styles = StyleSheet.create({
  card: {
    marginVertical: 8,
    marginHorizontal: 12,
    borderRadius: 16,
    backgroundColor: '#1c1c1c',
    elevation: 6,
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
  },
  imagem: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 2,
    borderColor: '#e63946',
  },
  info: {
    marginLeft: 15,
  },
  nome: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  numero: {
    fontSize: 16,
    color: '#ccc',
    marginTop: 4,
  },
});
