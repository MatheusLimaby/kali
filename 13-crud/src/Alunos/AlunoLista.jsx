import { StyleSheet, View } from 'react-native'
import { Button, Text} from 'react-native-paper'
import React, { useEffect } from 'react'
import { FlatList } from 'react-native-gesture-handler';
import { Card } from 'react-native-paper';
import { useState } from 'react';
import AlunoService from '../Service/AlunoService';

export default function AlunoLista({navigation, route}) {
  
  const [alunos, setAlunos] = useState([]);

  useEffect(() => {
    BuscarAlunos();
  }, []);

  async function BuscarAlunos(){
    const ListarAlunos = await AlunoService.listar();
    setAlunos(ListarAlunos);
  }
  async function ExcluirAluno(id) {
    await AlunoService.remover(id);
    BuscarAlunos();
    alert('Aluno excluído com sucesso!');
  }
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
              <Button icon={'pencil'} onPress={() => navigation.navigate('Cadastro de Alunos', item)}>Editar </Button>        
              <Button icon={"delete"} onPress={() => ExcluirAluno(item.id)}> Excluir</Button>    
            </Card.Actions>
          </Card>
        }
      
    >

      </FlatList>
    
      
    </View>
  )
}

const styles = StyleSheet.create({})