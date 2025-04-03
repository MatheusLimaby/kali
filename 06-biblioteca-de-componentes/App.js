import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, View, Imag } from 'react-native';
import {PaperProvider, Card, Title, Paragraph, Button, Divider} from 'react-native-paper';
import { FlatList, Text } from 'react-native';
import Estados from './Componentes/Estados';


export default function App() {

  const listaEstadosMunicipios = [
    {
      nome: 'Rio de Janeiro',
      sigla: 'RJ',
      imagem: 'https://picsum.photos/700#39',
      descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      municipios: [
        {
          nome: 'Rio de Janeiro',
          imagem: 'https://picsum.photos/700#39'
        },
        {
          nome: 'Niterói',
          imagem: 'https://picsum.photos/700#39'
        },
        {
          nome: 'Petrópolis',
          imagem: 'https://picsum.photos/700#39'
        },
        {
          nome: 'Angra dos Reis',
          imagem: 'https://picsum.photos/700#39'
        },
        {
          nome: 'Cabo Frio',
          imagem: 'https://picsum.photos/700#39'
        }
      ]
    },
    {
      nome: 'São Paulo',
      sigla: 'SP',
      imagem: 'https://picsum.photos/700#39',
      descricao: 'São Paulo é o estado mais populoso do Brasil, com uma economia diversificada e forte.',
      municipios: [
        {
          nome: 'São Paulo',
          imagem: 'https://picsum.photos/700#39'
        },
        {
          nome: 'Campinas',
          imagem: 'https://picsum.photos/700#39'
        },
        {
          nome: 'Santos',
          imagem: 'https://picsum.photos/700#39'
        },
        {
          nome: 'Sorocaba',
          imagem: 'https://picsum.photos/700#39'
        },
        {
          nome: 'Ribeirão Preto',
          imagem: 'https://picsum.photos/700#39'
        }
      ]
    },
    {
      nome: 'Minas Gerais',
      sigla: 'MG',
      imagem: 'https://picsum.photos/700#39',
      descricao: 'Minas Gerais é conhecido por sua rica história, culinária e belas paisagens.',
      municipios: [
        {
          nome: 'Belo Horizonte',
          imagem: 'https://picsum.photos/700#39'
        },
        {
          nome: 'Ouro Preto',
          imagem: 'https://picsum.photos/700#39'
        },
        {
          nome: 'Uberlândia',
          imagem: 'https://picsum.photos/700#39'
        },
        {
          nome: 'Juiz de Fora',
          imagem: 'https://picsum.photos/700#39'
        },
        {
          nome: 'Montes Claros',
          imagem: 'https://picsum.photos/700#39'
        }
      ]
    }
  ]


  
  return (
    <PaperProvider>
  
      <StatusBar style="auto" />

      <View >
        <Text style={{fontSize: 30, margin: 10}}>Estados e Municípios</Text>

        <FlatList
        data={listaEstadosMunicipios}
        renderItem={({item}) => (
          <Estados
          nome={item.nome}
          sigla={item.sigla}
          imagem={item.imagem}
          descricao={item.descricao}
          municipios={item.municipios}
          />
        )}
        />
        
    

    </View>
  </PaperProvider>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',

  },
});
