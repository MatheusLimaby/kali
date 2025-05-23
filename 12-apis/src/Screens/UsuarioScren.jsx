import { StyleSheet, View } from 'react-native'
import React from 'react'
import { useState, useEffect } from 'react'
import { Card, Text, Avatar } from 'react-native-paper'
import axios from 'axios'
export default function UsuarioScren({navigation, route}) { 
  const idUsuario = route.params
  console.log(idUsuario)
  const [usuario, setUsuario] = useState()

  useEffect(() => {
    axios("https://dummyjson.com/users/" + idUsuario)
      .then (resposta => {
        setUsuario(resposta.data);
        console.log(resposta.data)
      
      })
      .catch((error) => {
        alert("Erro ao carregar o usuário");
      });
  }, [])
   return (
    

    <View>
      <Card>
      <Card.Content>
        <Card.Title title={`${usuario?.firstName} ${usuario?.lastName}`} />
        <Avatar.Image size={80} source={{ uri: usuario?.image }} />
        <Text>Idade: {usuario?.age}</Text>
        <Text>Telefone: {usuario?.phone}</Text>
        <Text>Cidade: {usuario?.address.city}</Text>
        <Text>Estado: {usuario?.address.state}</Text>
        <Text>País: {usuario?.address.country}</Text>
        <Text>Rua: {usuario?.address.address}</Text>
        <Text>Zip: {usuario?.address.zipCode}</Text>
        <Text>Email: {usuario?.email}</Text>
        <Text>Nome de Usuário: {usuario?.username}</Text>
        <Text>Senha: {usuario?.password}</Text>
        <Text>Data de Nascimento: {usuario?.birthDate}</Text>
        <Text>Altura: {usuario?.height}</Text>
        <Text>Peso: {usuario.weight}</Text>
      
      </Card.Content>        
          </Card>
    </View>
  )
}

const styles = StyleSheet.create({})