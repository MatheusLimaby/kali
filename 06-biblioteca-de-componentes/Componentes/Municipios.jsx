import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Avatar, Card } from 'react-native-paper'




export default function Municipios(props) {
    const {nome, imagem} = props

  return (
    <Card.Title
    style={{margin: 5}}
    title={nome}
    left={(props) => <Avatar.Image {...props} source={{ uri: imagem }} size={50} />}
    
    
    />

    
  )
}

const styles = StyleSheet.create({})