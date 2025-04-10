import { StyleSheet, View, Image, FlatList } from 'react-native';
import React from 'react';
import { PaperProvider, Card, Text } from 'react-native-paper';

const time = {
  nome: "Flamengo",
  escudo: "https://i.pinimg.com/236x/16/db/d2/16dbd20fd582e025dc54cc3fbd1839c9.jpg",
  descricao: "O escudo do Flamengo é um dos mais icônicos do futebol brasileiro. Com as letras 'CRF' entrelaçadas em branco sobre o fundo rubro-negro, ele representa a tradição, a garra e a paixão do clube carioca. Ao longo dos anos, o escudo passou por algumas atualizações, mas sempre manteve sua essência e forte identidade visual.",
};

export default function Escudo() {
  return (
    <PaperProvider>
      <FlatList
        contentContainerStyle={styles.container}
        data={[time]}
        ListHeaderComponent={
          <View>
            <Text style={styles.titulo}>Escudo do Flamengo</Text>
            <Text style={styles.descricao}>{time.descricao}</Text>
          </View>
        }
        renderItem={({ item }) => (
          <Card style={styles.card} mode="elevated">
            <View style={styles.content}>
              <Image
                source={{ uri: item.escudo }}
                style={styles.image}
              />
              <Text style={styles.nome}>{item.nome}</Text>
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
    alignItems: 'center',
    backgroundColor: 'black',
    flexGrow: 1,
  },
  titulo: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#e63946',
    textAlign: 'center',
    marginBottom: 10,
  },
  descricao: {
    fontSize: 16,
    color: '#f1f1f1',
    textAlign: 'justify', 
    lineHeight: 22,
    paddingBottom: 20,
  },
  card: {
    width: 250,
    borderRadius: 16,
    paddingVertical: 20,
    paddingHorizontal: 10,
    backgroundColor: '#e63946',
    elevation: 5,
  },
  content: {
    alignItems: 'center',
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 15,
    borderWidth: 2,
    borderColor: '#fff',
  },
  nome: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
  },
});
