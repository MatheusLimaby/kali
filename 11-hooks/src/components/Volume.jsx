import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Card, Button } from 'react-native-paper'
import { useState } from 'react'

export default function Volume() {

    function
    adicionarVolume() {
        setVolume(volume + 1)
    }
    function removerVolume() {
        if (volume <= 0) {
            return
        }
        setVolume(volume - 1)
    }

    const [volume, setVolume] = useState(0)
  return (
    <View>
      <Card>
        <Card.Content>
          <Card.Title title="Componente Volume" />
          <Text>Volume:{volume}</Text>
        </Card.Content>
        <Card.Actions>
          <Button onPress={adicionarVolume}>Adicionar</Button>
          <Button onPress={removerVolume}>Remover</Button>
        </Card.Actions>
      </Card>
    </View>
  )
}

const styles = StyleSheet.create({})