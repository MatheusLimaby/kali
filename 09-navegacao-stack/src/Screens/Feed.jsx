import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button } from 'react-native-paper'
export default function Feed({navigation, route}) {
  return (
    <View>
      <Text>Feed</Text> 
      <Text>Feed</Text> 
      <Text>Feed</Text> 
      <Text>Feed</Text> 
      <Text>Feed</Text> 
      <Text>Feed</Text> 
      <Text>Feed</Text> 
      <Text>Feed</Text> 
      <Text>Feed</Text> 
      <Button style={{margin: 20}}
            mode="contained"
            onPress={() => navigation.navigate('Posts')}
            >
            Ir para Posts
        </Button>
    <Button style={{margin: 20}}
        mode="contained"
        onPress={() => navigation.goBack()}
        >
        Voltar
      </Button>

    </View>
  )
}

const styles = StyleSheet.create({})