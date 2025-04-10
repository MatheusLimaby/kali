import { FlatList, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Card, PaperProvider } from 'react-native-paper';

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
  },
];

export default function Titulos() {
  return (
    <PaperProvider>
      <FlatList
        contentContainerStyle={styles.container}
        data={titulos}
        ListHeaderComponent={
          <View style={styles.header}>
            <Text style={styles.titulo}>Títulos do Flamengo</Text>
            <Text style={styles.descricao}>
              O Clube de Regatas do Flamengo é um dos maiores campeões do futebol brasileiro e sul-americano. Ao longo da história, o Mengão colecionou conquistas inesquecíveis, nacionais e internacionais, que marcaram gerações de torcedores apaixonados.
            </Text>
          </View>
        }
        renderItem={({ item }) => (
          <Card style={styles.card} mode="elevated">
            <View style={styles.content}>
              <Text style={styles.nome}>{item.nome}</Text>
              <Text style={styles.anos}>{item.anos.join(', ')}</Text>
            </View>
          </Card>
        )}
        keyExtractor={(item) => item.nome}
        showsVerticalScrollIndicator={false}
      />
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: 'black',
    flexGrow: 1,
  },
  header: {
    marginBottom: 20,
  },
  titulo: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#e63946',
    textAlign: 'center',
    marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'justify',
  },
  descricao: {
    fontSize: 16,
    color: '#f1f1f1',
    textAlign: 'justify', 
    lineHeight: 22,
  },
  card: {
    width: 300,
    borderRadius: 16,
    padding: 20,
    backgroundColor: '#e63946',
    elevation: 5,
    alignSelf: 'center',
    marginBottom: 16,
  },
  content: {
    alignItems: 'center',
  },
  nome: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
    textAlign: 'center',
  },
  anos: {
    fontSize: 16,
    color: '#f1f1f1',
    textAlign: 'center',
  },
});
