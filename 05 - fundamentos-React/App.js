import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View} from 'react-native';
import PrimeiroComponente from './componentes/PrimeiroComponente';
import SegundoComponente from './componentes/SegundoComponente';
import JavaSecriptComponents from './componentes/JavaSecriptComponents';
import Perfil from './componentes/Perfil';

export default function App() {
  return (
    <View style={styles.container}>

      

<PrimeiroComponente />
<SegundoComponente />
<JavaSecriptComponents/>

<Perfil
  nome = "Matheus"
  idade =  {19}
  escolaridade = "Superior"
  />
  <Perfil
  nome = "Marcelo"
  idade =  {19}
  escolaridade = "Superior"
  />
  <Perfil
  nome = "Vinícius"
  idade =  {19}
  escolaridade = "Superior"
  />


          

    </View>
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
