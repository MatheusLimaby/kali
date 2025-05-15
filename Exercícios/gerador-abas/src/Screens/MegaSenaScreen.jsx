import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Card, Button } from 'react-native-paper'
import { useState } from 'react'



export default function MegaSenaScreen() {
    const [jogoGerado, setJogoGerado] = useState(0);
    const [jogosMegaSena, setJogosMegaSena] = useState([]);
    
    function GerarJogoMegaSena() {
        const numeros = new Set();
      
        while (numeros.size < 6) {
          const numero = Math.floor(Math.random() * 60) + 1;
          numeros.add(numero);
        }
      
        const jogo = Array.from(numeros)
        setJogoGerado(jogo.join(' , '));
        setJogosMegaSena([...jogosMegaSena, jogo]);
      }
      
  return (
    <View>
        <Card>
            <Card.Content>
            <Card.Title title="Gerador de Jogos da Mega-Sena" />
            <Text>Jogo Gerado: {jogoGerado}</Text>
            </Card.Content>
            <Card.Actions>
            <Button onPress={GerarJogoMegaSena}>Gerar Jogo</Button>
            <Button onPress={() => setJogosMegaSena([])}>Limpar Jogos</Button>

            </Card.Actions>
        </Card>
        <Card>
            <Card.Content>
            <Card.Title title="Jogos Gerados" />
            {jogosMegaSena.map((item, index) => (
                <Text>Jogo: {item + " "} </Text>
            ))}
            </Card.Content>
        </Card>
    </View>
  )
}

const styles = StyleSheet.create({})