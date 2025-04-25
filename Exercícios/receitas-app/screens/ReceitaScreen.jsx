import { StyleSheet, View } from "react-native";
import React from "react";
import { Button, Card, Text, Image } from "react-native-paper";
import { FlatList } from "react-native";

export default function ReceitaScreen({ navigation, route }) {
  console.log(route.params.item.nome);
  return (
    <View>
      <Text
        variant="headlineLarge"
        style={{ justifyContent: "center", textAlign: "center" }}
      >
        Receita
      </Text>
      <Card style={{ margin: 20, borderRadius: 10 }}>
        <Card.Cover source={{ uri: route.params.item.imagem }} />
        <Card.Content style={{ margin: 20, borderRadius: 10, padding: 20 }}>
          <Text>Nome: {route.params.item.nome}</Text>
          <Text>tempoPreparo: {route.params.item.tempoPreparo}</Text>
          <Text> porcoes: {route.params.item.porcoes}</Text>

          <Text style={{ marginTop: 10, fontWeight: "bold" }}>
            Ingredientes:
          </Text>
          <FlatList
            data={route.params.item.ingredientes}
            renderItem={({ item }) => <Text>- {item}</Text>}
          />

          <Text style={{ marginTop: 10, fontWeight: "bold" }}>
            Modo de Preparo:
          </Text>
          <FlatList
            data={route.params.item.modoPreparo}
            renderItem={({ item, index }) => (
              <Text>
                {index + 1}. {item}
              </Text>
            )}
          />
        </Card.Content>
      </Card>
      <Button
        style={{ margin: 20 }}
        mode="contained"
        onPress={() => navigation.goBack()}
      >
        Voltar
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({});
