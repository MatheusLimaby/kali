import { StyleSheet, Text, View, FlatList} from 'react-native'
import React from 'react'
import { Card } from 'react-native-paper'
import Municipios from './Municipios'


export default function Estados(props) {
    
const {nome, sigla, imagem, descricao, municipios} = props
  return (
   <Card style={{margin: 15}}>   
   <Card.Title title={nome} subtitle={sigla}/>
   <Card.Content>
    <Text style={{margin: 10}}>{descricao}</Text>
   </Card.Content>
   <Card.Cover source={{ uri: imagem }} />
   <Card.Actions>
        <FlatList
            horizontal
            data={municipios}
            renderItem={({item}) => <Municipios 
            nome = {item.nome}
            imagem = {item.imagem}
            />}
            keyExtractor={(item) => item.nome}

            showsHorizontalScrollIndicator={false}
        />
   </Card.Actions>
   </Card>
  )
}

const styles = StyleSheet.create({})