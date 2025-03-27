import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  ScrollView,
} from "react-native";

export default function App() {
  // Lógica do meu componente
  function alerta() {
    alert("Gol do Neymar!");
  }

  // Retorno JSX do meu componente
  return (
    <ScrollView>
      <View style={styles.formato}>
        <Text style={styles.textoGrande}>Neymar</Text>

        <Text style={styles.textoNormal}>
          Neymar da Silva Santos Júnior (Mogi das Cruzes, 5 de fevereiro de
          1992) é um futebolista brasileiro que atua como atacante. Atualmente,
          joga pelo Santos.
        </Text>

        <Text style={styles.textoNormal}>
          Infância e juventude: Filho do mecânico Neymar da Silva Santos (de
          quem herdou o nome) e Nadine Santos, Neymar nasceu na cidade de Mogi
          das Cruzes, na Região Metropolitana de São Paulo, em 5 de fevereiro de
          1992. Em 2003, aos 11 anos de idade, chegou às categorias de base do
          Santos.
        </Text>

        <Text style={styles.textoNormal}>
          Quando Neymar ainda não ganhava o suficiente para sustentar a família,
          ele, o pai, a mãe e a irmã moravam em um cômodo na casa da avó, na
          periferia de São Vicente. Aos 17 anos, Neymar virou titular no time
          principal do Santos e seus primeiros patrocínios começaram a aparecer.
        </Text>

        <StatusBar style="auto" />

        <Image
          style={styles.image}
          source={{
            uri: "https://talksport.com/wp-content/uploads/sites/5/2022/09/GettyImages-1243565754.jpg",
            width: 150,
            height: 150,
          }}
        />
        <Image
          style={styles.image}
          source={{
            uri: "https://th.bing.com/th/id/R.e2d5d92039a4dfd1a7cd567275d8271d?rik=wjsumFGoEjBcUQ&riu=http%3a%2f%2fhdqwalls.com%2fwallpapers%2fneymar-5k-xk.jpg&ehk=55att8dtRT3DQCP3Gg5SC47Mx9TWhSRAkzKknUm0XJY%3d&risl=1&pid=ImgRaw&r=0",
            width: 150,
            height: 150,
          }}
        />
        <Image
          style={styles.image}
          source={{
            uri: "https://th.bing.com/th/id/OIP.SYjJr4MX4Zz_V4JzYDPnoAHaEo?rs=1&pid=ImgDetMain",
          }}
        />
        <Image
          style={styles.image}
          source={{
            uri: "https://th.bing.com/th/id/OIP.eJ7Cg6HpN0JK55gaN8gwHgHaEK?rs=1&pid=ImgDetMain",
          }}
        />
        <Image
          style={styles.image}
          source={{
            uri: "https://th.bing.com/th/id/R.848d73d82d8107282e2f13ad54935fc8?rik=tyID6OaCv7lG5g&riu=http%3a%2f%2fwallpapercave.com%2fwp%2fwc1705279.jpg&ehk=dpAOy4%2bkQzBVJSCpbEGGZUNu8x5DlIxzPFTVsHPjyr4%3d&risl=&pid=ImgRaw&r=0",
          }}
        />

        <Button title="Gol do Neymar!" onPress={alerta} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  formato: {
    alignItems: "center",
    justifyContent: "flex-start",
    padding: 20,
    backgroundColor: "white",
  },
  textoGrande: {
    fontSize: 32,
    fontWeight: "bold",
    fontStyle: "italic",
  },
  textoNormal: {
    fontSize: 16,
    lineHeight: 24,
    textAlign: "justify",
  },

  image: {
    width: 150,
    height: 150,
    margin: 10,
    borderRadius: 10,
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
  },
});
