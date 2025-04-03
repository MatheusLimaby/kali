import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, View } from 'react-native';
import {PaperProvider, Card, Title, Paragraph, Button, Divider} from 'react-native-paper';
import { FlatList, Text } from 'react-native';

export default function App() {

  const data = [
    {key: '1', nome: 'Matheus', idade: 19, escolaridade: 'Superior'},
    {key: '2', nome: 'Marcelo', idade: 19, escolaridade: 'Superior'},
    {key: '3', nome: 'Vinícius', idade: 19, escolaridade: 'Superior'},
    {key: '4', nome: 'Matheus', idade: 19, escolaridade: 'Superior'},
    {key: '4', nome: 'Matheus', idade: 19, escolaridade: 'Superior'},
    {key: '4', nome: 'Matheus', idade: 19, escolaridade: 'Superior'},
  ];


  
  return (
    <PaperProvider>
  
      <StatusBar style="auto" />

      <View > 
        <FlatList
          data={data}
          renderItem={({item}) => (
            <Card>
              <Card.Content>
                <Title>{item.nome}</Title>
                <Paragraph>Idade: {item.idade}</Paragraph>
                <Paragraph>Escolaridade: {item.escolaridade}</Paragraph>
              </Card.Content>
              <Card.Actions>
                <Button>Ver Perfil</Button>
              </Card.Actions>
            </Card>
          )}
        />

    </View>
  </PaperProvider>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',

  },
});
