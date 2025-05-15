import { View } from 'react-native'
import React, { useState} from 'react'
import { Card, Text, Button } from 'react-native-paper'


export default function Nome() {
   const [nome, setNome] = useState("??????")

    function esconderNome() {
         setNome("??????")

    }
    function revelarNome() {
         setNome("Lucas")
     
    }

  return (
    <View>
        <Card>
            <Card.Content>
                <Card.Title title="Componente Nome" />
            <Text>Nome: {nome}</Text>

            </Card.Content>
            <Card.Actions>
            <Button onPress={esconderNome}>Esconder</Button>
            <Button onPress={revelarNome}>Revelar</Button>
            </Card.Actions>
        </Card>
     
    </View>
  )
}

