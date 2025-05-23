import { StyleSheet, View, ScrollView, Image } from 'react-native';
import React, { useState, useEffect } from 'react';
import { Card, Text, Title, Paragraph, Divider } from 'react-native-paper';
import axios from 'axios';

export default function ProdutoScreen({ navigation, route }) {
  const idProduto = route.params;
  const [produto, setProduto] = useState(null);

  useEffect(() => {
    axios.get(`https://dummyjson.com/products/${idProduto}`)
      .then(resposta => {
        setProduto(resposta.data);
      })
      .catch(() => {
        alert('Erro ao carregar o produto');
      });
  }, []);

  if (!produto) {
    return (
      <View style={styles.loading}>
        <Text>Carregando...</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <Card style={styles.card}>
        <Card.Cover source={{ uri: produto.thumbnail }} />
        <Card.Content>
          <Title style={styles.title}>{produto.title}</Title>
          <Paragraph style={styles.description}>{produto.description}</Paragraph>

          <Divider style={styles.divider} />

          <Text style={styles.price}>💲 Preço: ${produto.price.toFixed(2)}</Text>
          <Text>🔥 Desconto: {produto.discountPercentage}%</Text>
          <Text>⭐ Avaliação: {produto.rating} / 5</Text>
          <Text>📦 Estoque: {produto.stock}</Text>

          <Divider style={styles.divider} />

          <Text>🏷️ Marca: {produto.brand}</Text>
          <Text>🔢 SKU: {produto.sku}</Text>
          <Text>⚖️ Peso: {produto.weight}g</Text>
          <Text>📐 Dimensões: {produto.dimensions.width} x {produto.dimensions.height} x {produto.dimensions.depth} cm</Text>
          <Text>📂 Categoria: {produto.category}</Text>
          <Text>🏷️ Tags: {produto.tags.join(', ')}</Text>

          <Divider style={styles.divider} />

          <Text>🚚 Envio: {produto.shippingInformation}</Text>
          <Text>✅ Garantia: {produto.warrantyInformation}</Text>
          <Text>↩️ Política de devolução: {produto.returnPolicy}</Text>
          <Text>📦 Pedido mínimo: {produto.minimumOrderQuantity}</Text>
          <Text>🟢 Status: {produto.availabilityStatus}</Text>

          <Divider style={styles.divider} />

          <Text style={styles.sectionTitle}>🖼️ Galeria:</Text>
          {produto.images.map((img, index) => (
            <Image
              key={index}
              source={{ uri: img }}
              style={styles.productImage}
            />
          ))}

          <Divider style={styles.divider} />

          <Text style={styles.sectionTitle}>📝 Avaliações:</Text>
          {produto.reviews.map((review, index) => (
            <View key={index} style={styles.review}>
              <Text style={styles.reviewName}>{review.reviewerName} ({review.rating} ⭐)</Text>
              <Text>"{review.comment}"</Text>
            </View>
          ))}

          <Divider style={styles.divider} />

          <Text style={styles.sectionTitle}>🔍 Código de Barras e QR Code:</Text>
          <Text>📑 Código de barras: {produto.meta.barcode}</Text>
          <Image source={{ uri: produto.meta.qrCode }} style={styles.qrCode} />
        </Card.Content>
      </Card>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#f5f5f5',
  },
  card: {
    borderRadius: 10,
    elevation: 4,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 5,
  },
  description: {
    marginVertical: 10,
  },
  price: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 5,
  },
  divider: {
    marginVertical: 10,
  },
  productImage: {
    width: '100%',
    height: 200,
    marginBottom: 10,
    borderRadius: 8,
  },
  review: {
    backgroundColor: '#fff',
    padding: 8,
    marginBottom: 8,
    borderRadius: 5,
    borderWidth: 0.5,
    borderColor: '#ddd',
  },
  reviewName: {
    fontWeight: 'bold',
  },
  sectionTitle: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 5,
  },
  qrCode: {
    width: 100,
    height: 100,
    marginTop: 5,
  },
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
