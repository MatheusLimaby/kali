// App.js
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import  Time  from './Componentes/Time';

export default function App() {
  const times = [
    {
      nome: 'Flamengo',
      anoFundacao: 1895,
      mascote: 'Urubu',
      imagem: 'https://i.pinimg.com/236x/16/db/d2/16dbd20fd582e025dc54cc3fbd1839c9.jpg',
      jogadores: [
        { nome: 'Gabriel Barbosa', numero: 9, imagem: 'https://i.pinimg.com/474x/1d/9f/5d/1d9f5de58831c9913f925a7155bdc7da.jpg' },
        { nome: 'Arrascaeta', numero: 14, imagem: 'https://i.pinimg.com/474x/cf/ad/d9/cfadd92de5e581ac5505e3d325f8b9b2.jpg' },
        { nome: 'Everton Ribeiro', numero: 7, imagem: 'https://i.pinimg.com/236x/39/1a/27/391a275fb7e0b018f2900f0f9fc9331b.jpg' },
        { nome: 'David Luiz', numero: 23, imagem: 'https://i.pinimg.com/474x/98/79/9b/98799b86107a87b79dc9b15cf778fa4a.jpg' },
        { nome: 'Pedro', numero: 21, imagem: 'https://i.pinimg.com/474x/79/e6/18/79e6185649fa3667b3ed3beef3e1ae94.jpg' },
      ],
    },
    {
      nome: 'Palmeiras',
      anoFundacao: 1914,
      mascote: 'Porco',
      imagem: 'https://i.pinimg.com/236x/d7/e3/66/d7e36650f858c03c2366721ba3d01ce3.jpg',
      jogadores: [
        { nome: 'Dudu', numero: 7, imagem: 'https://i.pinimg.com/474x/72/96/9b/72969b2d84fb0ab80f31b571267f142f.jpg' },
        { nome: 'Rony', numero: 10, imagem: 'https://i.pinimg.com/236x/c9/3d/82/c93d82c6592ece32d02c4b7b8d10806f.jpg' },
        { nome: 'Gustavo Gómez', numero: 15, imagem: 'https://i.pinimg.com/474x/6f/c6/55/6fc655734d82e5dfe73d6a6364a2e5c9.jpg' },
        { nome: 'Weverton', numero: 1, imagem: 'https://i.pinimg.com/474x/98/15/b2/9815b2742d1d3f1733e8bf556f8132f1.jpg' },
        { nome: 'Raphael Veiga', numero: 23, imagem: 'https://i.pinimg.com/474x/94/6a/d6/946ad6271c4771121792f110591c9ff7.jpg' },
      ],
    },
  ];

  return (
    <PaperProvider>
  
    <StatusBar style="auto" />

    <View style >
      <Text style={{fontSize: 30, margin: 10}}>Estados e Municípios</Text>

     <FlatList
      data={times}
      renderItem={({item}) => (
        <Time
        nome={item.nome}
        anoFundacao={item.anoFundacao}
        mascote={item.mascote}
        imagem={item.imagem}
        jogadores={item.jogadores}
        />
      )}
      keyExtractor={(item) => item.nome}
      showsVerticalScrollIndicator={false}
      />
  </View>
</PaperProvider>
  );
}

const styles = StyleSheet.create({
  card: {
    marginVertical: 15,
    marginHorizontal: 20,
    borderRadius: 12,
    elevation: 5, 
    backgroundColor: '#fff',
    overflow: 'hidden', 
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  subtitle: {
    fontSize: 14,
    color: '#777',
  },
  mascote: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#444',
    marginTop: 10,
    marginBottom: 15,
  },
  coverImage: {
    height: 200,
    borderRadius: 8,
    marginBottom: 10, 
  },
  actions: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: '#f5f5f5',
  },
});