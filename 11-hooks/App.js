import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Nome from './src/components/Nome';
import Volume from './src/components/Volume';
import NumeroAleatorio from './src/components/NumeroAleatorio';

export default function App() {
  return (
    <View style={styles.container}>
      <Nome></Nome>
      <Text></Text>
      <Text></Text>
      <Volume></Volume>
      <Text></Text>
      <Text></Text>
      <NumeroAleatorio></NumeroAleatorio>
    </View>
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
