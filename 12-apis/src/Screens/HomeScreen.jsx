import { StyleSheet, View, ActivityIndicator,  } from 'react-native';
import React, { useEffect, useState,  } from 'react';
import { Card, Text, Avatar, IconButton } from 'react-native-paper';
import { FlatList } from 'react-native';
import axios from 'axios';

export default function HomeScreen({navigation, route}) {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    axios.get('https://dummyjson.com/users?')
      .then((response) => {
        setUsuarios(response.data.users);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={usuarios}
        renderItem={({ item }) => (
          <Card style={styles.card}>
            <Card.Title
              title={`${item.firstName} ${item.lastName}`}
              subtitle={item.email}
              left={(props) => (
                <Avatar.Image
                  {...props}
                  source={{ uri: item.image }}
                />
              )}
              right={(props) => (
                <IconButton
                  {...props}
                  icon="chevron-right"
                  onPress={() => 
                    navigation.navigate('Usuario',item.id)
                  } 
                  
                />
              )}
            />
            <Card.Content>
              <Text>Idade: {item.age}</Text>
              <Text>Telefone: {item.phone}</Text>
              <Text>Cidade: {item.address.city}</Text>
            </Card.Content>
          </Card>
        )}
        ListEmptyComponent={() => (
            <View style={styles.loadContainer}>
                <ActivityIndicator   color="#0000ff" size={80} />
                <Text>Loading...</Text>
            </View>
        )}	
        contentContainerStyle={{ padding: 10}}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingBottom: 50,

  },
  card: {
    marginBottom: 10,
  },
  loadContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});
