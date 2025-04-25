import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button } from 'react-native-paper'

export default function Home({navigation, route}) {

  return (
    <View>
      <Text>Home</Text>
      <Text>Home</Text>
      <Text>Home</Text>
      <Text>Home</Text>
      <Text>Home</Text>
      <Text>Home</Text>
      <Text>Home</Text>
      <Text>Home</Text>
      <Text>Home</Text>

      <Button style={{margin: 20}}
        mode="contained"
        onPress={() => navigation.navigate('Feed')}
        >
        Ir para Feed
      </Button>
    </View>
  )
}

const styles = StyleSheet.create({
})