import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import PrimeiroComponente from './Componentes/PrimeiroComponente';
import JavaScriptComponente from './Componentes/JavaScriptComponente';
import Perfil from './Componentes/Perfil';
import Atleta from './Componentes/ListaComponente';

export default function App() {

  const listaAtletas = [
    {
      nome: 'Ronaldo',
      idade: 35,
      numero: 7,
      imagem: 'https://th.bing.com/th/id/OIP.Lb8cVx31g7HKVIpag7g7lQHaIV?rs=1&pid=ImgDetMain'
    },
    {
      nome: 'Messi',
      idade: 33,
      numero: 10,
      imagem: 'https://fifpro.org/media/fhmfhvkx/messi-world-cup.jpg?center=0.31512414378031967'
    }
  ];
  return (
  <ScrollView>
    <View style={styles.container}>
      
      <StatusBar style="auto" />
     <PrimeiroComponente/>
     <PrimeiroComponente/>

     <JavaScriptComponente/>

     {
  listaAtletas.map(
    atleta => {
      return <Atleta 
        nome={atleta.nome}
        idade={atleta.idade}
        numero={atleta.numero}
        imagem={atleta.imagem}/>
    })
}

    

     

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
