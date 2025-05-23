import { StyleSheet, View, FlatList, Image } from 'react-native';
import React, { useEffect, useState } from 'react';
import { Card, Text, IconButton } from 'react-native-paper';
import axios from 'axios';

export default function ListaProdutos({ navigation, route }) {
  const categoria = route.params;
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    axios.get(`https://dummyjson.com/products/category/${categoria}`)
      .then((resposta) => {
        setProdutos(resposta.data.products);
      })
      .catch(() => {
        alert('Erro ao carregar os produtos');
      });
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={produtos}
        renderItem={({ item }) => (
          <Card style={styles.card}>
            <Card.Title
              title={item.title}
              subtitle={`Preço: $${item.price}`}
              left={() => (
                <Image
                  source={{ uri: item.thumbnail }}
                  style={styles.thumbnail}
                />
              )}
              right={() => (
                <IconButton
                  icon="chevron-right"
                  onPress={() => navigation.navigate('Produtos', item.id)}
                />
              )}
            />
            <Card.Content>
              <Text variant="bodyMedium" numberOfLines={2}>
                {item.description}
              </Text>
            </Card.Content>
          </Card>
        )}
        contentContainerStyle={{ padding: 10 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  card: {
    marginBottom: 12,
    borderRadius: 10,
    backgroundColor: '#FFFFFF',
    elevation: 3,
  },
  thumbnail: {
    width: 50,
    height: 50,
    borderRadius: 8,
  },
});
