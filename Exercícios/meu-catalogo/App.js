import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';
import Filme from './Componentes/Filme';
import Serie from './Componentes/Serie';


export default function App() {

  const listaFilmes = [
    {
    "nome": "A Doce Vida",
    "ano": 1960,
    "diretor": "Federico Fellini",
    "tipo": "Drama",
    "capa": "https://upload.wikimedia.org/wikipedia/pt/0/04/La_Dolce_Vita.jpg"
    },
    {
    "nome": "Psicose",
    "ano": 1960,
    "diretor": "Alfred Hitchcock",
    "tipo": "Terror",
    "capa": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg/800px-Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg"
    },
    {
    "nome": "O Beijo da Mulher Aranha",
    "ano": 1985,
    "diretor": "Hector Babenco",
    "tipo": "Drama",
    "capa": "https://upload.wikimedia.org/wikipedia/pt/thumb/8/8b/Kiss_Of_The_Spiderwoman.jpg/250px-Kiss_Of_The_Spiderwoman.jpg"
    },
    {
    "nome": "Poltergeist - O Fenômeno",
    "ano": 1982,
    "diretor": "Tobe Hooper",
    "tipo": "Terror",
    "capa": "https://upload.wikimedia.org/wikipedia/pt/1/14/Poltergeist_%281982%29_-_poster.png"
    }
    
    ];

    const listaSeries = [
      {
      "nome": "Buffy, a Caça-Vampiros",
      "ano": 1997,
      "diretor": "Joss Whedon",
      "temporadas": 7,
      "capa": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Buffy_the_vampire_slayer.svg/250px-Buffy_the_vampire_slayer.svg.png"
      },
      {
      "nome": "Desperate Housewives",
      "ano": 2004,
      "diretor": "Marc Cherry",
      "temporadas": 8,
      "capa": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Desperate_Housewives_Logo.svg/250px-Desperate_Housewives_Logo.svg.png"
      },
      {
      "nome": "Sons of Anarchy",
      "ano": 2008,
      "diretor": "Kurt Sutter",
      "temporadas": 7,
      "capa": "https://upload.wikimedia.org/wikipedia/pt/7/7b/SOATitlecard.jpg"
      }
      ];

  return (
    <ScrollView>
    <View style={styles.container}>
     
    {
  listaFilmes.map(
    Filmes => {
      return <Filme 
        nome={Filmes.nome}
        ano={Filmes.ano}
        diretor={Filmes.diretor}
        tipo={Filmes.tipo}
        capa={Filmes.capa}/>
    })
}

{
  listaSeries.map(
    Series => {
      return <Serie 
        nome={Series.nome}
        ano={Series.ano}
        diretor={Series.diretor}
        temporadas={Series.temporadas}
        capa={Series.capa}
        />
    })
}

      <StatusBar style="auto" />
    </View>
    </ScrollView>
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
