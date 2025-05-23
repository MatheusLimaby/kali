import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import axios from 'axios'
import { useEffect, useState} from 'react'
import { FlatList } from 'react-native-gesture-handler'
import { Card, IconButton} from 'react-native-paper'


export default function HomeScreen({navigation, route}) {

    const [Categoria, setCategoria] = useState([]);
    useEffect(() => {
        axios.get('https://dummyjson.com/products/category-list')
        .then((response) => {
            setCategoria(response.data);
            console.log(response.data);
        })
        .catch((error) => {
            console.log(error);
        });
    }, []);
        
  return (
    <View>
      <FlatList
        data={Categoria}
        renderItem={({ item }) => (
          <Card style={styles.card}>
            <Card.Content>
              <Text>{item}</Text>
            </Card.Content>
            <Card.Actions>
                <IconButton
                    icon="chevron-right"
                    onPress={() => navigation.navigate('ListaProdutos', item)} 
                />
            </Card.Actions>
          </Card>
          
        )
    }
      contentContainerStyle={{ padding: 10}}
>

        </FlatList>
    </View>
  )
}

const styles = StyleSheet.create({})