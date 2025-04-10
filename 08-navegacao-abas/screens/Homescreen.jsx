import { StyleSheet, View, ScrollView } from 'react-native'
import { Text, Card, Title, Paragraph } from 'react-native-paper'
import React from 'react'

export default function Homescreen() {
  return (
    <ScrollView style={styles.container}>
      <Text variant="headlineMedium" style={{fontWeight:"bold", textAlign: 'center'}}>Início</Text>

        <Card style={{margin: 10}}>
            <Card.Content>
                <Title>Card Title</Title>
                <Paragraph>Card Content</Paragraph>
            </Card.Content>
            <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
        </Card>
        <Card style={{margin: 10}}>
            <Card.Content>
                <Title>Card Title</Title>
                <Paragraph>Card Content</Paragraph>
            </Card.Content>
            <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
        </Card>
        <Card style={{margin: 10}}>
            <Card.Content>
                <Title>Card Title</Title>
                <Paragraph>Card Content</Paragraph>
            </Card.Content>
            <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
        </Card>

   
    </ScrollView>
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'brown',
        paddingTop: 10,
        flex: 1,
    }
})