import { FlatList, StyleSheet, View } from 'react-native';
import React from 'react';
import { PaperProvider, Text } from 'react-native-paper';
import Jogador from '../Componentes/ListaJogadores'; 

const jogadores = [
  {
    nome: "Gabriel Barbosa",
    numero: 9,
    imagem: "https://i.pinimg.com/474x/1d/9f/5d/1d9f5de58831c9913f925a7155bdc7da.jpg"
  },
  {
    nome: "Arrascaeta",
    numero: 14,
    imagem: "https://i.pinimg.com/474x/cf/ad/d9/cfadd92de5e581ac5505e3d325f8b9b2.jpg"
  },
  {
    nome: "Everton Ribeiro",
    numero: 7,
    imagem: "https://i.pinimg.com/236x/39/1a/27/391a275fb7e0b018f2900f0f9fc9331b.jpg"
  },
  {
    nome: "David Luiz",
    numero: 23,
    imagem: "https://i.pinimg.com/474x/98/79/9b/98799b86107a87b79dc9b15cf778fa4a.jpg"
  },
  {
    nome: "Pedro",
    numero: 21,
    imagem: "https://i.pinimg.com/474x/79/e6/18/79e6185649fa3667b3ed3beef3e1ae94.jpg"
  },
];

export default function Jogadores() {
  return (
    <PaperProvider>
      <View style={styles.container}>
        <Text variant='headlineMedium' style={styles.titulo}>
          Jogadores do Flamengo
        </Text>
        <FlatList
          data={jogadores}
          renderItem={({ item }) => (
            <Jogador
              nome={item.nome}
              numero={item.numero}
              imagem={item.imagem}
            />
          )}
          keyExtractor={(item) => item.nome}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.lista}
        />
      </View>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  titulo: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#e63946',
    textAlign: 'center',
    marginBottom: 10,
    paddingTop: 10
  },
  lista: {
    paddingBottom: 20,
    paddingHorizontal: 10,
    backgroundColor: 'black',
  },
});
