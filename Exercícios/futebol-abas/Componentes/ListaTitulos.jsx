import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Avatar, Card } from 'react-native-paper';

export default function Titulos(props) {
  const { nome, anos } = props;

  return (
    <Card style={styles.card}>
      <Card.Content>
        <View style={styles.container}>
          <Avatar.Icon icon="trophy" size={50} />
          <Text style={styles.title}>{nome}</Text>
        </View>
        <Text style={styles.anos}>{anos.join(', ')}</Text>
      </Card.Content>
    </Card>
  );
}
