import { StyleSheet, View } from 'react-native'
import { Button, Text} from 'react-native-paper'
import React from 'react'
import { FlatList } from 'react-native-gesture-handler';
import { Card } from 'react-native-paper';
import { useState } from 'react';
export default function AlunoLista({navigation, route}) {
  
  const [alunos, setAlunos] = useState([
    {id: '1', nome: 'João',
     cpf: "111.222.333-98",
     email: "Aluno@gmail.com",
     telefone: "(61)99999-9999",
     nascimento: "01/01/2000"},
    {id: '2',
     nome: 'Maria',
     cpf: "222.444.555-12",
     email: "Aluno2@gmail.com",
     telefone: "(61)91999-9999",
     nascimento: "01/02/2000" },

  ]);
  return (
    <View>
        <Button style={{margin: 20}}
            mode="contained"
            onPress={() => navigation.navigate('Cadastro de Alunos')}
            >
            Cadastrar
        </Button>
      <FlatList
        data={alunos}
        keyExtractor={item => item.id}
        renderItem={({item}) => 
          <Card style={{margin: 10}}>
            <Card.Content>
              <Text style={{fontSize: 20, fontWeight: 'bold'}}>{item.nome}</Text>
              <Text>ID: {item.id}</Text>
              <Text>Nome: {item.nome}</Text>
              <Text>CPF: {item.cpf}</Text>
            </Card.Content>
            <Card.Actions>
              <Button icon={'pencil'}>Editar </Button>        
              <Button icon={"delete"}> Excluir</Button>    
            </Card.Actions>
          </Card>
        }
      
    >

      </FlatList>
    
      
    </View>
  )
}

const styles = StyleSheet.create({})